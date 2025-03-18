# Finanza Zuid

A modern financial services platform built with Next.js.

## Features

- Modern, responsive design
- Authentication with Auth0
- Member management
- Event registration
- Resource library
- Contact forms

## Tech Stack

- Next.js 14
- TypeScript
- Tailwind CSS
- Auth0 for authentication
- Supabase for database
- Framer Motion for animations

## Development

To run the development server:

```bash
npm install
npm run dev
```

## Environment Variables

Create a `.env.local` file with the following variables:

```env
# Auth0
NEXT_PUBLIC_AUTH0_CLIENT_ID=
AUTH0_CLIENT_SECRET=
AUTH0_ISSUER_BASE_URL=
AUTH0_SECRET=

# Supabase
NEXT_PUBLIC_SUPABASE_URL=
SUPABASE_SERVICE_ROLE_KEY=
```

## Production

To build for production:

```bash
npm run build
npm start
``` 