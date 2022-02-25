const express = require("express");

const todoRoute = require("./routes/todoRoute");
const userRoute = require("./routes/userRoute");

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).json({
    status: "success",
    message: "The server is working fine MAN",
  });
});

app.use("/todos", todoRoute);
app.use("/user", userRoute);

module.exports = app;
