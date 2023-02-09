const mongoose = require("mongoose");

mongoose.set("strictQuery", true);

const dbURI = 
    "mongodb+srv://Jay:FcPc8SwoEb3P9lrF@edspresso.cfvv4zd.mongodb.net/?retryWrites=true&w=majority";
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