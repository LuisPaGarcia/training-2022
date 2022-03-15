const express = require("express");

const app = express();
const port = 5000;

function cors(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, x-access-token, x-access-user, x-access-company"
  );

  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  next();
}

app.use(cors);
app.use(express.urlencoded({ extended: true })); // To expect JSON as body
app.use(express.json()); // To parse the incoming requests with JSON payloads

app.get("/", (req, res) => {
  res.status(200).send("Hello World!");
});

app.post("/message/", (req, res, next) => {
  console.log(req.body);
  const body = { ...req.body };
  res.status(200).json({ error: null, data: body });
  return;

  // res
  //   .status(404)
  //   .json({ error: "Invalid body to create redirect", data: null });
});

app.listen(port, () => {
  console.log(`API listening on port ${port}`);
});
