import mongoose from 'mongoose';

export const connectDB = () => {
    // Connect to MongoDB using Mongoose
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