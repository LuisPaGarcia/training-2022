//@ts-check
const logger = require("../../services/loggerService");
const foodController = (req, res) => {
  logger.http("GET route is accessed");
  res.send("hey!");
};

module.exports = foodController;
