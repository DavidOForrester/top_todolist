/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/todo.js":
/*!*********************!*\
  !*** ./src/todo.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   project: () => (/* binding */ project),
/* harmony export */   todoList: () => (/* binding */ todoList)
/* harmony export */ });
// Creating a new todo
class todoList {
  constructor(title, description, dueDate, priority, project) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
    this.project = project;
    this.complete = false;
  }

  completeTask(index, todoListItems) {
    todoListItems[index].complete = true;
  }

  uncompleteTask(index, todoListItems) {
    todoListItems[index].complete = false;
  }

  updateTask(
    index,
    todoListItems,
    title,
    description,
    dueDate,
    priority,
    project
  ) {
    todoListItems[index].title = title;
    todoListItems[index].description = description;
    todoListItems[index].dueDate = dueDate;
    todoListItems[index].priority = priority;
    todoListItems[index].project = project;
  }
}

class project {
  constructor(project) {
    this.project = project;
  }
}


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!********************!*\
  !*** ./src/dom.js ***!
  \********************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addTask: () => (/* binding */ addTask),
/* harmony export */   buildTodoList: () => (/* binding */ buildTodoList),
/* harmony export */   pageLoad: () => (/* binding */ pageLoad)
/* harmony export */ });
/* harmony import */ var _todo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todo */ "./src/todo.js");


function pageLoad(todoListItems, projects) {
  const content = document.createElement("div");
  content.id = "content";
  document.body.appendChild(content);

  // Structure of the page
  const header = document.createElement("header");
  content.appendChild(header);
  const main = document.createElement("main");
  content.appendChild(main);
  const footer = document.createElement("footer");
  content.appendChild(footer);

  // Header element
  const headerText = document.createElement("h1");
  headerText.innerText = "My Todo List";
  header.appendChild(headerText);

  const headerButton = document.createElement("button");
  headerButton.id = "add-task-button";
  headerButton.innerText = "Add Task";
  header.appendChild(headerButton);
  headerButton.addEventListener("click", () => {
    addTask(todoListItems, projects);
  });

  const project = document.createElement("select");
  project.name = "project";
  header.appendChild(project);
  for (const projectItem of projects) {
    const optionProject = document.createElement("option");
    optionProject.value = projectItem.project;
    optionProject.innerText = projectItem.project;
    project.appendChild(optionProject);
  }

  const addProject = document.createElement("input");
  addProject.placeholder = "New Project";
  header.appendChild(addProject);
  addProject.addEventListener("keydown", (event) => {
    const key = event.key;
    if (key == "Enter") {
      const newProject = new _todo__WEBPACK_IMPORTED_MODULE_0__.project(addProject.value);
      projects.push(newProject);
      document.body.innerHTML = "";
      pageLoad(todoListItems, projects);
    }
  });

  // Main element
  const todoItems = document.createElement("div");
  todoItems.innerText = "Items Todo";
  main.appendChild(todoItems);

  const todoList = document.createElement("ul");
  todoList.id = "todo-list";
  todoItems.appendChild(todoList);

  const completeItems = document.createElement("div");
  completeItems.innerText = "Items Completed";
  main.appendChild(completeItems);

  const completeList = document.createElement("ul");
  completeList.id = "complete-list";
  completeItems.appendChild(completeList);

  buildTodoList(todoListItems, todoList, completeList, projects);

  // Footer element
  const footerText = document.createElement("div");
  footerText.innerText = "Footer text goes here";
  footer.appendChild(footerText);
}

function addTask(todoListItems, projects) {
  const addTaskFrom = document.createElement("div");
  addTaskFrom.id = "add-task-form";
  document.body.appendChild(addTaskFrom);

  const form = document.createElement("form");
  addTaskFrom.appendChild(form);

  const title = document.createElement("input");
  title.type = "textbox";
  title.name = "title";
  title.placeholder = "title";
  form.appendChild(title);

  const description = document.createElement("input");
  description.type = "textbox";
  description.name = "description";
  description.placeholder = "description";
  form.appendChild(description);

  const dueDate = document.createElement("input");
  dueDate.type = "Date";
  dueDate.name = "dueDate";
  form.appendChild(dueDate);

  const priority = document.createElement("select");
  priority.name = "priority";
  form.appendChild(priority);
  const optionLow = document.createElement("option");
  optionLow.value = "Low";
  optionLow.innerText = "Low";
  priority.appendChild(optionLow);
  const optionLMedium = document.createElement("option");
  optionLMedium.value = "Medium";
  optionLMedium.innerText = "Medium";
  priority.appendChild(optionLMedium);
  const optionHigh = document.createElement("option");
  optionHigh.value = "High";
  optionHigh.innerText = "High";
  priority.appendChild(optionHigh);

  const project = document.createElement("select");
  project.name = "project";
  form.appendChild(project);

  for (const projectItem of projects) {
    if (projectItem.project == "All") {
    } else {
      const optionProject = document.createElement("option");
      optionProject.value = projectItem.project;
      optionProject.innerText = projectItem.project;
      project.appendChild(optionProject);
    }
  }

  const submit = document.createElement("input");
  submit.type = "submit";
  form.appendChild(submit);

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    const formData = new FormData(form);
    const title = formData.get("title");
    const description = formData.get("description");
    const dueDate = formData.get("dueDate");
    const priority = formData.get("priority");
    const project = formData.get("project");

    const item = new _todo__WEBPACK_IMPORTED_MODULE_0__.todoList(
      title,
      description,
      dueDate,
      priority,
      project
    );

    todoListItems.push(item);

    document.body.innerHTML = "";

    pageLoad(todoListItems, projects);
  });

  const cancel = document.createElement("input");
  cancel.type = "button";
  cancel.value = "Cancel"
  form.appendChild(cancel);

  cancel.addEventListener("click", function (event) {
    event.preventDefault();

    document.body.innerHTML = "";

    pageLoad(todoListItems, projects);
  });
}

function buildTodoList(todoListItems, todoList, completeList, projects) {
  const createListItem = (item, i) => {
    const listItem = document.createElement("li");

    const complete = document.createElement("input");
    complete.type = "checkbox";
    complete.checked = item.complete;
    listItem.appendChild(complete);
    complete.addEventListener("change", function () {
      if (todoListItems[i].complete == false) {
        todoListItems[i].completeTask(i, todoListItems);
        document.body.innerHTML = "";
        pageLoad(todoListItems, projects);
      } else {
        todoListItems[i].uncompleteTask(i, todoListItems);
        document.body.innerHTML = "";
        pageLoad(todoListItems, projects);
      }
    });

    const title = document.createElement("div");
    title.innerText = item.title;
    listItem.appendChild(title);

    const dueDate = document.createElement("div");
    dueDate.innerText = item.dueDate;
    listItem.appendChild(dueDate);

    const project = document.createElement("div");
    project.innerText = item.project;
    listItem.appendChild(project);

    listItem.addEventListener("click", () => {
      editTask(todoListItems, i, projects);
    });

    return listItem;
  };

  let i = 0;
  for (const item of todoListItems) {
    const listItem = createListItem(item, i);

    if (item.complete) {
      completeList.appendChild(listItem);
    } else {
      todoList.appendChild(listItem);
    }
    i = i + 1;
  }
}

function editTask(todoListItems, i, projects) {
  const addTaskFrom = document.createElement("div");
  addTaskFrom.id = "edit-task-form";
  document.body.appendChild(addTaskFrom);

  const form = document.createElement("form");
  addTaskFrom.appendChild(form);

  const title = document.createElement("input");
  title.type = "textbox";
  title.name = "title";
  title.value = todoListItems[i].title;
  title.placeholder = "title";
  form.appendChild(title);

  const description = document.createElement("input");
  description.type = "textbox";
  description.name = "description";
  description.value = todoListItems[i].description;
  description.placeholder = "description";
  form.appendChild(description);

  const dueDate = document.createElement("input");
  dueDate.type = "Date";
  dueDate.name = "dueDate";
  dueDate.value = todoListItems[i].dueDate;
  form.appendChild(dueDate);

  const priority = document.createElement("select");
  priority.id = "priority";
  priority.name = "priority";
  form.appendChild(priority);
  const optionLow = document.createElement("option");
  optionLow.value = "Low";
  optionLow.innerText = "Low";
  priority.appendChild(optionLow);
  const optionLMedium = document.createElement("option");
  optionLMedium.value = "Medium";
  optionLMedium.innerText = "Medium";
  priority.appendChild(optionLMedium);
  const optionHigh = document.createElement("option");
  optionHigh.value = "High";
  optionHigh.innerText = "High";
  priority.appendChild(optionHigh);
  document.getElementById("priority").value = todoListItems[i].priority;

  const project = document.createElement("select");
  project.id = "project";
  project.name = "project";
  form.appendChild(project);

  for (const projectItem of projects) {
    if (projectItem.project == "All") {
    } else {
      const optionProject = document.createElement("option");
      optionProject.value = projectItem.project;
      optionProject.innerText = projectItem.project;
      project.appendChild(optionProject);
    }
  }
  document.getElementById("project").value = todoListItems[i].project;

  const submit = document.createElement("input");
  submit.type = "submit";
  form.appendChild(submit);

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    const formData = new FormData(form);
    const title = formData.get("title");
    const description = formData.get("description");
    const dueDate = formData.get("dueDate");
    const priority = formData.get("priority");
    const project = formData.get("project");

    todoListItems[i].updateTask(
      i,
      todoListItems,
      title,
      description,
      dueDate,
      priority,
      project
    );

    document.body.innerHTML = "";

    pageLoad(todoListItems, projects);
  });

  const cancel = document.createElement("input");
  cancel.type = "button";
  cancel.value = "Cancel"
  form.appendChild(cancel);

  cancel.addEventListener("click", function (event) {
    event.preventDefault();

    document.body.innerHTML = "";

    pageLoad(todoListItems, projects);
  });
}

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZG9tLmJ1bmRsZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7VUN4Q0E7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDTitCOztBQUV4QjtBQUNQO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2QkFBNkIsMENBQVk7QUFDekM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRU87QUFDUDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEscUJBQXFCLDJDQUFhO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLEdBQUc7QUFDSDs7QUFFTztBQUNQO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxHQUFHO0FBQ0giLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWJwYWNrLWRlbW8vLi9zcmMvdG9kby5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWRlbW8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vd2VicGFjay1kZW1vL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly93ZWJwYWNrLWRlbW8vd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly93ZWJwYWNrLWRlbW8vd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly93ZWJwYWNrLWRlbW8vLi9zcmMvZG9tLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIENyZWF0aW5nIGEgbmV3IHRvZG9cbmV4cG9ydCBjbGFzcyB0b2RvTGlzdCB7XG4gIGNvbnN0cnVjdG9yKHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHksIHByb2plY3QpIHtcbiAgICB0aGlzLnRpdGxlID0gdGl0bGU7XG4gICAgdGhpcy5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xuICAgIHRoaXMuZHVlRGF0ZSA9IGR1ZURhdGU7XG4gICAgdGhpcy5wcmlvcml0eSA9IHByaW9yaXR5O1xuICAgIHRoaXMucHJvamVjdCA9IHByb2plY3Q7XG4gICAgdGhpcy5jb21wbGV0ZSA9IGZhbHNlO1xuICB9XG5cbiAgY29tcGxldGVUYXNrKGluZGV4LCB0b2RvTGlzdEl0ZW1zKSB7XG4gICAgdG9kb0xpc3RJdGVtc1tpbmRleF0uY29tcGxldGUgPSB0cnVlO1xuICB9XG5cbiAgdW5jb21wbGV0ZVRhc2soaW5kZXgsIHRvZG9MaXN0SXRlbXMpIHtcbiAgICB0b2RvTGlzdEl0ZW1zW2luZGV4XS5jb21wbGV0ZSA9IGZhbHNlO1xuICB9XG5cbiAgdXBkYXRlVGFzayhcbiAgICBpbmRleCxcbiAgICB0b2RvTGlzdEl0ZW1zLFxuICAgIHRpdGxlLFxuICAgIGRlc2NyaXB0aW9uLFxuICAgIGR1ZURhdGUsXG4gICAgcHJpb3JpdHksXG4gICAgcHJvamVjdFxuICApIHtcbiAgICB0b2RvTGlzdEl0ZW1zW2luZGV4XS50aXRsZSA9IHRpdGxlO1xuICAgIHRvZG9MaXN0SXRlbXNbaW5kZXhdLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XG4gICAgdG9kb0xpc3RJdGVtc1tpbmRleF0uZHVlRGF0ZSA9IGR1ZURhdGU7XG4gICAgdG9kb0xpc3RJdGVtc1tpbmRleF0ucHJpb3JpdHkgPSBwcmlvcml0eTtcbiAgICB0b2RvTGlzdEl0ZW1zW2luZGV4XS5wcm9qZWN0ID0gcHJvamVjdDtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgcHJvamVjdCB7XG4gIGNvbnN0cnVjdG9yKHByb2plY3QpIHtcbiAgICB0aGlzLnByb2plY3QgPSBwcm9qZWN0O1xuICB9XG59XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCAqIGFzIHRvZG8gZnJvbSBcIi4vdG9kb1wiO1xuXG5leHBvcnQgZnVuY3Rpb24gcGFnZUxvYWQodG9kb0xpc3RJdGVtcywgcHJvamVjdHMpIHtcbiAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnRlbnQuaWQgPSBcImNvbnRlbnRcIjtcbiAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChjb250ZW50KTtcblxuICAvLyBTdHJ1Y3R1cmUgb2YgdGhlIHBhZ2VcbiAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImhlYWRlclwiKTtcbiAgY29udGVudC5hcHBlbmRDaGlsZChoZWFkZXIpO1xuICBjb25zdCBtYWluID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm1haW5cIik7XG4gIGNvbnRlbnQuYXBwZW5kQ2hpbGQobWFpbik7XG4gIGNvbnN0IGZvb3RlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJmb290ZXJcIik7XG4gIGNvbnRlbnQuYXBwZW5kQ2hpbGQoZm9vdGVyKTtcblxuICAvLyBIZWFkZXIgZWxlbWVudFxuICBjb25zdCBoZWFkZXJUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xuICBoZWFkZXJUZXh0LmlubmVyVGV4dCA9IFwiTXkgVG9kbyBMaXN0XCI7XG4gIGhlYWRlci5hcHBlbmRDaGlsZChoZWFkZXJUZXh0KTtcblxuICBjb25zdCBoZWFkZXJCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICBoZWFkZXJCdXR0b24uaWQgPSBcImFkZC10YXNrLWJ1dHRvblwiO1xuICBoZWFkZXJCdXR0b24uaW5uZXJUZXh0ID0gXCJBZGQgVGFza1wiO1xuICBoZWFkZXIuYXBwZW5kQ2hpbGQoaGVhZGVyQnV0dG9uKTtcbiAgaGVhZGVyQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgYWRkVGFzayh0b2RvTGlzdEl0ZW1zLCBwcm9qZWN0cyk7XG4gIH0pO1xuXG4gIGNvbnN0IHByb2plY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2VsZWN0XCIpO1xuICBwcm9qZWN0Lm5hbWUgPSBcInByb2plY3RcIjtcbiAgaGVhZGVyLmFwcGVuZENoaWxkKHByb2plY3QpO1xuICBmb3IgKGNvbnN0IHByb2plY3RJdGVtIG9mIHByb2plY3RzKSB7XG4gICAgY29uc3Qgb3B0aW9uUHJvamVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIik7XG4gICAgb3B0aW9uUHJvamVjdC52YWx1ZSA9IHByb2plY3RJdGVtLnByb2plY3Q7XG4gICAgb3B0aW9uUHJvamVjdC5pbm5lclRleHQgPSBwcm9qZWN0SXRlbS5wcm9qZWN0O1xuICAgIHByb2plY3QuYXBwZW5kQ2hpbGQob3B0aW9uUHJvamVjdCk7XG4gIH1cblxuICBjb25zdCBhZGRQcm9qZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICBhZGRQcm9qZWN0LnBsYWNlaG9sZGVyID0gXCJOZXcgUHJvamVjdFwiO1xuICBoZWFkZXIuYXBwZW5kQ2hpbGQoYWRkUHJvamVjdCk7XG4gIGFkZFByb2plY3QuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgKGV2ZW50KSA9PiB7XG4gICAgY29uc3Qga2V5ID0gZXZlbnQua2V5O1xuICAgIGlmIChrZXkgPT0gXCJFbnRlclwiKSB7XG4gICAgICBjb25zdCBuZXdQcm9qZWN0ID0gbmV3IHRvZG8ucHJvamVjdChhZGRQcm9qZWN0LnZhbHVlKTtcbiAgICAgIHByb2plY3RzLnB1c2gobmV3UHJvamVjdCk7XG4gICAgICBkb2N1bWVudC5ib2R5LmlubmVySFRNTCA9IFwiXCI7XG4gICAgICBwYWdlTG9hZCh0b2RvTGlzdEl0ZW1zLCBwcm9qZWN0cyk7XG4gICAgfVxuICB9KTtcblxuICAvLyBNYWluIGVsZW1lbnRcbiAgY29uc3QgdG9kb0l0ZW1zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgdG9kb0l0ZW1zLmlubmVyVGV4dCA9IFwiSXRlbXMgVG9kb1wiO1xuICBtYWluLmFwcGVuZENoaWxkKHRvZG9JdGVtcyk7XG5cbiAgY29uc3QgdG9kb0xpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidWxcIik7XG4gIHRvZG9MaXN0LmlkID0gXCJ0b2RvLWxpc3RcIjtcbiAgdG9kb0l0ZW1zLmFwcGVuZENoaWxkKHRvZG9MaXN0KTtcblxuICBjb25zdCBjb21wbGV0ZUl0ZW1zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29tcGxldGVJdGVtcy5pbm5lclRleHQgPSBcIkl0ZW1zIENvbXBsZXRlZFwiO1xuICBtYWluLmFwcGVuZENoaWxkKGNvbXBsZXRlSXRlbXMpO1xuXG4gIGNvbnN0IGNvbXBsZXRlTGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ1bFwiKTtcbiAgY29tcGxldGVMaXN0LmlkID0gXCJjb21wbGV0ZS1saXN0XCI7XG4gIGNvbXBsZXRlSXRlbXMuYXBwZW5kQ2hpbGQoY29tcGxldGVMaXN0KTtcblxuICBidWlsZFRvZG9MaXN0KHRvZG9MaXN0SXRlbXMsIHRvZG9MaXN0LCBjb21wbGV0ZUxpc3QsIHByb2plY3RzKTtcblxuICAvLyBGb290ZXIgZWxlbWVudFxuICBjb25zdCBmb290ZXJUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgZm9vdGVyVGV4dC5pbm5lclRleHQgPSBcIkZvb3RlciB0ZXh0IGdvZXMgaGVyZVwiO1xuICBmb290ZXIuYXBwZW5kQ2hpbGQoZm9vdGVyVGV4dCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhZGRUYXNrKHRvZG9MaXN0SXRlbXMsIHByb2plY3RzKSB7XG4gIGNvbnN0IGFkZFRhc2tGcm9tID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgYWRkVGFza0Zyb20uaWQgPSBcImFkZC10YXNrLWZvcm1cIjtcbiAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChhZGRUYXNrRnJvbSk7XG5cbiAgY29uc3QgZm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJmb3JtXCIpO1xuICBhZGRUYXNrRnJvbS5hcHBlbmRDaGlsZChmb3JtKTtcblxuICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgdGl0bGUudHlwZSA9IFwidGV4dGJveFwiO1xuICB0aXRsZS5uYW1lID0gXCJ0aXRsZVwiO1xuICB0aXRsZS5wbGFjZWhvbGRlciA9IFwidGl0bGVcIjtcbiAgZm9ybS5hcHBlbmRDaGlsZCh0aXRsZSk7XG5cbiAgY29uc3QgZGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gIGRlc2NyaXB0aW9uLnR5cGUgPSBcInRleHRib3hcIjtcbiAgZGVzY3JpcHRpb24ubmFtZSA9IFwiZGVzY3JpcHRpb25cIjtcbiAgZGVzY3JpcHRpb24ucGxhY2Vob2xkZXIgPSBcImRlc2NyaXB0aW9uXCI7XG4gIGZvcm0uYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb24pO1xuXG4gIGNvbnN0IGR1ZURhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gIGR1ZURhdGUudHlwZSA9IFwiRGF0ZVwiO1xuICBkdWVEYXRlLm5hbWUgPSBcImR1ZURhdGVcIjtcbiAgZm9ybS5hcHBlbmRDaGlsZChkdWVEYXRlKTtcblxuICBjb25zdCBwcmlvcml0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzZWxlY3RcIik7XG4gIHByaW9yaXR5Lm5hbWUgPSBcInByaW9yaXR5XCI7XG4gIGZvcm0uYXBwZW5kQ2hpbGQocHJpb3JpdHkpO1xuICBjb25zdCBvcHRpb25Mb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpO1xuICBvcHRpb25Mb3cudmFsdWUgPSBcIkxvd1wiO1xuICBvcHRpb25Mb3cuaW5uZXJUZXh0ID0gXCJMb3dcIjtcbiAgcHJpb3JpdHkuYXBwZW5kQ2hpbGQob3B0aW9uTG93KTtcbiAgY29uc3Qgb3B0aW9uTE1lZGl1bSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIik7XG4gIG9wdGlvbkxNZWRpdW0udmFsdWUgPSBcIk1lZGl1bVwiO1xuICBvcHRpb25MTWVkaXVtLmlubmVyVGV4dCA9IFwiTWVkaXVtXCI7XG4gIHByaW9yaXR5LmFwcGVuZENoaWxkKG9wdGlvbkxNZWRpdW0pO1xuICBjb25zdCBvcHRpb25IaWdoID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKTtcbiAgb3B0aW9uSGlnaC52YWx1ZSA9IFwiSGlnaFwiO1xuICBvcHRpb25IaWdoLmlubmVyVGV4dCA9IFwiSGlnaFwiO1xuICBwcmlvcml0eS5hcHBlbmRDaGlsZChvcHRpb25IaWdoKTtcblxuICBjb25zdCBwcm9qZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNlbGVjdFwiKTtcbiAgcHJvamVjdC5uYW1lID0gXCJwcm9qZWN0XCI7XG4gIGZvcm0uYXBwZW5kQ2hpbGQocHJvamVjdCk7XG5cbiAgZm9yIChjb25zdCBwcm9qZWN0SXRlbSBvZiBwcm9qZWN0cykge1xuICAgIGlmIChwcm9qZWN0SXRlbS5wcm9qZWN0ID09IFwiQWxsXCIpIHtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3Qgb3B0aW9uUHJvamVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIik7XG4gICAgICBvcHRpb25Qcm9qZWN0LnZhbHVlID0gcHJvamVjdEl0ZW0ucHJvamVjdDtcbiAgICAgIG9wdGlvblByb2plY3QuaW5uZXJUZXh0ID0gcHJvamVjdEl0ZW0ucHJvamVjdDtcbiAgICAgIHByb2plY3QuYXBwZW5kQ2hpbGQob3B0aW9uUHJvamVjdCk7XG4gICAgfVxuICB9XG5cbiAgY29uc3Qgc3VibWl0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICBzdWJtaXQudHlwZSA9IFwic3VibWl0XCI7XG4gIGZvcm0uYXBwZW5kQ2hpbGQoc3VibWl0KTtcblxuICBmb3JtLmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgIGNvbnN0IGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKGZvcm0pO1xuICAgIGNvbnN0IHRpdGxlID0gZm9ybURhdGEuZ2V0KFwidGl0bGVcIik7XG4gICAgY29uc3QgZGVzY3JpcHRpb24gPSBmb3JtRGF0YS5nZXQoXCJkZXNjcmlwdGlvblwiKTtcbiAgICBjb25zdCBkdWVEYXRlID0gZm9ybURhdGEuZ2V0KFwiZHVlRGF0ZVwiKTtcbiAgICBjb25zdCBwcmlvcml0eSA9IGZvcm1EYXRhLmdldChcInByaW9yaXR5XCIpO1xuICAgIGNvbnN0IHByb2plY3QgPSBmb3JtRGF0YS5nZXQoXCJwcm9qZWN0XCIpO1xuXG4gICAgY29uc3QgaXRlbSA9IG5ldyB0b2RvLnRvZG9MaXN0KFxuICAgICAgdGl0bGUsXG4gICAgICBkZXNjcmlwdGlvbixcbiAgICAgIGR1ZURhdGUsXG4gICAgICBwcmlvcml0eSxcbiAgICAgIHByb2plY3RcbiAgICApO1xuXG4gICAgdG9kb0xpc3RJdGVtcy5wdXNoKGl0ZW0pO1xuXG4gICAgZG9jdW1lbnQuYm9keS5pbm5lckhUTUwgPSBcIlwiO1xuXG4gICAgcGFnZUxvYWQodG9kb0xpc3RJdGVtcywgcHJvamVjdHMpO1xuICB9KTtcblxuICBjb25zdCBjYW5jZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gIGNhbmNlbC50eXBlID0gXCJidXR0b25cIjtcbiAgY2FuY2VsLnZhbHVlID0gXCJDYW5jZWxcIlxuICBmb3JtLmFwcGVuZENoaWxkKGNhbmNlbCk7XG5cbiAgY2FuY2VsLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgZG9jdW1lbnQuYm9keS5pbm5lckhUTUwgPSBcIlwiO1xuXG4gICAgcGFnZUxvYWQodG9kb0xpc3RJdGVtcywgcHJvamVjdHMpO1xuICB9KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGJ1aWxkVG9kb0xpc3QodG9kb0xpc3RJdGVtcywgdG9kb0xpc3QsIGNvbXBsZXRlTGlzdCwgcHJvamVjdHMpIHtcbiAgY29uc3QgY3JlYXRlTGlzdEl0ZW0gPSAoaXRlbSwgaSkgPT4ge1xuICAgIGNvbnN0IGxpc3RJdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xuXG4gICAgY29uc3QgY29tcGxldGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgY29tcGxldGUudHlwZSA9IFwiY2hlY2tib3hcIjtcbiAgICBjb21wbGV0ZS5jaGVja2VkID0gaXRlbS5jb21wbGV0ZTtcbiAgICBsaXN0SXRlbS5hcHBlbmRDaGlsZChjb21wbGV0ZSk7XG4gICAgY29tcGxldGUuYWRkRXZlbnRMaXN0ZW5lcihcImNoYW5nZVwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBpZiAodG9kb0xpc3RJdGVtc1tpXS5jb21wbGV0ZSA9PSBmYWxzZSkge1xuICAgICAgICB0b2RvTGlzdEl0ZW1zW2ldLmNvbXBsZXRlVGFzayhpLCB0b2RvTGlzdEl0ZW1zKTtcbiAgICAgICAgZG9jdW1lbnQuYm9keS5pbm5lckhUTUwgPSBcIlwiO1xuICAgICAgICBwYWdlTG9hZCh0b2RvTGlzdEl0ZW1zLCBwcm9qZWN0cyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0b2RvTGlzdEl0ZW1zW2ldLnVuY29tcGxldGVUYXNrKGksIHRvZG9MaXN0SXRlbXMpO1xuICAgICAgICBkb2N1bWVudC5ib2R5LmlubmVySFRNTCA9IFwiXCI7XG4gICAgICAgIHBhZ2VMb2FkKHRvZG9MaXN0SXRlbXMsIHByb2plY3RzKTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICB0aXRsZS5pbm5lclRleHQgPSBpdGVtLnRpdGxlO1xuICAgIGxpc3RJdGVtLmFwcGVuZENoaWxkKHRpdGxlKTtcblxuICAgIGNvbnN0IGR1ZURhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGR1ZURhdGUuaW5uZXJUZXh0ID0gaXRlbS5kdWVEYXRlO1xuICAgIGxpc3RJdGVtLmFwcGVuZENoaWxkKGR1ZURhdGUpO1xuXG4gICAgY29uc3QgcHJvamVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgcHJvamVjdC5pbm5lclRleHQgPSBpdGVtLnByb2plY3Q7XG4gICAgbGlzdEl0ZW0uYXBwZW5kQ2hpbGQocHJvamVjdCk7XG5cbiAgICBsaXN0SXRlbS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgZWRpdFRhc2sodG9kb0xpc3RJdGVtcywgaSwgcHJvamVjdHMpO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIGxpc3RJdGVtO1xuICB9O1xuXG4gIGxldCBpID0gMDtcbiAgZm9yIChjb25zdCBpdGVtIG9mIHRvZG9MaXN0SXRlbXMpIHtcbiAgICBjb25zdCBsaXN0SXRlbSA9IGNyZWF0ZUxpc3RJdGVtKGl0ZW0sIGkpO1xuXG4gICAgaWYgKGl0ZW0uY29tcGxldGUpIHtcbiAgICAgIGNvbXBsZXRlTGlzdC5hcHBlbmRDaGlsZChsaXN0SXRlbSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRvZG9MaXN0LmFwcGVuZENoaWxkKGxpc3RJdGVtKTtcbiAgICB9XG4gICAgaSA9IGkgKyAxO1xuICB9XG59XG5cbmZ1bmN0aW9uIGVkaXRUYXNrKHRvZG9MaXN0SXRlbXMsIGksIHByb2plY3RzKSB7XG4gIGNvbnN0IGFkZFRhc2tGcm9tID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgYWRkVGFza0Zyb20uaWQgPSBcImVkaXQtdGFzay1mb3JtXCI7XG4gIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoYWRkVGFza0Zyb20pO1xuXG4gIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZm9ybVwiKTtcbiAgYWRkVGFza0Zyb20uYXBwZW5kQ2hpbGQoZm9ybSk7XG5cbiAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gIHRpdGxlLnR5cGUgPSBcInRleHRib3hcIjtcbiAgdGl0bGUubmFtZSA9IFwidGl0bGVcIjtcbiAgdGl0bGUudmFsdWUgPSB0b2RvTGlzdEl0ZW1zW2ldLnRpdGxlO1xuICB0aXRsZS5wbGFjZWhvbGRlciA9IFwidGl0bGVcIjtcbiAgZm9ybS5hcHBlbmRDaGlsZCh0aXRsZSk7XG5cbiAgY29uc3QgZGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gIGRlc2NyaXB0aW9uLnR5cGUgPSBcInRleHRib3hcIjtcbiAgZGVzY3JpcHRpb24ubmFtZSA9IFwiZGVzY3JpcHRpb25cIjtcbiAgZGVzY3JpcHRpb24udmFsdWUgPSB0b2RvTGlzdEl0ZW1zW2ldLmRlc2NyaXB0aW9uO1xuICBkZXNjcmlwdGlvbi5wbGFjZWhvbGRlciA9IFwiZGVzY3JpcHRpb25cIjtcbiAgZm9ybS5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbik7XG5cbiAgY29uc3QgZHVlRGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgZHVlRGF0ZS50eXBlID0gXCJEYXRlXCI7XG4gIGR1ZURhdGUubmFtZSA9IFwiZHVlRGF0ZVwiO1xuICBkdWVEYXRlLnZhbHVlID0gdG9kb0xpc3RJdGVtc1tpXS5kdWVEYXRlO1xuICBmb3JtLmFwcGVuZENoaWxkKGR1ZURhdGUpO1xuXG4gIGNvbnN0IHByaW9yaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNlbGVjdFwiKTtcbiAgcHJpb3JpdHkuaWQgPSBcInByaW9yaXR5XCI7XG4gIHByaW9yaXR5Lm5hbWUgPSBcInByaW9yaXR5XCI7XG4gIGZvcm0uYXBwZW5kQ2hpbGQocHJpb3JpdHkpO1xuICBjb25zdCBvcHRpb25Mb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpO1xuICBvcHRpb25Mb3cudmFsdWUgPSBcIkxvd1wiO1xuICBvcHRpb25Mb3cuaW5uZXJUZXh0ID0gXCJMb3dcIjtcbiAgcHJpb3JpdHkuYXBwZW5kQ2hpbGQob3B0aW9uTG93KTtcbiAgY29uc3Qgb3B0aW9uTE1lZGl1bSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIik7XG4gIG9wdGlvbkxNZWRpdW0udmFsdWUgPSBcIk1lZGl1bVwiO1xuICBvcHRpb25MTWVkaXVtLmlubmVyVGV4dCA9IFwiTWVkaXVtXCI7XG4gIHByaW9yaXR5LmFwcGVuZENoaWxkKG9wdGlvbkxNZWRpdW0pO1xuICBjb25zdCBvcHRpb25IaWdoID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKTtcbiAgb3B0aW9uSGlnaC52YWx1ZSA9IFwiSGlnaFwiO1xuICBvcHRpb25IaWdoLmlubmVyVGV4dCA9IFwiSGlnaFwiO1xuICBwcmlvcml0eS5hcHBlbmRDaGlsZChvcHRpb25IaWdoKTtcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwcmlvcml0eVwiKS52YWx1ZSA9IHRvZG9MaXN0SXRlbXNbaV0ucHJpb3JpdHk7XG5cbiAgY29uc3QgcHJvamVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzZWxlY3RcIik7XG4gIHByb2plY3QuaWQgPSBcInByb2plY3RcIjtcbiAgcHJvamVjdC5uYW1lID0gXCJwcm9qZWN0XCI7XG4gIGZvcm0uYXBwZW5kQ2hpbGQocHJvamVjdCk7XG5cbiAgZm9yIChjb25zdCBwcm9qZWN0SXRlbSBvZiBwcm9qZWN0cykge1xuICAgIGlmIChwcm9qZWN0SXRlbS5wcm9qZWN0ID09IFwiQWxsXCIpIHtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3Qgb3B0aW9uUHJvamVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIik7XG4gICAgICBvcHRpb25Qcm9qZWN0LnZhbHVlID0gcHJvamVjdEl0ZW0ucHJvamVjdDtcbiAgICAgIG9wdGlvblByb2plY3QuaW5uZXJUZXh0ID0gcHJvamVjdEl0ZW0ucHJvamVjdDtcbiAgICAgIHByb2plY3QuYXBwZW5kQ2hpbGQob3B0aW9uUHJvamVjdCk7XG4gICAgfVxuICB9XG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicHJvamVjdFwiKS52YWx1ZSA9IHRvZG9MaXN0SXRlbXNbaV0ucHJvamVjdDtcblxuICBjb25zdCBzdWJtaXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gIHN1Ym1pdC50eXBlID0gXCJzdWJtaXRcIjtcbiAgZm9ybS5hcHBlbmRDaGlsZChzdWJtaXQpO1xuXG4gIGZvcm0uYWRkRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgY29uc3QgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoZm9ybSk7XG4gICAgY29uc3QgdGl0bGUgPSBmb3JtRGF0YS5nZXQoXCJ0aXRsZVwiKTtcbiAgICBjb25zdCBkZXNjcmlwdGlvbiA9IGZvcm1EYXRhLmdldChcImRlc2NyaXB0aW9uXCIpO1xuICAgIGNvbnN0IGR1ZURhdGUgPSBmb3JtRGF0YS5nZXQoXCJkdWVEYXRlXCIpO1xuICAgIGNvbnN0IHByaW9yaXR5ID0gZm9ybURhdGEuZ2V0KFwicHJpb3JpdHlcIik7XG4gICAgY29uc3QgcHJvamVjdCA9IGZvcm1EYXRhLmdldChcInByb2plY3RcIik7XG5cbiAgICB0b2RvTGlzdEl0ZW1zW2ldLnVwZGF0ZVRhc2soXG4gICAgICBpLFxuICAgICAgdG9kb0xpc3RJdGVtcyxcbiAgICAgIHRpdGxlLFxuICAgICAgZGVzY3JpcHRpb24sXG4gICAgICBkdWVEYXRlLFxuICAgICAgcHJpb3JpdHksXG4gICAgICBwcm9qZWN0XG4gICAgKTtcblxuICAgIGRvY3VtZW50LmJvZHkuaW5uZXJIVE1MID0gXCJcIjtcblxuICAgIHBhZ2VMb2FkKHRvZG9MaXN0SXRlbXMsIHByb2plY3RzKTtcbiAgfSk7XG5cbiAgY29uc3QgY2FuY2VsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICBjYW5jZWwudHlwZSA9IFwiYnV0dG9uXCI7XG4gIGNhbmNlbC52YWx1ZSA9IFwiQ2FuY2VsXCJcbiAgZm9ybS5hcHBlbmRDaGlsZChjYW5jZWwpO1xuXG4gIGNhbmNlbC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgIGRvY3VtZW50LmJvZHkuaW5uZXJIVE1MID0gXCJcIjtcblxuICAgIHBhZ2VMb2FkKHRvZG9MaXN0SXRlbXMsIHByb2plY3RzKTtcbiAgfSk7XG59XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=