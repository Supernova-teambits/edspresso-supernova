const express = require("express");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 3333;
const bodyParser = require("body-parser");
const router = require("./routes");

require("./models/db");

app.set("view engine", "ejs");

app.use(express.json());

app.use(cors()); // allow access from all domain

// to be encoded into the URL-encoded format, allowing for
// a JSON-like experience with URL-encoded.
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/api/v1", router); // like a prefix of the path

// Summary of API Endpoints
app.get("/", (req, res, next) => {
  res.content_type = "text/plain";
  res.render("index");
});

app.listen(port, () => {
  console.log(`Server running on port ${port}.`);
});
