const express = require("express");
const app = express();
const crypto = require("crypto");
const res = require("express/lib/response");
const port = 5000;
app.use(express.urlencoded({ extended: true })); // To expect JSON as body
app.use(express.json()); // To parse the incoming requests with JSON payloads

module.exports = () => {
  let hits = [];
  app.get("/", (req, res) => {
    res.status(200).send("one time secret");
  });

  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
  });
};
