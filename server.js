const express = require("express");
const connectDB = require("./db");
const userRouter = require("./routes/user")
const authRouter = require("./routes/auth")
const postRouter = require("./routes/post")
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 3000;
connectDB();

app.use(express.json());
app.use('/api', userRouter)
app.use('/api', authRouter)
app.use('/api', postRouter)


app.listen(PORT, () => {
  console.log(`server is listening on ${PORT}`);
});

module.exports = app;
