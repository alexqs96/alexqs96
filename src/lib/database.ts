import mongoose from "mongoose";

export default async function ConnectDB() {
  if (mongoose.connection.readyState === 1) {
    console.log("MongoDB");
    return;
  }

  try {
    await mongoose.connect(import.meta.env.mongo_uri as string);
    console.log("MongoDB Connected");
  } catch (error) {
    console.error("Error MongoDB: ", error);
  }
}
