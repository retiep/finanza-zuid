import { NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';

// Initialize Supabase client
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY || '';
const supabase = createClient(supabaseUrl, supabaseServiceKey);

export async function POST(request: Request) {
  try {
    const { userId, eventId, attendeeDetails } = await request.json();

    // Validate required fields
    if (!userId || !eventId) {
      return NextResponse.json(
        { error: 'Missing required fields: userId and eventId are required' },
        { status: 400 }
      );
    }

    // Check if user is already registered for this event
    const { data: existingRegistration, error: checkError } = await supabase
      .from('event_registrations')
      .select('*')
      .eq('user_id', userId)
      .eq('event_id', eventId)
      .single();

    if (checkError && checkError.code !== 'PGRST116') {
      // PGRST116 is the error code for "no rows returned"
      return NextResponse.json(
        { error: 'Error checking registration status', details: checkError },
        { status: 500 }
      );
    }

    if (existingRegistration) {
      return NextResponse.json(
        { message: 'User is already registered for this event', registration: existingRegistration },
        { status: 200 }
      );
    }

    // Register user for the event
    const { data: registration, error: insertError } = await supabase
      .from('event_registrations')
      .insert([
        {
          user_id: userId,
          event_id: eventId,
          registration_date: new Date().toISOString(),
          status: 'confirmed',
          attendee_details: attendeeDetails || {},
        },
      ])
      .select()
      .single();

    if (insertError) {
      return NextResponse.json(
        { error: 'Error registering for event', details: insertError },
        { status: 500 }
      );
    }

    // Update event attendance count
    const { error: updateError } = await supabase.rpc('increment_event_attendees', {
      event_id: eventId,
    });

    if (updateError) {
      console.error('Error updating event attendance count:', updateError);
      // We don't want to fail the registration if just the count update fails
    }

    return NextResponse.json(
      { message: 'Successfully registered for event', registration },
      { status: 201 }
    );
  } catch (error) {
    console.error('Error in event registration:', error);
    return NextResponse.json(
      { error: 'Internal server error', details: (error as Error).message },
      { status: 500 }
    );
  }
}

export async function DELETE(request: Request) {
  try {
    const { userId, eventId } = await request.json();

    // Validate required fields
    if (!userId || !eventId) {
      return NextResponse.json(
        { error: 'Missing required fields: userId and eventId are required' },
        { status: 400 }
      );
    }

    // Cancel registration
    const { data, error } = await supabase
      .from('event_registrations')
      .update({ status: 'cancelled', cancellation_date: new Date().toISOString() })
      .eq('user_id', userId)
      .eq('event_id', eventId)
      .select()
      .single();

    if (error) {
      return NextResponse.json(
        { error: 'Error cancelling registration', details: error },
        { status: 500 }
      );
    }

    // Update event attendance count
    const { error: updateError } = await supabase.rpc('decrement_event_attendees', {
      event_id: eventId,
    });

    if (updateError) {
      console.error('Error updating event attendance count:', updateError);
      // We don't want to fail the cancellation if just the count update fails
    }

    return NextResponse.json(
      { message: 'Successfully cancelled registration', registration: data },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error in registration cancellation:', error);
    return NextResponse.json(
      { error: 'Internal server error', details: (error as Error).message },
      { status: 500 }
    );
  }
}

export async function GET(request: Request) {
  try {
    const url = new URL(request.url);
    const userId = url.searchParams.get('userId');
    const eventId = url.searchParams.get('eventId');

    if (!userId) {
      return NextResponse.json(
        { error: 'Missing required parameter: userId' },
        { status: 400 }
      );
    }

    let query = supabase
      .from('event_registrations')
      .select(`
        *,
        events:event_id (
          id,
          title,
          date,
          location,
          description
        )
      `)
      .eq('user_id', userId)
      .eq('status', 'confirmed');

    if (eventId) {
      query = query.eq('event_id', eventId);
    }

    const { data, error } = await query;

    if (error) {
      return NextResponse.json(
        { error: 'Error fetching registrations', details: error },
        { status: 500 }
      );
    }

    return NextResponse.json({ registrations: data }, { status: 200 });
  } catch (error) {
    console.error('Error fetching registrations:', error);
    return NextResponse.json(
      { error: 'Internal server error', details: (error as Error).message },
      { status: 500 }
    );
  }
} 