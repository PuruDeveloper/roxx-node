const axios = require("axios");
const express = require("express");
const axion = require("axios").default;

const router = express.Router();

router.route("/:id").get(async (req, res) => {
  try {
    const id = req.params.id;
    if (id <= 10 && id > 0) {
      let todos = await axios.get("https://jsonplaceholder.typicode.com/todos");
      todos = todos.data;

      let user = await axios.get(
        `https://jsonplaceholder.typicode.com/users/${id}`
      );
      user = user.data;
      //Adding todo
      user.todo = [];

      for (let i = 1; i < todos.length; i++) {
        if (user.id === todos[i]["userId"]) {
          user.todo.push(todos[i]);
        }
      }
      res.status(200).json({
        status: "success",
        user,
      });
    } else {
      res.status(200).json({
        status: "fail",
        message: "The id is not present in the fetch",
      });
    }
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
