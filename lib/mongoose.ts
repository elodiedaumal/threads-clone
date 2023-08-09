import mongoose from "mongoose";

let isConnected = false;

export const connectToDB = async () => {
  mongoose.set("strictQuery", true);
  if (!process.env.MONGODB_URL) return console.log("MONGO_DB not found");
  if (isConnected) return console.log("Already connected to MongoDB");
  try {
  } catch (error) {}
};
