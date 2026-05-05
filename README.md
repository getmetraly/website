# Metraly Website

The public website for Metraly: a privacy-first, self-hosted Engineering Intelligence platform.

## Prerequisites

- Node.js 18.x or later
- npm 9.x or later (or pnpm/yarn equivalent)

## Local Development

```bash
# Install dependencies
npm install

# Start development server with hot reload
npm run dev
```

The development server will be available at [http://localhost:3000](http://localhost:3000).

## Build

```bash
# Create production build
npm run build

# Start production server (after build)
npm start
```

The `npm run build` command:
- Compiles TypeScript
- Bundles all pages and components
- Generates static optimization where possible
- Does **not** require backend services, secrets, or the `../app` repository

## Deployment to Vercel

This project is configured for deployment on [Vercel](https://vercel.com):

### One-Click Deploy

Push to your Git repository and import the project in the Vercel dashboard. The `next.config.ts` is already configured for Vercel deployment.

### Vercel CLI Deploy

```bash
# Install Vercel CLI
npm i -g vercel

# Login to Vercel
vercel login

# Deploy to preview
vercel

# Deploy to production
vercel --prod
```

### Important Notes

- **Build Command**: `npm run build` (automatic on Vercel)
- **Output Directory**: `.next` (managed by Next.js)
- **No Secrets Required**: The build runs without environment variables
- **Legacy Redirects**: Old `.html` URLs (index.html, pricing.html, etc.) redirect automatically to new App Router paths

## Project Structure

```
app/
  layout.tsx        # Root layout with navigation/footer
  page.tsx          # Home page (/)
  pricing/page.tsx   # Pricing page (/pricing)
  docs/page.tsx      # Documentation page (/docs)
  demo/page.tsx      # Demo preview page (/demo)
  privacy/page.tsx   # Privacy policy (/privacy)
  terms/page.tsx     # Terms of service (/terms)
  globals.css        # Global styles
components/         # Reusable React components
next.config.ts      # Next.js configuration with redirects
```

## Scripts

| Script        | Description                        |
|---------------|------------------------------------|
| `npm run dev` | Start development server           |
| `npm run build` | Create production build          |
| `npm start`   | Start production server            |
| `npm run lint` | Run Next.js linter                |

## License

This website source code is available under the AGPLv3 license. See `../docs` for full licensing details.

## Canonical Sources

- Product truth: [`../docs`](https://github.com/metraly/docs)
- App/demo source: [`../app`](https://github.com/metraly/app)
- Website repo: this repository
