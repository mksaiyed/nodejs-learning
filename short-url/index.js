const express = require("express");
const path = require("path");

const urlRouter = require("./routes/url");
const staticRoute = require("./routes/staticRoute");
const { connectMongoDb } = require("./connection");
const { redirectToUrl } = require("./controllers/url");

const app = express();
const PORT = 8000;

connectMongoDb("mongodb://localhost:27017/short-url");

app.set("view engine", "ejs");
app.set("views", path.resolve("./views"));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/url", urlRouter);
app.use("/", staticRoute);
app.get("/id/:shortId", redirectToUrl);

app.listen(PORT, () => console.log(`Server listening on port : ${PORT}`));
