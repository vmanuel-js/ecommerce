import dotenv from "dotenv";
dotenv.config();

export const config = {
  PORT: process.env.PORT,
  DB_NAME: process.env.DB_NAME,
  MONGO_URL: process.env.MONGO_URL,
};
