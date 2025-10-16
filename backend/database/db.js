import mongoose from "mongoose";

export const connectToDB = async () => {
  await mongoose
    .connect(process.env.MONGO_URI)
    .then(() => {
      console.log("we are connected to MongoDB");
    })
    .catch((error) => {
      console.log(error);
    });
};
