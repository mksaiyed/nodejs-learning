const mongoose = require("mongoose");

const urlSchema = mongoose.Schema(
    {
        shortId: {
            type: String,
            require: true,
            unique: true,
        },
        redirectURL: {
            type: String,
            require: true,
        },
        visiteHistory: [
            {
                timestamp: { type: String },
            },
        ],
    },
    {
        timestamps: true,
    }
);

const Url = mongoose.model("url", urlSchema);

module.exports = Url;
