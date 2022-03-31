const express = require("express");
const expressPinoLogger = require("express-pino-logger");
const logger = require("./services/loggerService");
const usersRouter = require("./routes/users");
const app = express();
const port = 3000;
const loggerMidlleware = expressPinoLogger({
  logger: logger,
  autoLogging: true,
});

app.use(loggerMidlleware);

app.get("/", (req, res, next) => {
  logger.http("GET route is accessed");
  res.send("hey!");
});

app.get("/food", async (request, response) => {
  logger.http("GET route is accessed");
  res.send("hey!");
  // ...
});

// Read JSONS as body
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
// Assign users route to `/users/`
app.use("/users", usersRouter);

// Error handling middleware (Option 2)
app.use(function (err, req, res, next) {
  console.log("****");
  console.log("hit!");
  console.log("****");
  res.status(err.status || 500);
  res.send(err);
});

app.listen(port, () => console.log(`Listen on port:${port}`));
