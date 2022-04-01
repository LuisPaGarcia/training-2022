const express = require("express");
const router = express.Router();
const { handleError, handleResponse } = require("../utils/helpers");
const userService = require("../services/userServices");
// const usersMiddleware = require("../middlewares/users");
// const usersController = require("../controllers/users")

router.get("/", function (req, res) {
  userService
    .getAll()
    .then((data) => handleResponse(res, data))
    .catch((err) => handleError(res, err));
});

router.get("/:id", function (req, res, next) {
  userService
    .getById(req.params.id)
    .then((data) => handleResponse(res, data))
    .catch((err) => handleError(res, err));
});

const handleSaveUser = (req, res, next) => {
  userService
    .saveUser(req.body.user)
    .then((data) => handleResponse(res, data))
    .catch((err) => handleError(res, err));
};

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
const usersMiddleware = [checkValues, loggingPost];

router.post("/", usersMiddleware, handleSaveUser);

module.exports = router;
