import _ from "lodash";
import "./style.css";
import * as dom from "./dom.js";
import * as todo from "./todo.js";

const todoListItems = [];
const projects = [];

const allProject = new todo.project("All");
projects.push(allProject);

const defaultProject = new todo.project("Default");
projects.push(defaultProject);

for (let i = 0; i < 3; i++) {
  const item = new todo.todoList(
    "task " + i,
    "description of the task",
    "01/01/2013",
    "Low",
    "default"
  );

  todoListItems.push(item);
}

dom.pageLoad(todoListItems, projects);
