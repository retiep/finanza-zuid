import { useSession, signIn, signOut } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { supabase } from './supabase';
import { useMockAuth } from './mockAuth';

// Check if we're in development mode and using mock data
const useMockData = process.env.NODE_ENV === 'development' && process.env.NEXT_PUBLIC_USE_MOCK_DATA === 'true';

// Custom hook to handle authentication
export function useAuth() {
  const { data: session, status } = useSession();
  const mockAuth = useMockAuth();
  const loading = useMockData ? mockAuth.isLoading : status === 'loading';
  const isAuthenticated = useMockData ? mockAuth.isAuthenticated : !!session;
  
  return {
    session: useMockData ? { user: mockAuth.user } : session,
    loading,
    isAuthenticated,
    signIn: useMockData ? mockAuth.login : () => signIn('auth0'),
    signOut: useMockData ? mockAuth.logout : () => signOut({ callbackUrl: '/' }),
  };
}

// Custom hook to handle protected routes
export function useProtectedRoute() {
  const { isAuthenticated, loading } = useAuth();
  const router = useRouter();
  const [isReady, setIsReady] = useState(false);
  
  useEffect(() => {
    if (!loading) {
      if (!isAuthenticated) {
        router.push('/login');
      } else {
        setIsReady(true);
      }
    }
  }, [isAuthenticated, loading, router]);
  
  return { isReady, loading, isAuthenticated };
}

// Custom hook to get user profile
export function useUserProfile() {
  const { session, isAuthenticated, loading } = useAuth();
  const [profile, setProfile] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);
  
  useEffect(() => {
    async function fetchProfile() {
      if (!isAuthenticated || !session?.user?.id) {
        setIsLoading(false);
        return;
      }
      
      try {
        if (useMockData) {
          // In mock mode, use the user from the session directly
          setProfile(session.user);
          setIsLoading(false);
          return;
        }
        
        const { data, error } = await supabase
          .from('profiles')
          .select('*')
          .eq('id', session.user.id)
          .single();
        
        if (error) throw error;
        
        setProfile(data);
      } catch (err: any) {
        setError(err);
      } finally {
        setIsLoading(false);
      }
    }
    
    if (!loading) {
      fetchProfile();
    }
  }, [session, isAuthenticated, loading]);
  
  return { profile, isLoading, error };
}

// Custom hook to check if user has active membership
export function useActiveMembership() {
  const { session, isAuthenticated, loading } = useAuth();
  const [hasMembership, setHasMembership] = useState(false);
  const [membershipDetails, setMembershipDetails] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);
  
  useEffect(() => {
    async function checkMembership() {
      if (!isAuthenticated || !session?.user?.id) {
        setIsLoading(false);
        return;
      }
      
      try {
        if (useMockData) {
          // In mock mode, always return true for membership
          setHasMembership(true);
          setMembershipDetails({
            id: 'mock-membership',
            status: 'active',
            plans: {
              name: 'Professional',
              features: ['All features included']
            }
          });
          setIsLoading(false);
          return;
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
          .eq('user_id', session.user.id)
          .eq('status', 'active')
          .single();
        
        if (error && error.code !== 'PGRST116') throw error;
        
        setHasMembership(!!data);
        setMembershipDetails(data);
      } catch (err: any) {
        setError(err);
      } finally {
        setIsLoading(false);
      }
    }
    
    if (!loading) {
      checkMembership();
    }
  }, [session, isAuthenticated, loading]);
  
  return { hasMembership, membershipDetails, isLoading, error };
}

// Function to check if user has access to a resource
export async function checkResourceAccess(resourceId: string) {
  if (useMockData) {
    return true; // In mock mode, always grant access
  }
  
  try {
    // First check if resource is public
    const { data: resource, error: resourceError } = await supabase
      .from('resources')
      .select('member_only')
      .eq('id', resourceId)
      .single();
    
    if (resourceError) throw resourceError;
    
    // If resource is not member-only, everyone has access
    if (!resource.member_only) return true;
    
    // Otherwise, check if user has an active membership
    const { data: session } = await supabase.auth.getSession();
    
    if (!session.session?.user?.id) return false;
    
    const { data: membership, error: membershipError } = await supabase
      .from('memberships')
      .select('id')
      .eq('user_id', session.session.user.id)
      .eq('status', 'active')
      .single();
    
    if (membershipError && membershipError.code !== 'PGRST116') throw membershipError;
    
    return !!membership;
  } catch (error) {
    console.error('Error checking resource access:', error);
    return false;
  }
} 