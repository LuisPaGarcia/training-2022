const express = require("express");
const app = express();
const crypto = require("crypto");
const port = 5000;
const pino = require("./middleware/logger");
const redirectRoutes = require("./routes/redirect");
app.use(pino); // Add logging
app.use(express.urlencoded({ extended: true })); // To expect JSON as body
app.use(express.json()); // To parse the incoming requests with JSON payloads
const redirects = {
  luispa: "https://google.com",
};

module.exports = () => {
  let hits = [];
  app.use("*", function (req, res, next) {
    req.log.info();
    next();
  });

  app.get("/", (req, res) => {
    res.status(200).send("url shortener");
  });

  app.use("/redirect", redirectRoutes);

  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
  });
};
