const express = require('express');
const app = express();

// Read environment variables
const PORT = process.env.PORT || 3000;
const API_KEY = process.env.API_KEY || 'no-key-provided';
const DB_HOST = process.env.DB_HOST || 'localhost';
const NODE_ENV = process.env.NODE_ENV || 'development';

app.get('/', (req, res) => {
  res.json({
    message: 'API Configuration',
    environment: NODE_ENV,
    port: PORT,
    database: DB_HOST,
    apiKey: API_KEY.substring(0, 4) + '****' // Partial display
  });
});

app.get('/health', (req, res) => {
  res.json({ status: 'healthy', timestamp: new Date() });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  console.log(`Environment: ${NODE_ENV}`);
});