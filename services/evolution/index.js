require('dotenv').config();

const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.SERVER_PORT || 10000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Health check endpoint
app.get('/health', (req, res) => {
  res.json({
    status: 'OK',
    timestamp: new Date().toISOString(),
    version: '2.0.0'
  });
});

// Root endpoint
app.get('/', (req, res) => {
  res.json({
    message: 'Flavourly OS Evolution API Service',
    status: 'running',
    port: PORT,
    environment: process.env.NODE_ENV || 'development'
  });
});

// WhatsApp webhook endpoints (placeholder)
app.post('/webhook', (req, res) => {
  console.log('Webhook received:', req.body);
  res.json({ success: true, message: 'Webhook received' });
});

app.get('/webhook', (req, res) => {
  // Verification endpoint for WhatsApp webhook
  const mode = req.query['hub.mode'];
  const token = req.query['hub.verify_token'];
  const challenge = req.query['hub.challenge'];
  
  if (mode && token) {
    // TODO: Verify token
    res.status(200).send(challenge);
  } else {
    res.status(403).send('Forbidden');
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`Evolution API service running on port ${PORT}`);
  console.log(`Authentication API Key: ${process.env.AUTHENTICATION_API_KEY}`);
});