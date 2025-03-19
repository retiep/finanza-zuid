import { createRouteHandlerClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';
import { NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';

export async function GET(request: Request) {
  try {
    const supabase = createRouteHandlerClient({ cookies });

    // Verify authentication
    const { data: { user }, error: authError } = await supabase.auth.getUser();
    if (authError || !user) {
      return new NextResponse('Unauthorized', { status: 401 });
    }

    // Get member data
    const { data: member, error: memberError } = await supabase
      .from('members')
      .select('*')
      .eq('id', user.id)
      .single();

    if (memberError || !member) {
      return new NextResponse('Member not found', { status: 404 });
    }

    // Prepare export data
    const exportData = {
      profile: {
        name: member.name,
        email: user.email,
        job_title: member.job_title,
        company: member.company,
        phone: member.phone,
        bio: member.bio,
        linkedin_url: member.linkedin_url,
        expertise: member.expertise,
        interests: member.interests
      },
      membership: {
        status: member.membership_status,
        start_date: member.membership_start_date,
        is_visible: member.is_visible
      }
    };

    // Generate filename
    const filename = `${member.name.toLowerCase().replace(/\s+/g, '-')}-profile.json`;

    // Set response headers
    const headers = new Headers();
    headers.set('Content-Type', 'application/json');
    headers.set('Content-Disposition', `attachment; filename="${filename}"`);

    return new NextResponse(JSON.stringify(exportData, null, 2), {
      headers,
      status: 200
    });
  } catch (error) {
    console.error('Export error:', error);
    return new NextResponse('Export failed', { status: 500 });
  }
}