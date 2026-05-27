const mongoose = require('mongoose');
const dns = require('dns');
require('dotenv').config();

// Local DNS resolvers often block SRV record lookups used by MongoDB Atlas.
// Override to use Google's public DNS to ensure the +srv connection string works.
dns.setServers(['8.8.8.8', '8.8.4.4']);

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGODB_URI);
    console.log(`[DB] MongoDB connected: ${conn.connection.host}`);
  } catch (err) {
    console.error('[DB] MongoDB connection error:', err);
    process.exit(1);
  }
};

module.exports = connectDB;
