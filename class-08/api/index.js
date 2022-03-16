const express = require("express");
const crypto = require("crypto");
const app = express();
const port = 5000;
/**
 * CORS middleware
 */
function cors(req, res, next) {
  res.header("Access-Control-Allow-Origin", "http://localhost:3000");
  res.header("Access-Control-Allow-Headers", "Content-Type");
  next();
}

app.use(cors);
app.use(express.urlencoded({ extended: true })); // To expect JSON as body
app.use(express.json()); // To parse the incoming requests with JSON payloads

app.get("/", (req, res) => {
  res.status(200).send("Hello World!");
});

app.post("/message/", (req, res) => {
  if (req.body && req.body.message) {
    res.status(200).json({
      error: null,
      data: { id: crypto.randomUUID(), message: req.body.message },
    });
    return;
  }
  res.status(404).json({ error: "Expected to recieve `message`", data: null });
});

app.listen(port, () => {
  console.log(`API listening on port ${port}`);
});
