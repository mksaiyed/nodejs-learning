const mongoose = require("mongoose");

// Craete Schema
const userSchema = mongoose.Schema(
    {
        firstName: {
            type: String,
            require: true,
        },
        lastName: {
            type: String,
        },
        email: {
            type: String,
            require: true,
            unique: true,
        },
        jobTitle: {
            type: String,
        },
        gender: {
            type: String,
        },
    },
    {
        timestamps: true,
    }
);

// Craete Model
const User = mongoose.model("User", userSchema);

module.exports = User;
