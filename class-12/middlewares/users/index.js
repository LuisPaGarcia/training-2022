const logger = require("../../services/loggerService");
const { handleError } = require("../../utils/helpers");

function checkValues(req, res, next) {
  const user = req.body.user;
  if (user.fullName && typeof user.fullName === "string") {
    return next();
  }
  return handleError(res, "Must send fullName");
}

function loggingPost(req, res, next) {
  logger.http("POST route is accessed");
  console.log("POST route is accessed");
  return next();
}

module.exports = [checkValues, loggingPost];
