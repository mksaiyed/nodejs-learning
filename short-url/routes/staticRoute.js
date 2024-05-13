const express = require("express");
const { generateHomePage } = require("../controllers/url");

const router = express.Router();

router.get("/", generateHomePage);

module.exports = router;
