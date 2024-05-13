const mongoose = require("mongoose");

async function connectMongoDb(url) {
    // DB Connection
    return mongoose
        .connect(url)
        .then(() => console.log("MongoDB Connected!"))
        .catch((err) => console.log("Mongo Error!", err));
}

module.exports = { connectMongoDb };
