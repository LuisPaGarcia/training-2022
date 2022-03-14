const express = require("express");
const crypto = require("crypto");
const logger = require("./middleware/logger");
const cors = require("./middleware/cors");
const redirectRoutes = require("./routes/redirect");
const app = express();
const port = 5000;

/**
 * Logging
 */
app.use(logger); // Add logging

/**
 * Body Parser using express handler
 * express.urlencoded() is a method inbuilt in express to recognize the incoming Request Object as strings or arrays. This method is called as a middleware in your application using the code: app.use(express.urlencoded());
 * Reference: https://stackoverflow.com/a/51844327/6669408
 */
app.use(express.urlencoded({ extended: true })); // To expect JSON as body

/**
 * Body Parser using express handler
 * express.json() is a method inbuilt in express to recognize the incoming Request Object as a JSON Object. This method is called as a middleware in your application using the code: app.use(express.json());
 * Reference: https://stackoverflow.com/a/51844327/6669408
 */
app.use(express.json()); // To parse the incoming requests with JSON payloads

/**
 * CORS configuration
 */
app.use(cors);

function main() {
  // React redirect
  app.get("/", (req, res) => {
    res.status(200).send("url shortener");
  });

  app.use("/redirect", redirectRoutes);

  app.listen(port);
}

module.exports = main;
