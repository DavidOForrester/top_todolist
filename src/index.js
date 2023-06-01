import _ from "lodash";
import "./style.css";
import dom from "./dom.js";
import todo from "./todo.js";


const todoListFactory = (title, description, dueDate, priority, complete) => {
  
  return { title, description, dueDate, priority, complete }
}


const itemOne = todoListFactory(
  "task 1",
  "description of the task",
  "01/01/2013",
  "High",
  false
);

console.log(itemOne);
