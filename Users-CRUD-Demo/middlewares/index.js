const fs = require("fs");

function logReqRes(fileName) {
    return (req, res, next) => {
        fs.appendFile(
            fileName,
            `${Date.now()} :: ${req.method} :: ${req.url} :: ${
                res.statusCode
            }\n`,
            (err) => {
                if (err) {
                    console.log(err);
                }
            }
        );
        next();
    };
}

module.exports = { logReqRes };
