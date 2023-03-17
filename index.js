const express = require("express");
const app = express();
const mongoose = require("mongoose");
const port = 3000;
const dotenv = require("dotenv");
const mongooseSchema = require("./schema");
dotenv.config();
const router = require("express").Router();

mongoose.set("strictQuery", true);
try {
  mongoose.connect(process.env.mongo_url);
  console.log("connected");
} catch (e) {
  console.log(e);
}

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "OPTIONS, GET");
  if (req.method === "OPTIONS") {
    return res.sendStatus(200);
  }
  next();
});

app.get("/", async (req, res) => {
  try {
    let getData = await mongooseSchema.find();
    res.send(getData);
  } catch (e) {
    res.send({ message: e });
    console.log(e);
  }
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
