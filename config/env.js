const dotenv = require("dotenv");
dotenv.config();

const config = {
  NODE_ENV: process.env.NODE_ENV,
  DB_URL: process.env.DATABASE_URL,
  BASE_URL: process.env.BASE_URL,
  PORT: process.env.PORT,
};

module.exports = config;
