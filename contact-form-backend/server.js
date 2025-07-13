const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const contactRoutes = require('./Routes/Contact'); // Import the contact routes
const registerRoutes = require('./Routes/Registration');
require('dotenv').config(); // Load environment variables

const app = express();

// Middleware
app.use(cors({
  origin: ['http://localhost:3000'], // Allowed origins
  methods: ['GET', 'POST'], // Allowed methods
  credentials: true // If you are using cookies or authentication
}));

app.use(bodyParser.json()); // Parse incoming JSON data

// Use the contact routes
app.use('/api', contactRoutes);
app.use('/api', registerRoutes); // Prefixing all routes in contact.js with /api

// Start the server
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
