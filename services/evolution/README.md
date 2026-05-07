# Evolution API Service

Flavourly OS WhatsApp infrastructure service.

## Configuration

Environment variables configured in `.env`:
- `SERVER_TYPE=http` - HTTP server type
- `SERVER_PORT=10000` - Port for Railway deployment
- `AUTHENTICATION_API_KEY=flavourly123` - API authentication key
- `DATABASE_ENABLED=false` - Database disabled for now

## Endpoints

- `GET /` - Service status
- `GET /health` - Health check endpoint
- `POST /webhook` - WhatsApp webhook receiver
- `GET /webhook` - WhatsApp webhook verification

## Deployment

Deploy to Railway with automatic Dockerfile detection.

## Local Development

1. Install dependencies: `npm install`
2. Start service: `npm run start`
3. Access at `http://localhost:10000`