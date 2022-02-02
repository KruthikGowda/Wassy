import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/mongoDb.js";
import colors from "colors";
import productRouter from "./routes/productRouter.js";
import { notFound, errorHandler } from "./middleware/errorMiddleware.js";

const app = express();

const port = process.env.PORT || 5000;

dotenv.config();

connectDB();

app.get("/", (req, res) => {
  res.send("API is running..........");
});

app.use("/v1/products", productRouter);

const middlewares = [notFound, errorHandler];

app.use(middlewares);

app.listen(
  port,
  console.log(
    `Server is running in ${process.env.NODE_ENV} mode on port: http://localhost:${port}`
      .yellow.bold
  )
);
