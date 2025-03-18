-- Create profiles table
CREATE TABLE IF NOT EXISTS profiles (
  id UUID REFERENCES auth.users ON DELETE CASCADE PRIMARY KEY,
  email TEXT UNIQUE NOT NULL,
  first_name TEXT,
  last_name TEXT,
  company TEXT,
  job_title TEXT,
  phone TEXT,
  bio TEXT,
  avatar_url TEXT,
  linkedin_url TEXT,
  twitter_url TEXT,
  website_url TEXT,
  notification_preferences JSONB DEFAULT '{"email": true, "marketing": true}',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create events table
CREATE TABLE IF NOT EXISTS events (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  title TEXT NOT NULL,
  slug TEXT UNIQUE NOT NULL,
  date DATE NOT NULL,
  time TEXT NOT NULL,
  end_time TEXT,
  location TEXT NOT NULL,
  address TEXT,
  description TEXT NOT NULL,
  category TEXT NOT NULL,
  featured BOOLEAN DEFAULT FALSE,
  image_url TEXT,
  capacity INTEGER,
  current_attendance INTEGER DEFAULT 0,
  price DECIMAL(10, 2),
  member_only BOOLEAN DEFAULT FALSE,
  virtual_event BOOLEAN DEFAULT FALSE,
  virtual_event_url TEXT,
  registration_url TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create event_registrations table
CREATE TABLE IF NOT EXISTS event_registrations (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID REFERENCES profiles(id) ON DELETE CASCADE NOT NULL,
  event_id UUID REFERENCES events(id) ON DELETE CASCADE NOT NULL,
  status TEXT NOT NULL DEFAULT 'confirmed', -- confirmed, cancelled, waitlist
  registration_date TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  notes TEXT,
  UNIQUE(user_id, event_id)
);

-- Create resources table
CREATE TABLE IF NOT EXISTS resources (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  title TEXT NOT NULL,
  slug TEXT UNIQUE NOT NULL,
  type TEXT NOT NULL,
  category TEXT NOT NULL,
  description TEXT NOT NULL,
  content_url TEXT,
  file_url TEXT,
  image_url TEXT,
  featured BOOLEAN DEFAULT FALSE,
  member_only BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create user_resources table (for tracking access)
CREATE TABLE IF NOT EXISTS user_resources (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID REFERENCES profiles(id) ON DELETE CASCADE NOT NULL,
  resource_id UUID REFERENCES resources(id) ON DELETE CASCADE NOT NULL,
  access_granted_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  access_expires_at TIMESTAMP WITH TIME ZONE,
  UNIQUE(user_id, resource_id)
);

-- Create membership_plans table
CREATE TABLE IF NOT EXISTS membership_plans (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  name TEXT NOT NULL,
  description TEXT NOT NULL,
  price DECIMAL(10, 2) NOT NULL,
  billing_interval TEXT NOT NULL DEFAULT 'year', -- month, year
  features JSONB NOT NULL,
  is_active BOOLEAN DEFAULT TRUE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create memberships table
CREATE TABLE IF NOT EXISTS memberships (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID REFERENCES profiles(id) ON DELETE CASCADE NOT NULL,
  plan_id UUID REFERENCES membership_plans(id) NOT NULL,
  status TEXT NOT NULL DEFAULT 'active', -- active, cancelled, expired
  start_date TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  end_date TIMESTAMP WITH TIME ZONE,
  stripe_customer_id TEXT,
  stripe_subscription_id TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  UNIQUE(user_id, status) WHERE status = 'active'
);

-- Create newsletter_subscribers table
CREATE TABLE IF NOT EXISTS newsletter_subscribers (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  email TEXT UNIQUE NOT NULL,
  first_name TEXT,
  last_name TEXT,
  subscribed_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  status TEXT NOT NULL DEFAULT 'active', -- active, unsubscribed
  preferences JSONB DEFAULT '{"general": true, "events": true, "resources": true}'
);

-- Create contact_submissions table
CREATE TABLE IF NOT EXISTS contact_submissions (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  company TEXT,
  phone TEXT,
  message TEXT NOT NULL,
  subject TEXT,
  status TEXT NOT NULL DEFAULT 'new', -- new, in_progress, completed
  submitted_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create functions for event attendance management
CREATE OR REPLACE FUNCTION increment_event_attendance(event_id UUID)
RETURNS VOID AS $$
BEGIN
  UPDATE events
  SET current_attendance = current_attendance + 1
  WHERE id = event_id;
END;
$$ LANGUAGE plpgsql;

CREATE OR REPLACE FUNCTION decrement_event_attendance(event_id UUID)
RETURNS VOID AS $$
BEGIN
  UPDATE events
  SET current_attendance = GREATEST(0, current_attendance - 1)
  WHERE id = event_id;
END;
$$ LANGUAGE plpgsql;

-- Create RLS policies
-- Enable Row Level Security
ALTER TABLE profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE events ENABLE ROW LEVEL SECURITY;
ALTER TABLE event_registrations ENABLE ROW LEVEL SECURITY;
ALTER TABLE resources ENABLE ROW LEVEL SECURITY;
ALTER TABLE user_resources ENABLE ROW LEVEL SECURITY;
ALTER TABLE membership_plans ENABLE ROW LEVEL SECURITY;
ALTER TABLE memberships ENABLE ROW LEVEL SECURITY;
ALTER TABLE newsletter_subscribers ENABLE ROW LEVEL SECURITY;
ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;

-- Profiles policies
CREATE POLICY "Public profiles are viewable by everyone" ON profiles
  FOR SELECT USING (true);

CREATE POLICY "Users can update their own profile" ON profiles
  FOR UPDATE USING (auth.uid() = id);

-- Events policies
CREATE POLICY "Events are viewable by everyone" ON events
  FOR SELECT USING (true);

-- Event registrations policies
CREATE POLICY "Users can view their own event registrations" ON event_registrations
  FOR SELECT USING (auth.uid() = user_id);

CREATE POLICY "Users can register themselves for events" ON event_registrations
  FOR INSERT WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update their own event registrations" ON event_registrations
  FOR UPDATE USING (auth.uid() = user_id);

-- Resources policies
CREATE POLICY "Public resources are viewable by everyone" ON resources
  FOR SELECT USING (NOT member_only);

CREATE POLICY "Member-only resources are viewable by members" ON resources
  FOR SELECT USING (
    member_only AND EXISTS (
      SELECT 1 FROM memberships
      WHERE user_id = auth.uid()
      AND status = 'active'
    )
  );

-- User resources policies
CREATE POLICY "Users can view their own resource access" ON user_resources
  FOR SELECT USING (auth.uid() = user_id);

-- Membership plans policies
CREATE POLICY "Membership plans are viewable by everyone" ON membership_plans
  FOR SELECT USING (is_active);

-- Memberships policies
CREATE POLICY "Users can view their own memberships" ON memberships
  FOR SELECT USING (auth.uid() = user_id);

-- Newsletter subscribers policies
CREATE POLICY "Users can subscribe to newsletters" ON newsletter_subscribers
  FOR INSERT WITH CHECK (true);

CREATE POLICY "Users can update their own newsletter preferences" ON newsletter_subscribers
  FOR UPDATE USING (email = auth.email());

-- Contact submissions policies
CREATE POLICY "Users can submit contact forms" ON contact_submissions
  FOR INSERT WITH CHECK (true);

-- Create triggers for updated_at timestamps
CREATE OR REPLACE FUNCTION update_modified_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER update_profiles_modtime
BEFORE UPDATE ON profiles
FOR EACH ROW EXECUTE FUNCTION update_modified_column();

CREATE TRIGGER update_events_modtime
BEFORE UPDATE ON events
FOR EACH ROW EXECUTE FUNCTION update_modified_column();

CREATE TRIGGER update_resources_modtime
BEFORE UPDATE ON resources
FOR EACH ROW EXECUTE FUNCTION update_modified_column();

CREATE TRIGGER update_membership_plans_modtime
BEFORE UPDATE ON membership_plans
FOR EACH ROW EXECUTE FUNCTION update_modified_column();

CREATE TRIGGER update_memberships_modtime
BEFORE UPDATE ON memberships
FOR EACH ROW EXECUTE FUNCTION update_modified_column();

CREATE TRIGGER update_contact_submissions_modtime
BEFORE UPDATE ON contact_submissions
FOR EACH ROW EXECUTE FUNCTION update_modified_column(); 