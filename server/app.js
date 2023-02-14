const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const router = require("./routes");

require("./models/db");

app.set("view engine", "ejs");

app.use(express.json());

// to be encoded into the URL-encoded format, allowing for
// a JSON-like experience with URL-encoded.
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/api/v1", router); // like a prefix of the path

// Summary of API Endpoints
app.get("/", (req, res, next) => {
    res.content_type = "text/plain";
    res.render("index");
})

app.listen(8080, () => {
    console.log("Server running on port 8080.");
});