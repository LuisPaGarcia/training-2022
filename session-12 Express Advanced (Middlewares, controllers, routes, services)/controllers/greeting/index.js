//@ts-check
const logger = require("../../services/loggerService");

function greetingController(req, res, next) {
  logger.http("GET route is accessed");
  res.send("hey!");
}
module.exports = greetingController;
