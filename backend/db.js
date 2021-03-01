import mongoose from "mongoose";

const connection_url =
  "mongodb+srv://ecommerce123:ecommerce123@cluster0.qqysq.mongodb.net/data?retryWrites=true&w=majority";
const connectDB = async () => {
  await mongoose.connect(connection_url, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
  });

  console.log(`MongoDB амжилттай холбогдлоо}`);
};

export default connectDB;
