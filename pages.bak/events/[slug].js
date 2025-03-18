import { useState } from 'react';
import Layout from '../../components/common/Layout';
import EventDetail from '../../components/events/EventDetail';
import EventRegistration from '../../components/events/EventRegistration';
import { getEvent, getAllEventSlugs } from '../../lib/api';
import { useUser } from '@auth0/nextjs-auth0';

export default function EventPage({ event }) {
  const { user, isLoading } = useUser();
  const [registrationOpen, setRegistrationOpen] = useState(false);
  
  const handleRegisterClick = () => {
    if (!user) {
      // Redirect to login if not logged in
      window.location.href = `/api/auth/login?returnTo=/events/${event.slug}`;
      return;
    }
    
    setRegistrationOpen(true);
  };
  
  return (
    <Layout 
      title={event.title} 
      description={`Join us for ${event.title} - ${event.shortDescription}`}
    >
      <div className="container mx-auto px-4 py-8">
        <EventDetail 
          event={event} 
          onRegisterClick={handleRegisterClick} 
          isLoggedIn={!!user}
        />
        
        {registrationOpen && (
          <EventRegistration 
            event={event} 
            user={user} 
            onClose={() => setRegistrationOpen(false)} 
          />
        )}
      </div>
    </Layout>
  );
}

export async function getStaticPaths() {
  const slugs = await getAllEventSlugs();
  
  return {
    paths: slugs.map(slug => ({ params: { slug } })),
    fallback: 'blocking',
  };
}

export async function getStaticProps({ params }) {
  const event = await getEvent(params.slug);
  
  if (!event) {
    return {
      notFound: true,
    };
  }
  
  return {
    props: {
      event,
    },
    revalidate: 60, // Revalidate every minute
  };
}