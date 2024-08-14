const express = require("express");
const connectToDB = require("./configs/db");
require("dotenv").config();
const app = express();
const port = process.env.PORT || 9090;
const db_url = process.env.DB_URL;

app.get("/", (req,res) => {
  res.send("this is a home route");
});

app.listen(port, async () => {
  try {
    await connectToDB(db_url);
    console.log("we are successfully connected to the database");
    console.log(`server is running at http://localhost:${port}`);
  } catch (err) {
    console.log(err);
  }
});
