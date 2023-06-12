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

todo.loadLocal(todoListItems, projects);

dom.pageLoad(todoListItems, projects);
