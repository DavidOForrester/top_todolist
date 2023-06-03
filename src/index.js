import _ from "lodash";
import "./style.css";
import * as dom from "./dom.js";
import todoList from "./todo.js";

const todoListItems = [];

for (let i = 0; i < 3; i++) {
  const item = new todoList(
    "task " + i,
    "description of the task",
    "01/01/2013",
    "High",
    "default"
  );

  todoListItems.push(item);
}

dom.pageLoad(todoListItems);

