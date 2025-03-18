# Finanza Zuid

A modern financial services platform built with Next.js.

## Features

- Responsive design
- Authentication with Auth0
- Member management
- Event registration
- Resource library
- Contact forms

## Tech Stack

- Next.js 14
- TypeScript
- Tailwind CSS
- Auth0
- Supabase
- Framer Motion

## Development

1. Clone the repository:
   ```bash
   git clone https://github.com/retiep/finanza-zuid.git
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up environment variables:
   ```bash
   cp .env.example .env.local
   ```
   Then edit `.env.local` with your values.

4. Run the development server:
   ```bash
   npm run dev
   ```

## Deployment

This project is deployed on Vercel. Here's how to deploy your own instance:

1. Fork this repository
2. Sign up for [Vercel](https://vercel.com)
3. Import your fork into Vercel
4. Configure environment variables
5. Deploy!

### Branch Strategy

- `main`: Production branch, deployed to finanzazuid.nl
- `develop`: Development branch, used for integration
- Feature branches: Create from `develop`, merge via PR

### CI/CD

We use GitHub Actions for:
- Automated testing
- Linting
- Preview deployments
- Production deployments

## Contributing

1. Create a feature branch from `develop`
2. Make your changes
3. Create a Pull Request
4. Wait for CI checks and review
5. Merge and deploy!

## License

Copyright © 2024 Finanza Zuid. All rights reserved.