import { useState, useEffect } from 'react';
import Layout from '../components/common/Layout';
import Hero from '../components/home/Hero';
import UpcomingEvents from '../components/home/UpcomingEvents';
import FeaturedResources from '../components/home/FeaturedResources';
import MemberSpotlight from '../components/home/MemberSpotlight';
import { getHomePageData } from '../lib/api';

export default function Home({ heroData, events, resources, spotlightMember }) {
  return (
    <Layout 
      title="Home" 
      description="Finanza Zuid - The premier network for Chief Financial Officers. Join our community of finance leaders."
    >
      <Hero 
        title={heroData.title} 
        subtitle={heroData.subtitle} 
        ctaText={heroData.ctaText} 
        ctaLink={heroData.ctaLink} 
        image={heroData.image}
      />
      
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-semibold text-gray-800 mb-8">Upcoming Events</h2>
        <UpcomingEvents events={events} />
      </section>
      
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-semibold text-gray-800 mb-8">Featured Resources</h2>
          <FeaturedResources resources={resources} />
        </div>
      </section>
      
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-semibold text-gray-800 mb-8">Member Spotlight</h2>
        <MemberSpotlight member={spotlightMember} />
      </section>
    </Layout>
  );
}

export async function getStaticProps() {
  const data = await getHomePageData();
  
  return {
    props: {
      heroData: data.hero,
      events: data.events,
      resources: data.resources,
      spotlightMember: data.spotlightMember,
    },
    revalidate: 3600, // Revalidate every hour
  };
}