const mongoose = require('mongoose');

// Use environment variable for MongoDB URI or fallback to local instance
const dbURI = process.env.MONGODB_URI || 'mongodb://localhost:27017/hms';

mongoose.connect(dbURI, { });

mongoose.connection.on('connected', () => {
  console.log('Mongoose connected to ' + dbURI);
});

mongoose.connection.on('error', err => {
  console.log('Mongoose connection error: ' + err);
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