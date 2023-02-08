const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const router = require("./routes");

app.set("view engine", "ejs");
app.use(express.json());

// to be encoded into the URL-encoded format, allowing for
// a JSON-like experience with URL-encoded.
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/api/v1", router); // like a prefix of the path

app.get("/", (req, res, next) => {
    res.content_type = "text/plain";
    res.render("index");
    // res.send("Edspresso backend server!");
})

app.listen(8080, () => {
    console.log("Server running on port 8080.");
});