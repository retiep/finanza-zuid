# Testing the Finanza Zuid Website

This guide will help you test the Finanza Zuid website locally without needing to set up external services like Sanity CMS, Supabase, or Auth0.

## Prerequisites

- Node.js (v16 or higher)
- npm or yarn

## Setup for Testing

1. Clone the repository and navigate to the project directory:
   ```bash
   git clone <repository-url>
   cd finanza-zuid
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env.local` file with the following content:
   ```
   # Next.js
   NEXT_PUBLIC_SITE_URL=http://localhost:3000
   NEXT_PUBLIC_USE_MOCK_DATA=true

   # The following values can be dummy values for testing
   AUTH0_SECRET=a_random_secret_at_least_32_characters_long
   AUTH0_BASE_URL=http://localhost:3000
   AUTH0_ISSUER_BASE_URL=https://example.auth0.com
   AUTH0_CLIENT_ID=dummy_client_id
   AUTH0_CLIENT_SECRET=dummy_client_secret
   NEXT_PUBLIC_SANITY_PROJECT_ID=dummy_project_id
   NEXT_PUBLIC_SANITY_DATASET=production
   SANITY_API_TOKEN=dummy_api_token
   NEXT_PUBLIC_SUPABASE_URL=https://example.supabase.co
   NEXT_PUBLIC_SUPABASE_ANON_KEY=dummy_anon_key
   SUPABASE_SERVICE_ROLE_KEY=dummy_service_role_key
   ```

4. Run the development server:
   ```bash
   npm run dev
   ```

   Alternatively, you can use the provided test script:
   ```bash
   ./test-site.sh
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser to see the website.

## Testing Features

### Public Pages
- Home page: [http://localhost:3000](http://localhost:3000)
- About page: [http://localhost:3000/about](http://localhost:3000/about)
- Events page: [http://localhost:3000/events](http://localhost:3000/events)
- Resources page: [http://localhost:3000/resources](http://localhost:3000/resources)
- Contact page: [http://localhost:3000/contact](http://localhost:3000/contact)

### Authentication
- Login page: [http://localhost:3000/login](http://localhost:3000/login)
- In test mode, you can click the "Log In" button without entering credentials to simulate login.
- After logging in, you'll be redirected to the member dashboard.

### Member Area
- Dashboard: [http://localhost:3000/member/dashboard](http://localhost:3000/member/dashboard)
- Member Events: [http://localhost:3000/member/events](http://localhost:3000/member/events)
- Member Resources: [http://localhost:3000/member/resources](http://localhost:3000/member/resources)
- Profile: [http://localhost:3000/member/profile](http://localhost:3000/member/profile)

## Mock Data

The website uses mock data for testing, which includes:
- Sample events
- Sample resources
- Sample articles
- A mock user profile
- Mock membership information

This allows you to test the full functionality of the website without needing to set up external services.

## Disabling Mock Mode

To test with real data, set `NEXT_PUBLIC_USE_MOCK_DATA=false` in your `.env.local` file and configure the actual service credentials. 