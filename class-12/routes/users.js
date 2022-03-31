const express = require("express");
const router = express.Router();
const { handleError, handleResponse } = require("../utils/helpers");

const userService = require("../services/userServices");
router.get("/", function (req, res) {
  userService
    .getAll()
    .then((data) => handleResponse(res, data))
    .catch((err) => handleError(res, err)); // Approach 1
});

router.get("/:id", function (req, res, next) {
  userService
    .getById(req.params.id)
    .then((data) => handleResponse(res, data))
    .catch(next); // Approach 2
});

module.exports = router;
