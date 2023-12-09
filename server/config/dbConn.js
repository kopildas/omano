// Replace your existing MongoDB connection code with the following:

import mongoose from 'mongoose';

// ... other imports and configurations

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.DATABASE_URI, {
      useNewUrlParser: true, // This is not needed, but you can keep it for now
      useUnifiedTopology: true, // This is not needed, but you can keep it for now
      // Use the new options below:
    //   useCreateIndex: true,
    //   useFindAndModify: false,
    //   useNewUrlParser: true,
    //   useUnifiedTopology: true,
    });

    // console.log('Connected to MongoDB');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error.message);
    process.exit(1); // Exit the process if unable to connect
  }
};

export default connectDB;
