import mongoose from 'mongoose';

export const connectDB = () => {
    // Connect to MongoDB using Mongoose
    // const urlProd = `${process.env.DB_URL}`
    const urlProd = "mongodb+srv://chnk:XEqM0HCwkQHP8XmP@hod-db.awb7lwy.mongodb.net/"
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