const express = require("express");
const router = express.Router();
const usersMiddleware = require("../middlewares/users");
const usersController = require("../controllers/users");

router.get("/", usersController.getAll);

router.get("/:id", usersController.getById);

router.post("/", usersMiddleware, usersController.saveUser);

module.exports = router;
