const express = require("express");
const crypto = require("crypto");
const app = express();
const port = 5000;
/**
 * CORS middleware
 * https://developer.mozilla.org/es/docs/Web/HTTP/Headers/Access-Control-Allow-Origin
 */
function cors(req, res, next) {
  res.header("Access-Control-Allow-Origin", "http://localhost:3000");
  res.header("Access-Control-Allow-Headers", "Content-Type");
  next();
}

// Using the middlewares
app.use(cors);
app.use(express.urlencoded({ extended: true })); // To expect JSON as body
app.use(express.json()); // To parse the incoming requests with JSON payloads

// Creating our first GET API
app.get("/", (request, response) => {
  response.status(200).send("Hello World!");
});

// Creating our first POST API
app.post("/message/", (request, response) => {
  // Using the request
  if (request.body && request.body.message) {
    // Invoke que response
    response.status(200).json({
      error: null,
      data: {
        id: crypto.randomUUID(),
        message: request.body.message,
      },
    });
    return;
  }

  // If the request doesn't have a body, we return an 404 with the following message
  response.status(404).json({ error: "Expected to recieve `message`", data: null });
});

// Starting our API server
app.listen(port, () => {
  console.log(`API listening on port ${port}`);
});
