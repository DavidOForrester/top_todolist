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
    "High"
  );

  todoListItems.push(item);
}

todoListItems[1].completeTask(1, todoListItems);

dom.pageLoad(todoListItems);

console.log(todoListItems);
