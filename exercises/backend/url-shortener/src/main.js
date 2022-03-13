const express = require("express");
const app = express();
const crypto = require("crypto");
const res = require("express/lib/response");
const port = 5000;
app.use(express.urlencoded({ extended: true })); // To expect JSON as body
app.use(express.json()); // To parse the incoming requests with JSON payloads
const redirects = {
  luispa: "https://google.com",
};

module.exports = () => {
  let hits = [];
  app.get("/", (req, res) => {
    res.status(200).send("Hello World!");
  });

  app.use("/redirect/get-hits/", function (req, res, next) {
    res.setHeader("Content-Type", "application/json");
    console.log(req.method, "-", Date.now());
    next();
  });

  app.get("/redirect/get-hits/", (req, res) => {
    const count = hits.reduce((accumulator, value) => {
      return { ...accumulator, [value]: (accumulator[value] || 0) + 1 };
    }, {});
    res.status(200).json(count);
  });

  app.use("/redirect/getall/", function (req, res, next) {
    res.setHeader("Content-Type", "application/json");
    console.log(req.method, "-", Date.now());
    next();
  });

  app.get("/redirect/getall/", (req, res) => {
    res.status(200).json(redirects);
  });

  app.use("/redirect/:hash", function (req, res, next) {
    console.log(
      req.method,
      "-",
      Date.now(),
      "-",
      "Hash:",
      req.params.hash,
      "Redirect"
    );
    next();
  });

  app.get("/redirect/:hash", (req, res) => {
    if (req.params.hash && redirects[req.params.hash]) {
      hits.push(redirects[req.params.hash]);
      res.status(200).redirect(redirects[req.params.hash]);
      return;
    }
    res.status(404).json({ error: "No hash match", data: null });
  });

  app.use("/redirect/create/", function (req, res, next) {
    res.setHeader("Content-Type", "application/json");
    console.log(req.method, "-", Date.now());
    next();
  });

  // Create new redirect
  app.post("/redirect/create/", (req, res, next) => {
    if (req.body && req.body.url) {
      const hash = crypto.randomUUID();
      redirects[hash] = req.body.url;
      res.status(200).json({ error: null, data: { [hash]: redirects[hash] } });
      return;
    }
    res
      .status(404)
      .json({ error: "Invalid body to create redirect", data: null });
  });

  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
  });
};
