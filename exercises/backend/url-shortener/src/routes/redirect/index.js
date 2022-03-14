var express = require("express");
var crypto = require("crypto");
var router = express.Router();
var {
  getAllRedirects,
  getRedirectByHash,
  addRedirect,
} = require("../../utils/redirects");

router.post("/create/", function (req, res) {
  if (req.body && req.body.url) {
    // TODO Is valid URL?
    const newRedirect = {
      hash: crypto.randomUUID(),
      url: req.body.url,
    };
    addRedirect(newRedirect);
    res.status(200).json({ error: null, data: newRedirect });
    return;
  }
  res
    .status(404)
    .json({ error: "Invalid body to create redirect", data: null });
});

// Obtainer url by hash
router.get("/get-by-id/:hash/", function (req, res) {
  if (req.params.hash) {
    const match = getRedirectByHash(req.params.hash);
    if (match && match.url) {
      res.status(200).redirect({ error: null, data: match });
      return;
    }
  }
  res.status(404).json({ error: "No hash match", data: null });
});

router.get("/get-all/", function (req, res) {
  res.status(200).json({ error: null, data: getAllRedirects() });
});

// Make Redirect by hash, ORDER MATTERS
router.get("/:hash", function (req, res) {
  if (req.params.hash) {
    const match = getRedirectByHash(req.params.hash);
    if (match && match.url) {
      res.status(200).redirect(match.url);
      return;
    }
  }
  res.status(404).json({ error: "No hash match", data: null });
});

// Delete redirect
router.delete("/delete/:hash", function (req, res) {
  res.send("Wiki home page");
});

module.exports = router;
/*
app.use("/redirect/get-hits/", function (req, res, next) {
  res.setHeader("Content-Type", "application/json");
  next();
});

app.get("/redirect/get-hits/", (req, res) => {
  const count = hits.reduce((accumulator, value) => {
    return { ...accumulator, [value]: (accumulator[value] || 0) + 1 };
  }, {});
  res.status(200).json(count);
});

app.use("/redirect/getall/", function (req, res, next) {
  res.setHeader("Content-Type", "application/json");
  next();
});

app.get("/redirect/getall/", (req, res) => {
  res.status(200).json(redirects);
});

app.use("/redirect/:hash", function (req, res, next) {
  next();
});

app.get("/redirect/:hash", (req, res) => {
  if (req.params.hash && redirects[req.params.hash]) {
    hits.push(redirects[req.params.hash]);
    res.status(200).redirect(redirects[req.params.hash]);
    return;
  }
  res.status(404).json({ error: "No hash match", data: null });
});

app.use("/redirect/create/", function (req, res, next) {
  res.setHeader("Content-Type", "application/json");
  next();
});

// Create new redirect
app.post("/redirect/create/", (req, res, next) => {
  if (req.body && req.body.url) {
    const hash = crypto.randomUUID();
    redirects[hash] = req.body.url;
    res.status(200).json({ error: null, data: { [hash]: redirects[hash] } });
    return;
  }
  res
    .status(404)
    .json({ error: "Invalid body to create redirect", data: null });
});
*/
