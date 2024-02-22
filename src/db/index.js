import mongoose from 'mongoose';

const connectDB = async () => {
  try {
    const mongoURI = 'your_mongodb_atlas_uri';
    await mongoose.connect("mongodb+srv://bhupendrau6:Hitit3060@cluster0.rnzlpm6.mongodb.net", { useNewUrlParser: true, useUnifiedTopology: true });
    console.log('Connected to MongoDB Atlas');
  } catch (error) {
    console.error('Error connecting to MongoDB Atlas:', error);
    process.exit(1); // Exit process with failure
  }
};

export default connectDB;
