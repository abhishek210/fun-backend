require("dotenv").config();
const express = require("express");
const app = express();
const port = 8000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});
app.get("/login", (req, res) => {
  res.send("<h1>hello bhaisahb</h1>");
});

app.get("/home", (req, res) => {
  res.send("<h2>home page</h2>");
});

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`);
});
