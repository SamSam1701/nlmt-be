const express = require("express");
const {getAllToDos} = require("../controllers/todo.controller.js");

import TodoController from "../controllers/todo.controller.js";

const router = express.Router();

router.get("/",(req, res)=> TodoController.getAllToDos());

export default router;