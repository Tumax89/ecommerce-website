import express from "express";
import productRouter from "./routers/productRouter.js";
import dotenv from "dotenv";
import userRoute from "./routers/userRouter.js";
import connectDB from "./db.js";
import orderRouter from "./routers/orderRouter.js";

const port = process.env.PORT || 8001;

dotenv.config();
connectDB();

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/users", userRoute);
app.use("/api/products", productRouter);
app.use("/api/orders", orderRouter);
app.get("/", (req, res) => {
  res.send("Server isss ready");
});

app.listen(port, () => {
  console.log(`Сервер ажиллаж эхэллээ http://localhost:${port}`);
});
