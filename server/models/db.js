const mongoose = require("mongoose");
require("dotenv").config();

mongoose.set("strictQuery", true);

const dbURI = process.env.DB_CONNECTION;
mongoose.connect(dbURI, {useNewUrlParser: true});

// Callback method
mongoose.connection.on("connected", () => {
    console.log(`Mongoose connected to ${dbURI}`);
});

// Callback method
mongoose.connection.on("error", err => {
    console.log("Mongoose connection error:", err);
});

// Callback method
mongoose.connection.on("disconnected", () => {
    console.log("Mongoose disconnected");
})