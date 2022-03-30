var express = require("express");
const crypto = require("crypto");
const birds = require("./router");
// Serve static files
function api() {
  // App initialization
  const app = express();

  // Get request
  app.get("/", (req, res, next) => {
    // sending UTF-8 text
    res.send("1. Get request");
  });

  // Get request params from path http://localhost:3000/path/8db4c100-22e4-4b76-9745-961357a3ed6d
  app.get("/path/:hash", (req, res, next) => {
    var hash = req.params.hash; // 8db4c100-22e4-4b76-9745-961357a3ed6d
    console.log(hash);
    res.send("2. Get request with path params " + hash);
  });

  // Get request params from query http://localhost:3000/query/?utm=1234
  app.get("/query/", (req, res, next) => {
    var utm = req.query.utm; // 1234
    console.log(utm);
    res.send("3. Get request with query params " + utm);
  });

  // Mixing both ways to get data from url http://localhost:3000/mixed/8db4c100/?utm=1234
  app.get("/mixed/:hash", (req, res, next) => {
    var hash = req.params.hash; // 8db4c100
    var utm = req.query.utm; // 1234
    console.log(hash);
    console.log(utm);
    res.send("4. Get request with mixed data " + hash + " and " + utm);
  });

  // Example using error handler
  app.get("/error/", (req, res, next) => {
    try {
      throw new Error("API error!");
      // res.status(200).send("Success");
    } catch (error) {
      res.status(500).send(error.message);
    }
  });

  // Apply isolated middleware
  app.use("/middleware", (req, res, next) => {
    console.log("-- Passing to the middleware");
    req.UUID = crypto.randomUUID(); // create
    next();
  });

  app.get("/middleware", (req, res, next) => {
    res.send(req.UUID);
  });

  // Using same source approach
  app
    .route("/events")
    .all(function (req, res, next) {
      // runs for all HTTP verbs first
      // think of it as route specific middleware!
      console.log(req.method, "-", +new Date());
      next();
    })
    .get(function (req, res, next) {
      // maybe add a new event...
      res.json({ message: "get!" });
    })
    .post(function (req, res, next) {
      // maybe add a new event...
      res.json({ message: "post!" });
    })
    .delete(function (req, res, next) {
      // maybe add a new event...
      res.json({ message: "delete!" });
    })
    .patch(function (req, res, next) {
      // maybe add a new event...
      res.json({ message: "patch!" });
    });

  // Using express.Routes
  app.use("/birds", birds);

  // App listen
  app.listen(3000, () => {
    console.log("Listen on port 3000");
  });
}

module.exports = api;
