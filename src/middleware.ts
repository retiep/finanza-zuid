import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  // Get the pathname of the request (e.g. /, /protected, /protected/nested)
  const path = request.nextUrl.pathname;

  // If it's the login page or an API route, don't run the middleware
  if (path.startsWith('/login') || path.startsWith('/api')) {
    return NextResponse.next();
  }

  // Check if the user is logged in by looking for the isLoggedIn flag in localStorage
  const isLoggedIn = request.cookies.get('isLoggedIn')?.value;

  // If the user is not logged in and trying to access a protected route,
  // redirect them to the login page
  if (!isLoggedIn) {
    return NextResponse.redirect(new URL('/login', request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon.ico).*)'],
}; 