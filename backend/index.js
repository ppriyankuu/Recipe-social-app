import express from "express";
import dotenv from "dotenv";
dotenv.config();
import cors from "cors";
import mongoose from "mongoose";
import userRouter from "./router/userRouter.js";
import recipeRouter from "./router/recipeRouter.js";

const app = express();
const port = process.env.PORT || 8001;
const db_url = process.env.DB_URL;

app.use(express.json());
app.use(cors());
app.use("/auth", userRouter);
app.use("/recipes", recipeRouter);

mongoose
  .connect(db_url)
  .then(() => console.log(`connection successful`))
  .then(() =>
    app.listen(port, () => {
      console.log(`listening on http://localhost:${port}`);
    })
  )
  .catch((err) => console.log(`error connecting: ${err.message}`));
