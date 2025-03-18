import NextAuth from 'next-auth';
import LinkedInProvider from 'next-auth/providers/linkedin';
import { PrismaAdapter } from '@next-auth/prisma-adapter';
import { prisma } from './prisma';

export const authOptions = {
  adapter: PrismaAdapter(prisma),
  providers: [
    LinkedInProvider({
      clientId: process.env.LINKEDIN_CLIENT_ID,
      clientSecret: process.env.LINKEDIN_CLIENT_SECRET,
      authorization: {
        params: {
          scope: 'openid profile email r_liteprofile r_emailaddress',
        },
      },
      profile(profile) {
        return {
          id: profile.sub,
          name: `${profile.given_name} ${profile.family_name}`,
          email: profile.email,
          image: profile.picture,
          linkedinProfile: profile.sub, // LinkedIn profile ID
          position: profile.position,
          company: profile.company,
          industry: profile.industry,
        };
      },
    }),
  ],
  callbacks: {
    async signIn({ user, account, profile }) {
      if (account.provider === 'linkedin') {
        // Fetch additional LinkedIn data using LinkedIn API
        const linkedInData = await fetchLinkedInData(account.access_token);
        
        // Update user data in database
        await prisma.user.update({
          where: { id: user.id },
          data: {
            position: linkedInData.position,
            company: linkedInData.company,
            industry: linkedInData.industry,
            linkedinUrl: linkedInData.publicProfileUrl,
            lastUpdated: new Date(),
          },
        });
      }
      return true;
    },
    async session({ session, user }) {
      // Add custom user data to session
      session.user.position = user.position;
      session.user.company = user.company;
      session.user.industry = user.industry;
      session.user.linkedinUrl = user.linkedinUrl;
      return session;
    },
  },
  pages: {
    signIn: '/auth/signin',
    error: '/auth/error',
  },
  session: {
    strategy: 'jwt',
    maxAge: 30 * 24 * 60 * 60, // 30 days
  },
};

export default NextAuth(authOptions);

async function fetchLinkedInData(accessToken) {
  const response = await fetch('https://api.linkedin.com/v2/me?projection=(id,firstName,lastName,positions,industry,publicProfileUrl)', {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });
  
  if (!response.ok) {
    throw new Error('Failed to fetch LinkedIn data');
  }
  
  const data = await response.json();
  
  return {
    position: data.positions?.values?.[0]?.title || '',
    company: data.positions?.values?.[0]?.company?.name || '',
    industry: data.industry || '',
    publicProfileUrl: data.publicProfileUrl || '',
  };
}