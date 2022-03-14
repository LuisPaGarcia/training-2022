var express = require("express");
var router = express.Router();
var redirectController = require("../../controllers/redirect");

// Create redirect
router.post("/create/", redirectController.createRedirect);

// Obtainer url by hash
router.get("/get-by-id/:hash/", redirectController.getByHash);

// Obtain all available redirects
router.get("/get-all/", redirectController.getAllRedirects);

// Make Redirect by hash, ORDER MATTERS
router.get("/:hash/", redirectController.makeRedirect);

// Delete redirect
router.delete("/delete/:hash/", redirectController.deleteByHash);

module.exports = router;
