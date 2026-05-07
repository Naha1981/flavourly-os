# Flavourly OS

A WhatsApp-native customer retention operating system for restaurants.

## Monorepo Structure

- `apps/dashboard/` - Lovable frontend exported project
- `services/evolution/` - Evolution API config + webhook logic
- `infrastructure/docs/` - PRDs, deployment docs, architecture

## Getting Started

### Prerequisites
- Node.js 18+
- npm 9+
- Git

### Setup
1. Clone this repository
2. Navigate to `services/evolution/`
3. Install dependencies: `npm install`
4. Start Evolution API: `npm run start`
5. Access at `http://localhost:10000`

## Development

### Local Development
- Evolution API runs on port 10000
- Dashboard will be developed in `apps/dashboard/`

### Deployment
- Evolution API deployed to Railway
- Dashboard deployed to Vercel
- Database and Auth via Supabase

## License

MIT