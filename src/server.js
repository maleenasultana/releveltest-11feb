require("dotenv").config();
const express = require("express");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors());

// sample for express server
app.use("/", (req, res, next) => {
  res.status(200).json({ success: true, data: "Welcome to express server" });
});

const PORT = process.env.PORT || 8000; // port at which server listening

// import routes
let authRouter = require('../src/routes/auth.routes');
let categoryRouter = require('../src/routes/category.routes');
let newsRouter = require('../src/routes/news.routes');
let bookmarkRouter = require('../src/routes/bookmark.routes');

// define root routes.
app.use('/authentication', authRouter);
app.use('/category', categoryRouter);
app.use('/news', newsRouter);
app.use('/bookmark', bookmarkRouter);

app.listen(
  PORT,
  console.log(`server started in ${process.env.NODE_ENV} mode at port ${PORT}`)
);