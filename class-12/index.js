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
// parse application/json, basically parse incoming Request Object as a JSON Object
app.use(express.json());
// parse application/x-www-form-urlencoded, basically can only parse incoming Request Object if strings or arrays
// app.use(express.urlencoded({ extended: false }));
// combines the 2 above, then you can parse incoming Request Object if object, with nested objects, or generally any type.
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res, next) => {
  logger.http("GET route is accessed");
  res.send("hey!");
});

app.get("/food", async (req, res) => {
  logger.http("GET route is accessed");
  res.send("hey!");
});

// Explanantion https://stackoverflow.com/a/51844327/6669408
// Read body as object
app.use(express.json());
// Read query params as objects
app.use(express.urlencoded({ extended: false }));
// Assign users route to `/users/`
app.use("/users", usersRouter);

app.listen(port, () => console.log(`Listen on port:${port}`));
