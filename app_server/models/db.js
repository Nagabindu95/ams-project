const mongoose = require('mongoose');
const seedDatabase = require('../config/dbSeed');

// Use environment variable for MongoDB URI or fallback to local instance
const dbURI = process.env.MONGODB_URI || 'mongodb://localhost:27017/hms';

// MongoDB connection options
const options = {
  ssl: dbURI.includes('mongodb+srv') // Only use SSL for Atlas connections
};

mongoose.connect(dbURI, options);

mongoose.connection.on('connected', () => {
  console.log('Mongoose connected to ' + dbURI);
  // Seed database on first connection (in production)
  if (process.env.NODE_ENV === 'production') {
    seedDatabase();
  }
});

mongoose.connection.on('error', err => {
  console.log('Mongoose connection error: ' + err);
  // If Atlas connection fails, try local MongoDB
  if (dbURI.includes('mongodb+srv') && !dbURI.includes('localhost')) {
    console.log('Trying to connect to local MongoDB instance...');
    const localURI = 'mongodb://localhost:27017/hms';
    mongoose.connect(localURI, {});
  }
});

mongoose.connection.on('disconnected', () => {
  console.log('Mongoose disconnected');
});

// Close connection on process termination
process.on('SIGINT', async () => {
  try {
    await mongoose.connection.close();
    console.log('Mongoose disconnected through app termination');
    process.exit(0);
  } catch (err) {
    console.error('Error during Mongoose disconnection:', err);
    process.exit(1);
  }
});