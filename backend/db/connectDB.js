import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    console.log("mongo_uri:", process.env.MONGO_URI);
    const connect = await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log(`MongoDB Connected: ${connect.connection.host}`);
  } catch (error) {
    console.error("Error connecting to MongoDB:", error.message, error.stack);
    process.exit(1); // exit the process in case of a failure
  }
};
