const express = require('express');
const dotenv = require('dotenv');
const passport = require('passport');
const app = express();
const mongoose = require('mongoose');
const router = require('./src/routes/api');

// Load environment variables
dotenv.config();

// Connect to MongoDB
const connectToDatabase = async () => {
    try {
        await mongoose.connect(process.env.DB_URI, { autoIndex: true });
        console.log('Connected to MongoDB successfully!');
    } catch (error) {
        console.error('Error connecting to MongoDB:', error.message);
        process.exit(1);
    }
};
connectToDatabase();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Initialize Passport
require('./src/config/passport'); // Load Google strategy
app.use(passport.initialize());

// Routes
app.use('/api/v1', router);

// 404 Handler
app.use('*', (req, res) => {
    res.status(404).json({ status: 'fail', data: 'Not Found' });
});

module.exports = app;
