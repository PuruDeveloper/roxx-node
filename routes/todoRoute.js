const express = require("express");
const axios = require("axios").default;

const router = express.Router();

router.route("/").get(async (req, res) => {
  try {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/todos"
    );

    let todos = response.data;

    for (let i = 0; i < todos.length; i++) {
      delete todos[i]["userId"];
    }

    // await fetch("https://jsonplaceholder.typicode.com/todos")
    //   .then((response) => response.json())
    //   .then((data) => console.log(data));
    res.status(200).json({
      data: todos,
    });
  } catch (error) {
    console.log(error);
    res.json({
      status: "fail",
      message: error,
    });
  }
});

module.exports = router;
