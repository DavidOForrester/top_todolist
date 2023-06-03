import _ from "lodash";
import "./style.css";
import * as dom from "./dom.js";
import * as todo from "./todo.js";

const todoListItems = [];
const projects = [];

const defaultProject = new todo.project("Default");
projects.push(defaultProject);

for (let i = 0; i < 3; i++) {
  const item = new todo.todoList(
    "task " + i,
    "description of the task",
    "01/01/2013",
    "High",
    "default"
  );

  todoListItems.push(item);
}

dom.pageLoad(todoListItems, projects);
