var express = require("express");
const path = require("path");

// Serve static files
function static() {
  // App initialization
  const app = express();
  // Path definition
  const publicPath = path.join(__dirname, "./public/");
  // Middleware
  app.use(express.static(publicPath));
  // Request definition
  const htmlFilePath = path.join(__dirname, "./public/index.html");
  app.get("*", (req, res) => {
    res.sendFile(htmlFilePath);
  });
  console.log({ publicPath, __dirname, htmlFilePath });
  // App listen
  app.listen(3000, () => {
    console.log("Listen on port 3000");
  });
}

module.exports = static;
