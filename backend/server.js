import express from "express";
import data from "./data.js";
import mongoose from "mongoose";
import userRouter from "./routers/userRouter.js";
import dotenv from "dotenv";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const MONGODB_URL =
  "mongodb+srv://ecommerce123:ecommerce123@ecommerce-website.utf7u.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

mongoose.connect(MONGODB_URL || "mongodb://localhost/ecommerce-website", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});
app.get("/api/products/:id", (req, res) => {
  const productId = req.params.id;
  const product = data.products.find((x) => x._id === productId);
  if (product) res.send(product);
  else res.status(404).send({ msg: "Product Not Found" });
});

app.use("/api/users", userRouter);

app.get("/api/products", (req, res) => {
  res.send(data.products);
});

app.use((err, req, res, next) => {
  res.status(500).send({ message: err.message });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () =>
  console.log(`server started at htpp://localhost:${PORT}`)
);
