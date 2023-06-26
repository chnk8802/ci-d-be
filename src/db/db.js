import mongoose from 'mongoose';

export const connectDB = () => {
    // Connect to MongoDB using Mongoose
    const urlDev = `mongodb://${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}`
    const urlProd = `${process.env.DB_URL}`
    mongoose.connect(urlProd, {
      useNewUrlParser: true,
    })
      .then(() => {
        console.log('Connected to MongoDB');
      })
      .catch((error) => {
        console.error('Failed to connect to MongoDB:', error);
      });
}