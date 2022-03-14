var crypto = require("crypto");
var utils = require("../utils/redirects");

function createRedirect(req, res) {
  if (req.body && req.body.url) {
    // TODO Is valid URL?
    const newRedirect = {
      hash: crypto.randomUUID(),
      url: req.body.url,
    };
    utils.addRedirect(newRedirect);
    res.status(200).json({ error: null, data: newRedirect });
    return;
  }
  res
    .status(404)
    .json({ error: "Invalid body to create redirect", data: null });
}

// Obtainer url by hash
function getByHash(req, res) {
  if (req.params.hash) {
    const match = utils.getRedirectByHash(req.params.hash);
    if (match && match.url) {
      res.status(200).redirect({ error: null, data: match });
      return;
    }
  }
  res.status(404).json({ error: "No hash match", data: null });
}

function getAllRedirects(req, res) {
  res.status(200).json({ error: null, data: utils.getAllRedirects() });
}

// Make Redirect by hash, ORDER MATTERS
function makeRedirect(req, res) {
  if (req.params.hash) {
    const match = utils.getRedirectByHash(req.params.hash);
    if (match && match.url) {
      res.status(200).redirect(match.url);
      return;
    }
  }
  res.status(404).json({ error: "No hash match", data: null });
}

// Delete redirect
function deleteByHash(req, res) {
  res.send("Wiki home page");
}

module.exports = {
  createRedirect,
  getByHash,
  getAllRedirects,
  makeRedirect,
  deleteByHash,
};
