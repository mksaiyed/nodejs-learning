const express = require("express");

const urlRouter = require("./routes/url");
const { connectMongoDb } = require("./connection");
const { redirectToUrl } = require("./controllers/url");

const app = express();
const PORT = 8000;

connectMongoDb("mongodb://localhost:27017/short-url");

app.use(express.json());

app.use("/api/url", urlRouter);
app.get("/:shortId", redirectToUrl);

app.listen(PORT, () => console.log(`Server listening on port : ${PORT}`));
