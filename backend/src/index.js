import express from "express";
import mongoose from "mongoose";
import http from "http";
import { config } from "./config/config.js";

const PORT = config.PORT;
const app = express();
const server = http.createServer(app);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.status(200).send("OK");
});

const connectToDB = async () => {
  try {
    await mongoose.connect(config.MONGO_URL, { dbName: config.DB_NAME });
    console.log(`Connection established to the DB`);
    server.listen(PORT, () => {
      console.log(`Connection to => http://localhost:${PORT}`);
    });
  } catch (error) {
    console.log(`There was an error connecting to the DB: `, error);
  }
};

connectToDB();
