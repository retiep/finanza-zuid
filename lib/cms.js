import { createClient } from 'next-sanity';
import imageUrlBuilder from '@sanity/image-url';

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  apiVersion: '2023-05-03',
  useCdn: process.env.NODE_ENV === 'production',
});

const builder = imageUrlBuilder(client);

export function urlFor(source) {
  return builder.image(source);
}

export async function getHomePageData() {
  const query = `{
    "hero": *[_type == "homePage"][0].hero,
    "events": *[_type == "event" && date > now()] | order(date asc) [0...3] {
      _id,
      title,
      slug,
      date,
      shortDescription,
      mainImage,
      location
    },
    "resources": *[_type == "blog"] | order(_createdAt desc) [0...3] {
      _id,
      title,
      slug,
      publishedAt,
      excerpt,
      mainImage,
      categories[]->{ title }
    },
    "spotlightMember": *[_type == "memberSpotlight"][0] {
      member->{
        name,
        title,
        company,
        bio,
        image
      },
      quote
    }
  }`;
  
  return await client.fetch(query);
}

export async function getAllEventSlugs() {
  const query = `*[_type == "event"].slug.current`;
  const slugs = await client.fetch(query);
  return slugs;
}

export async function getEvent(slug) {
  const query = `*[_type == "event" && slug.current == $slug][0] {
    _id,
    title,
    slug,
    date,
    endDate,
    location,
    shortDescription,
    description,
    mainImage,
    speakers,
    isMembersOnly,
    capacity,
    price
  }`;
  
  return await client.fetch(query, { slug });
}