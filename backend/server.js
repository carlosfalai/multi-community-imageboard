const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require('./config/db');
const setupScheduledJobs = require('./scheduledJobs');

// Load env vars
dotenv.config();

// Connect to database
connectDB();

// Initialize express
const app = express();

// Body parser
app.use(express.json());

// Enable CORS
app.use(cors());

// Define routes
app.get('/', (req, res) => {
  res.send('API is running...');
});

// Route files
const rssRoutes = require('./routes/rssRoutes');
const authRoutes = require('./routes/authRoutes');

// Mount routes
app.use('/api/rss', rssRoutes);
app.use('/api/auth', authRoutes);

// Set up scheduled jobs
setupScheduledJobs();

// Set port
const PORT = process.env.PORT || 5000;

// Start server
app.listen(PORT, () => {
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`);
});
