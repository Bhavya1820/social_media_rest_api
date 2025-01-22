const express = require("express");
const connectDB = require("./db");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 3000;
connectDB();

app.use(express.json());

app.listen(PORT, () => {
  console.log(`server is listening on ${PORT}`);
});

module.exports = app;
