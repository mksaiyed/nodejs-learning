const express = require("express");

const userRouter = require("./routes/user");
const { connectMongoDb } = require("./connection");
const { logReqRes } = require("./middlewares");

const app = express();
const PORT = 8000;

// connection
connectMongoDb("mongodb://localhost:27017/users-express");

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(logReqRes("./logs/logs.txt"));

// Routes
app.use("/api/users", userRouter);

app.listen(PORT, () => console.log(`Server is running on port: ${PORT}`));
