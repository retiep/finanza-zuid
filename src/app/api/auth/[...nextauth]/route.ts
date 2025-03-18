import NextAuth from 'next-auth';
import Auth0Provider from 'next-auth/providers/auth0';
import { createClient } from '@supabase/supabase-js';
import { Session } from 'next-auth';

// Extend the built-in session type
interface CustomSession extends Session {
  user: {
    name?: string | null;
    email?: string | null;
    image?: string | null;
    id: string;
  };
  accessToken: string;
}

// Initialize Supabase client
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY || '';
const supabase = createClient(supabaseUrl, supabaseServiceKey);

const handler = NextAuth({
  providers: [
    Auth0Provider({
      clientId: process.env.NEXT_PUBLIC_AUTH0_CLIENT_ID || '',
      clientSecret: process.env.AUTH0_CLIENT_SECRET || '',
      issuer: process.env.AUTH0_ISSUER_BASE_URL,
    }),
  ],
  secret: process.env.AUTH0_SECRET,
  session: {
    strategy: 'jwt',
  },
  callbacks: {
    async jwt({ token, user, account }) {
      // Initial sign in
      if (account && user) {
        // Add user to Supabase if they don't exist
        const { data: existingUser, error: queryError } = await supabase
          .from('users')
          .select('*')
          .eq('auth_id', user.id)
          .single();

        if (queryError && queryError.code !== 'PGRST116') {
          console.error('Error checking user existence:', queryError);
        }

        if (!existingUser) {
          const { error: insertError } = await supabase.from('users').insert([
            {
              auth_id: user.id,
              email: user.email,
              name: user.name,
              created_at: new Date().toISOString(),
            },
          ]);

          if (insertError) {
            console.error('Error creating user in Supabase:', insertError);
          }
        }

        return {
          ...token,
          userId: user.id,
          accessToken: account.access_token,
          refreshToken: account.refresh_token,
        };
      }

      return token;
    },
    async session({ session, token }) {
      if (token && session.user) {
        (session as CustomSession).user.id = token.userId as string;
        (session as CustomSession).accessToken = token.accessToken as string;
      }
      return session as CustomSession;
    },
  },
  pages: {
    signIn: '/login',
    signOut: '/',
    error: '/error',
  },
});

export { handler as GET, handler as POST }; 