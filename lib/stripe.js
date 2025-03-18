import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export async function createCheckoutSession(eventId, userId, eventDetails) {
  const session = await stripe.checkout.sessions.create({
    payment_method_types: ['card'],
    line_items: [
      {
        price_data: {
          currency: 'eur',
          product_data: {
            name: eventDetails.title,
            description: eventDetails.shortDescription,
            images: eventDetails.mainImage ? [eventDetails.mainImage] : [],
          },
          unit_amount: eventDetails.price * 100, // Convert to cents
        },
        quantity: 1,
      },
    ],
    mode: 'payment',
    success_url: `${process.env.NEXT_PUBLIC_BASE_URL}/members/events?success=true&event=${eventId}`,
    cancel_url: `${process.env.NEXT_PUBLIC_BASE_URL}/events/${eventDetails.slug.current}?canceled=true`,
    metadata: {
      eventId,
      userId,
    },
  });
  
  return session;
}