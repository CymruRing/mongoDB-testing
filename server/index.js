const express = require("express");
const app = express();
require("dotenv").config();
const { PORT } = process.env;
const mongoose = require('mongoose');



app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/databases", (req, res) => {
  console.log("testing when I hit the endpoint");
  res.send('You have hit the endpoint')
});

app.listen(PORT, () => {
  console.log(`My site listening on port ${PORT}`);
});

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/test')}