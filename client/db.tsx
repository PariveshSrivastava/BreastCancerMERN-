import dotenv from 'dotenv';
dotenv.config();

import mongoose, { Connection } from 'mongoose';

const mongoURL = process.env.MONGO_URL;

if (!mongoURL) {
  throw new Error('MongoDB connection URL not found in environment variables');
}

let cachedConnection: Connection | null = null;

async function connectToDatabase() {
  if (cachedConnection && cachedConnection.readyState === 1) {
    return cachedConnection;
  }

  const options: mongoose.ConnectOptions = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  };

  cachedConnection = await mongoose.connect(mongoURL, options);
  return cachedConnection;
}

export default connectToDatabase;
