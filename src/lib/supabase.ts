import { createClient } from '@supabase/supabase-js';
import { mockSupabaseFunctions } from './mockData';

// Check if we're in development mode and using mock data
const useMockData = process.env.NODE_ENV === 'development' && process.env.NEXT_PUBLIC_USE_MOCK_DATA === 'true';

// Create a single supabase client for interacting with your database
export const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL || '',
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || ''
);

// Create a service role client for server-side operations
export const supabaseAdmin = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL || '',
  process.env.SUPABASE_SERVICE_ROLE_KEY || '',
  {
    auth: {
      autoRefreshToken: false,
      persistSession: false,
    },
  }
);

// User profile functions
export async function getUserProfile(userId: string) {
  if (useMockData) {
    return mockSupabaseFunctions.getUserProfile();
  }
  
  const { data, error } = await supabase
    .from('profiles')
    .select('*')
    .eq('id', userId)
    .single();
  
  if (error) throw error;
  return data;
}

export async function updateUserProfile(userId: string, updates: any) {
  if (useMockData) {
    return mockSupabaseFunctions.updateUserProfile(userId, updates);
  }
  
  const { data, error } = await supabase
    .from('profiles')
    .update(updates)
    .eq('id', userId)
    .select();
  
  if (error) throw error;
  return data;
}

// Event registration functions
export async function getEventRegistrations(userId: string) {
  if (useMockData) {
    return mockSupabaseFunctions.getEventRegistrations();
  }
  
  const { data, error } = await supabase
    .from('event_registrations')
    .select(`
      *,
      events:event_id (
        id,
        title,
        date,
        location
      )
    `)
    .eq('user_id', userId)
    .eq('status', 'confirmed');
  
  if (error) throw error;
  return data;
}

export async function registerForEvent(userId: string, eventId: string) {
  if (useMockData) {
    return mockSupabaseFunctions.registerForEvent();
  }
  
  // First check if already registered
  const { data: existingReg } = await supabase
    .from('event_registrations')
    .select('*')
    .eq('user_id', userId)
    .eq('event_id', eventId)
    .single();
  
  if (existingReg) {
    throw new Error('Already registered for this event');
  }
  
  // Register for the event
  const { data, error } = await supabase
    .from('event_registrations')
    .insert([
      { user_id: userId, event_id: eventId, status: 'confirmed' }
    ])
    .select();
  
  if (error) throw error;
  
  // Update event attendance count
  await supabase.rpc('increment_event_attendance', { event_id: eventId });
  
  return data;
}

export async function cancelEventRegistration(userId: string, eventId: string) {
  if (useMockData) {
    return mockSupabaseFunctions.cancelEventRegistration();
  }
  
  const { data, error } = await supabase
    .from('event_registrations')
    .update({ status: 'cancelled' })
    .eq('user_id', userId)
    .eq('event_id', eventId)
    .select();
  
  if (error) throw error;
  
  // Update event attendance count
  await supabase.rpc('decrement_event_attendance', { event_id: eventId });
  
  return data;
}

// Resource access functions
export async function getUserResourceAccess(userId: string) {
  if (useMockData) {
    return [];
  }
  
  const { data, error } = await supabase
    .from('user_resources')
    .select(`
      *,
      resources:resource_id (
        id,
        title,
        type,
        description
      )
    `)
    .eq('user_id', userId);
  
  if (error) throw error;
  return data;
}

export async function checkResourceAccess(userId: string, resourceId: string) {
  if (useMockData) {
    return true; // For testing, allow access to all resources
  }
  
  const { data, error } = await supabase
    .from('user_resources')
    .select('*')
    .eq('user_id', userId)
    .eq('resource_id', resourceId)
    .single();
  
  if (error && error.code !== 'PGRST116') { // PGRST116 is the error code for no rows returned
    throw error;
  }
  
  return !!data; // Return true if data exists, false otherwise
}

// Membership functions
export async function getUserMembership(userId: string) {
  if (useMockData) {
    return mockSupabaseFunctions.getUserMembership();
  }
  
  const { data, error } = await supabase
    .from('memberships')
    .select(`
      *,
      plans:plan_id (
        id,
        name,
        description,
        price,
        features
      )
    `)
    .eq('user_id', userId)
    .eq('status', 'active')
    .single();
  
  if (error && error.code !== 'PGRST116') {
    throw error;
  }
  
  return data;
}

export async function checkActiveMembership(userId: string) {
  if (useMockData) {
    return mockSupabaseFunctions.checkActiveMembership();
  }
  
  const { data, error } = await supabase
    .from('memberships')
    .select('id')
    .eq('user_id', userId)
    .eq('status', 'active')
    .single();
  
  if (error && error.code !== 'PGRST116') {
    throw error;
  }
  
  return !!data; // Return true if active membership exists
} 