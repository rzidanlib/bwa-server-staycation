const dotenv = require("dotenv");
dotenv.config();

const config = {
  NODE_ENV: process.env.NODE_ENV,
  DB_URL: process.env.DATABASE_URL,
  BASE_URL: process.env.BASE_URL,
  PORT: process.env.PORT,

  CLOUDINARY_CLOUD_NAME: process.env.CLOUDINARY_CLOUD_NAME,
  CLOUDINARY_API_KEY: process.env.CLOUDINARY_API_KEY,
  CLOUDINARY_API_SECRET: process.env.CLOUDINARY_API_SECRET,
};

module.exports = config;
