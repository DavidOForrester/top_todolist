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

  deleteTask(index, todoListItems) {
    todoListItems.splice(index, 1);
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
  cancel.value = "Cancel";
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
  cancel.value = "Cancel";
  form.appendChild(cancel);

  cancel.addEventListener("click", function (event) {
    event.preventDefault();

    document.body.innerHTML = "";

    pageLoad(todoListItems, projects);
  });

  const deleteButton = document.createElement("input");
  deleteButton.type = "button";
  deleteButton.value = "Delete";
  form.appendChild(deleteButton);

  deleteButton.addEventListener("click", function (event) {
    event.preventDefault();

    todoListItems[i].deleteTask(i, todoListItems);

    document.body.innerHTML = "";

    pageLoad(todoListItems, projects);
  });
}

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZG9tLmJ1bmRsZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFTztBQUNQO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O1VDNUNBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7Ozs7OztBQ04rQjs7QUFFeEI7QUFDUDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkJBQTZCLDBDQUFZO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHFCQUFxQiwyQ0FBYTtBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxHQUFHO0FBQ0g7O0FBRU87QUFDUDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0EsR0FBRztBQUNIIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2VicGFjay1kZW1vLy4vc3JjL3RvZG8uanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1kZW1vL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3dlYnBhY2stZGVtby93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vd2VicGFjay1kZW1vL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vd2VicGFjay1kZW1vL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vd2VicGFjay1kZW1vLy4vc3JjL2RvbS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBDcmVhdGluZyBhIG5ldyB0b2RvXG5leHBvcnQgY2xhc3MgdG9kb0xpc3Qge1xuICBjb25zdHJ1Y3Rvcih0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5LCBwcm9qZWN0KSB7XG4gICAgdGhpcy50aXRsZSA9IHRpdGxlO1xuICAgIHRoaXMuZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcbiAgICB0aGlzLmR1ZURhdGUgPSBkdWVEYXRlO1xuICAgIHRoaXMucHJpb3JpdHkgPSBwcmlvcml0eTtcbiAgICB0aGlzLnByb2plY3QgPSBwcm9qZWN0O1xuICAgIHRoaXMuY29tcGxldGUgPSBmYWxzZTtcbiAgfVxuXG4gIGNvbXBsZXRlVGFzayhpbmRleCwgdG9kb0xpc3RJdGVtcykge1xuICAgIHRvZG9MaXN0SXRlbXNbaW5kZXhdLmNvbXBsZXRlID0gdHJ1ZTtcbiAgfVxuXG4gIHVuY29tcGxldGVUYXNrKGluZGV4LCB0b2RvTGlzdEl0ZW1zKSB7XG4gICAgdG9kb0xpc3RJdGVtc1tpbmRleF0uY29tcGxldGUgPSBmYWxzZTtcbiAgfVxuXG4gIHVwZGF0ZVRhc2soXG4gICAgaW5kZXgsXG4gICAgdG9kb0xpc3RJdGVtcyxcbiAgICB0aXRsZSxcbiAgICBkZXNjcmlwdGlvbixcbiAgICBkdWVEYXRlLFxuICAgIHByaW9yaXR5LFxuICAgIHByb2plY3RcbiAgKSB7XG4gICAgdG9kb0xpc3RJdGVtc1tpbmRleF0udGl0bGUgPSB0aXRsZTtcbiAgICB0b2RvTGlzdEl0ZW1zW2luZGV4XS5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xuICAgIHRvZG9MaXN0SXRlbXNbaW5kZXhdLmR1ZURhdGUgPSBkdWVEYXRlO1xuICAgIHRvZG9MaXN0SXRlbXNbaW5kZXhdLnByaW9yaXR5ID0gcHJpb3JpdHk7XG4gICAgdG9kb0xpc3RJdGVtc1tpbmRleF0ucHJvamVjdCA9IHByb2plY3Q7XG4gIH1cblxuICBkZWxldGVUYXNrKGluZGV4LCB0b2RvTGlzdEl0ZW1zKSB7XG4gICAgdG9kb0xpc3RJdGVtcy5zcGxpY2UoaW5kZXgsIDEpO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBwcm9qZWN0IHtcbiAgY29uc3RydWN0b3IocHJvamVjdCkge1xuICAgIHRoaXMucHJvamVjdCA9IHByb2plY3Q7XG4gIH1cbn1cbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0ICogYXMgdG9kbyBmcm9tIFwiLi90b2RvXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBwYWdlTG9hZCh0b2RvTGlzdEl0ZW1zLCBwcm9qZWN0cykge1xuICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29udGVudC5pZCA9IFwiY29udGVudFwiO1xuICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGNvbnRlbnQpO1xuXG4gIC8vIFN0cnVjdHVyZSBvZiB0aGUgcGFnZVxuICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaGVhZGVyXCIpO1xuICBjb250ZW50LmFwcGVuZENoaWxkKGhlYWRlcik7XG4gIGNvbnN0IG1haW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibWFpblwiKTtcbiAgY29udGVudC5hcHBlbmRDaGlsZChtYWluKTtcbiAgY29uc3QgZm9vdGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImZvb3RlclwiKTtcbiAgY29udGVudC5hcHBlbmRDaGlsZChmb290ZXIpO1xuXG4gIC8vIEhlYWRlciBlbGVtZW50XG4gIGNvbnN0IGhlYWRlclRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIik7XG4gIGhlYWRlclRleHQuaW5uZXJUZXh0ID0gXCJNeSBUb2RvIExpc3RcIjtcbiAgaGVhZGVyLmFwcGVuZENoaWxkKGhlYWRlclRleHQpO1xuXG4gIGNvbnN0IGhlYWRlckJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gIGhlYWRlckJ1dHRvbi5pZCA9IFwiYWRkLXRhc2stYnV0dG9uXCI7XG4gIGhlYWRlckJ1dHRvbi5pbm5lclRleHQgPSBcIkFkZCBUYXNrXCI7XG4gIGhlYWRlci5hcHBlbmRDaGlsZChoZWFkZXJCdXR0b24pO1xuICBoZWFkZXJCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBhZGRUYXNrKHRvZG9MaXN0SXRlbXMsIHByb2plY3RzKTtcbiAgfSk7XG5cbiAgY29uc3QgcHJvamVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzZWxlY3RcIik7XG4gIHByb2plY3QubmFtZSA9IFwicHJvamVjdFwiO1xuICBoZWFkZXIuYXBwZW5kQ2hpbGQocHJvamVjdCk7XG4gIGZvciAoY29uc3QgcHJvamVjdEl0ZW0gb2YgcHJvamVjdHMpIHtcbiAgICBjb25zdCBvcHRpb25Qcm9qZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKTtcbiAgICBvcHRpb25Qcm9qZWN0LnZhbHVlID0gcHJvamVjdEl0ZW0ucHJvamVjdDtcbiAgICBvcHRpb25Qcm9qZWN0LmlubmVyVGV4dCA9IHByb2plY3RJdGVtLnByb2plY3Q7XG4gICAgcHJvamVjdC5hcHBlbmRDaGlsZChvcHRpb25Qcm9qZWN0KTtcbiAgfVxuXG4gIGNvbnN0IGFkZFByb2plY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gIGFkZFByb2plY3QucGxhY2Vob2xkZXIgPSBcIk5ldyBQcm9qZWN0XCI7XG4gIGhlYWRlci5hcHBlbmRDaGlsZChhZGRQcm9qZWN0KTtcbiAgYWRkUHJvamVjdC5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCAoZXZlbnQpID0+IHtcbiAgICBjb25zdCBrZXkgPSBldmVudC5rZXk7XG4gICAgaWYgKGtleSA9PSBcIkVudGVyXCIpIHtcbiAgICAgIGNvbnN0IG5ld1Byb2plY3QgPSBuZXcgdG9kby5wcm9qZWN0KGFkZFByb2plY3QudmFsdWUpO1xuICAgICAgcHJvamVjdHMucHVzaChuZXdQcm9qZWN0KTtcbiAgICAgIGRvY3VtZW50LmJvZHkuaW5uZXJIVE1MID0gXCJcIjtcbiAgICAgIHBhZ2VMb2FkKHRvZG9MaXN0SXRlbXMsIHByb2plY3RzKTtcbiAgICB9XG4gIH0pO1xuXG4gIC8vIE1haW4gZWxlbWVudFxuICBjb25zdCB0b2RvSXRlbXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICB0b2RvSXRlbXMuaW5uZXJUZXh0ID0gXCJJdGVtcyBUb2RvXCI7XG4gIG1haW4uYXBwZW5kQ2hpbGQodG9kb0l0ZW1zKTtcblxuICBjb25zdCB0b2RvTGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ1bFwiKTtcbiAgdG9kb0xpc3QuaWQgPSBcInRvZG8tbGlzdFwiO1xuICB0b2RvSXRlbXMuYXBwZW5kQ2hpbGQodG9kb0xpc3QpO1xuXG4gIGNvbnN0IGNvbXBsZXRlSXRlbXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb21wbGV0ZUl0ZW1zLmlubmVyVGV4dCA9IFwiSXRlbXMgQ29tcGxldGVkXCI7XG4gIG1haW4uYXBwZW5kQ2hpbGQoY29tcGxldGVJdGVtcyk7XG5cbiAgY29uc3QgY29tcGxldGVMaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInVsXCIpO1xuICBjb21wbGV0ZUxpc3QuaWQgPSBcImNvbXBsZXRlLWxpc3RcIjtcbiAgY29tcGxldGVJdGVtcy5hcHBlbmRDaGlsZChjb21wbGV0ZUxpc3QpO1xuXG4gIGJ1aWxkVG9kb0xpc3QodG9kb0xpc3RJdGVtcywgdG9kb0xpc3QsIGNvbXBsZXRlTGlzdCwgcHJvamVjdHMpO1xuXG4gIC8vIEZvb3RlciBlbGVtZW50XG4gIGNvbnN0IGZvb3RlclRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBmb290ZXJUZXh0LmlubmVyVGV4dCA9IFwiRm9vdGVyIHRleHQgZ29lcyBoZXJlXCI7XG4gIGZvb3Rlci5hcHBlbmRDaGlsZChmb290ZXJUZXh0KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFkZFRhc2sodG9kb0xpc3RJdGVtcywgcHJvamVjdHMpIHtcbiAgY29uc3QgYWRkVGFza0Zyb20gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBhZGRUYXNrRnJvbS5pZCA9IFwiYWRkLXRhc2stZm9ybVwiO1xuICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGFkZFRhc2tGcm9tKTtcblxuICBjb25zdCBmb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImZvcm1cIik7XG4gIGFkZFRhc2tGcm9tLmFwcGVuZENoaWxkKGZvcm0pO1xuXG4gIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICB0aXRsZS50eXBlID0gXCJ0ZXh0Ym94XCI7XG4gIHRpdGxlLm5hbWUgPSBcInRpdGxlXCI7XG4gIHRpdGxlLnBsYWNlaG9sZGVyID0gXCJ0aXRsZVwiO1xuICBmb3JtLmFwcGVuZENoaWxkKHRpdGxlKTtcblxuICBjb25zdCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgZGVzY3JpcHRpb24udHlwZSA9IFwidGV4dGJveFwiO1xuICBkZXNjcmlwdGlvbi5uYW1lID0gXCJkZXNjcmlwdGlvblwiO1xuICBkZXNjcmlwdGlvbi5wbGFjZWhvbGRlciA9IFwiZGVzY3JpcHRpb25cIjtcbiAgZm9ybS5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbik7XG5cbiAgY29uc3QgZHVlRGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgZHVlRGF0ZS50eXBlID0gXCJEYXRlXCI7XG4gIGR1ZURhdGUubmFtZSA9IFwiZHVlRGF0ZVwiO1xuICBmb3JtLmFwcGVuZENoaWxkKGR1ZURhdGUpO1xuXG4gIGNvbnN0IHByaW9yaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNlbGVjdFwiKTtcbiAgcHJpb3JpdHkubmFtZSA9IFwicHJpb3JpdHlcIjtcbiAgZm9ybS5hcHBlbmRDaGlsZChwcmlvcml0eSk7XG4gIGNvbnN0IG9wdGlvbkxvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIik7XG4gIG9wdGlvbkxvdy52YWx1ZSA9IFwiTG93XCI7XG4gIG9wdGlvbkxvdy5pbm5lclRleHQgPSBcIkxvd1wiO1xuICBwcmlvcml0eS5hcHBlbmRDaGlsZChvcHRpb25Mb3cpO1xuICBjb25zdCBvcHRpb25MTWVkaXVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKTtcbiAgb3B0aW9uTE1lZGl1bS52YWx1ZSA9IFwiTWVkaXVtXCI7XG4gIG9wdGlvbkxNZWRpdW0uaW5uZXJUZXh0ID0gXCJNZWRpdW1cIjtcbiAgcHJpb3JpdHkuYXBwZW5kQ2hpbGQob3B0aW9uTE1lZGl1bSk7XG4gIGNvbnN0IG9wdGlvbkhpZ2ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpO1xuICBvcHRpb25IaWdoLnZhbHVlID0gXCJIaWdoXCI7XG4gIG9wdGlvbkhpZ2guaW5uZXJUZXh0ID0gXCJIaWdoXCI7XG4gIHByaW9yaXR5LmFwcGVuZENoaWxkKG9wdGlvbkhpZ2gpO1xuXG4gIGNvbnN0IHByb2plY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2VsZWN0XCIpO1xuICBwcm9qZWN0Lm5hbWUgPSBcInByb2plY3RcIjtcbiAgZm9ybS5hcHBlbmRDaGlsZChwcm9qZWN0KTtcblxuICBmb3IgKGNvbnN0IHByb2plY3RJdGVtIG9mIHByb2plY3RzKSB7XG4gICAgaWYgKHByb2plY3RJdGVtLnByb2plY3QgPT0gXCJBbGxcIikge1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBvcHRpb25Qcm9qZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKTtcbiAgICAgIG9wdGlvblByb2plY3QudmFsdWUgPSBwcm9qZWN0SXRlbS5wcm9qZWN0O1xuICAgICAgb3B0aW9uUHJvamVjdC5pbm5lclRleHQgPSBwcm9qZWN0SXRlbS5wcm9qZWN0O1xuICAgICAgcHJvamVjdC5hcHBlbmRDaGlsZChvcHRpb25Qcm9qZWN0KTtcbiAgICB9XG4gIH1cblxuICBjb25zdCBzdWJtaXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gIHN1Ym1pdC50eXBlID0gXCJzdWJtaXRcIjtcbiAgZm9ybS5hcHBlbmRDaGlsZChzdWJtaXQpO1xuXG4gIGZvcm0uYWRkRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgY29uc3QgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoZm9ybSk7XG4gICAgY29uc3QgdGl0bGUgPSBmb3JtRGF0YS5nZXQoXCJ0aXRsZVwiKTtcbiAgICBjb25zdCBkZXNjcmlwdGlvbiA9IGZvcm1EYXRhLmdldChcImRlc2NyaXB0aW9uXCIpO1xuICAgIGNvbnN0IGR1ZURhdGUgPSBmb3JtRGF0YS5nZXQoXCJkdWVEYXRlXCIpO1xuICAgIGNvbnN0IHByaW9yaXR5ID0gZm9ybURhdGEuZ2V0KFwicHJpb3JpdHlcIik7XG4gICAgY29uc3QgcHJvamVjdCA9IGZvcm1EYXRhLmdldChcInByb2plY3RcIik7XG5cbiAgICBjb25zdCBpdGVtID0gbmV3IHRvZG8udG9kb0xpc3QoXG4gICAgICB0aXRsZSxcbiAgICAgIGRlc2NyaXB0aW9uLFxuICAgICAgZHVlRGF0ZSxcbiAgICAgIHByaW9yaXR5LFxuICAgICAgcHJvamVjdFxuICAgICk7XG5cbiAgICB0b2RvTGlzdEl0ZW1zLnB1c2goaXRlbSk7XG5cbiAgICBkb2N1bWVudC5ib2R5LmlubmVySFRNTCA9IFwiXCI7XG5cbiAgICBwYWdlTG9hZCh0b2RvTGlzdEl0ZW1zLCBwcm9qZWN0cyk7XG4gIH0pO1xuXG4gIGNvbnN0IGNhbmNlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgY2FuY2VsLnR5cGUgPSBcImJ1dHRvblwiO1xuICBjYW5jZWwudmFsdWUgPSBcIkNhbmNlbFwiO1xuICBmb3JtLmFwcGVuZENoaWxkKGNhbmNlbCk7XG5cbiAgY2FuY2VsLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgZG9jdW1lbnQuYm9keS5pbm5lckhUTUwgPSBcIlwiO1xuXG4gICAgcGFnZUxvYWQodG9kb0xpc3RJdGVtcywgcHJvamVjdHMpO1xuICB9KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGJ1aWxkVG9kb0xpc3QodG9kb0xpc3RJdGVtcywgdG9kb0xpc3QsIGNvbXBsZXRlTGlzdCwgcHJvamVjdHMpIHtcbiAgY29uc3QgY3JlYXRlTGlzdEl0ZW0gPSAoaXRlbSwgaSkgPT4ge1xuICAgIGNvbnN0IGxpc3RJdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xuXG4gICAgY29uc3QgY29tcGxldGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgY29tcGxldGUudHlwZSA9IFwiY2hlY2tib3hcIjtcbiAgICBjb21wbGV0ZS5jaGVja2VkID0gaXRlbS5jb21wbGV0ZTtcbiAgICBsaXN0SXRlbS5hcHBlbmRDaGlsZChjb21wbGV0ZSk7XG4gICAgY29tcGxldGUuYWRkRXZlbnRMaXN0ZW5lcihcImNoYW5nZVwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBpZiAodG9kb0xpc3RJdGVtc1tpXS5jb21wbGV0ZSA9PSBmYWxzZSkge1xuICAgICAgICB0b2RvTGlzdEl0ZW1zW2ldLmNvbXBsZXRlVGFzayhpLCB0b2RvTGlzdEl0ZW1zKTtcbiAgICAgICAgZG9jdW1lbnQuYm9keS5pbm5lckhUTUwgPSBcIlwiO1xuICAgICAgICBwYWdlTG9hZCh0b2RvTGlzdEl0ZW1zLCBwcm9qZWN0cyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0b2RvTGlzdEl0ZW1zW2ldLnVuY29tcGxldGVUYXNrKGksIHRvZG9MaXN0SXRlbXMpO1xuICAgICAgICBkb2N1bWVudC5ib2R5LmlubmVySFRNTCA9IFwiXCI7XG4gICAgICAgIHBhZ2VMb2FkKHRvZG9MaXN0SXRlbXMsIHByb2plY3RzKTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICB0aXRsZS5pbm5lclRleHQgPSBpdGVtLnRpdGxlO1xuICAgIGxpc3RJdGVtLmFwcGVuZENoaWxkKHRpdGxlKTtcblxuICAgIGNvbnN0IGR1ZURhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGR1ZURhdGUuaW5uZXJUZXh0ID0gaXRlbS5kdWVEYXRlO1xuICAgIGxpc3RJdGVtLmFwcGVuZENoaWxkKGR1ZURhdGUpO1xuXG4gICAgY29uc3QgcHJvamVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgcHJvamVjdC5pbm5lclRleHQgPSBpdGVtLnByb2plY3Q7XG4gICAgbGlzdEl0ZW0uYXBwZW5kQ2hpbGQocHJvamVjdCk7XG5cbiAgICBsaXN0SXRlbS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgZWRpdFRhc2sodG9kb0xpc3RJdGVtcywgaSwgcHJvamVjdHMpO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIGxpc3RJdGVtO1xuICB9O1xuXG4gIGxldCBpID0gMDtcbiAgZm9yIChjb25zdCBpdGVtIG9mIHRvZG9MaXN0SXRlbXMpIHtcbiAgICBjb25zdCBsaXN0SXRlbSA9IGNyZWF0ZUxpc3RJdGVtKGl0ZW0sIGkpO1xuXG4gICAgaWYgKGl0ZW0uY29tcGxldGUpIHtcbiAgICAgIGNvbXBsZXRlTGlzdC5hcHBlbmRDaGlsZChsaXN0SXRlbSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRvZG9MaXN0LmFwcGVuZENoaWxkKGxpc3RJdGVtKTtcbiAgICB9XG4gICAgaSA9IGkgKyAxO1xuICB9XG59XG5cbmZ1bmN0aW9uIGVkaXRUYXNrKHRvZG9MaXN0SXRlbXMsIGksIHByb2plY3RzKSB7XG4gIGNvbnN0IGFkZFRhc2tGcm9tID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgYWRkVGFza0Zyb20uaWQgPSBcImVkaXQtdGFzay1mb3JtXCI7XG4gIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoYWRkVGFza0Zyb20pO1xuXG4gIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZm9ybVwiKTtcbiAgYWRkVGFza0Zyb20uYXBwZW5kQ2hpbGQoZm9ybSk7XG5cbiAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gIHRpdGxlLnR5cGUgPSBcInRleHRib3hcIjtcbiAgdGl0bGUubmFtZSA9IFwidGl0bGVcIjtcbiAgdGl0bGUudmFsdWUgPSB0b2RvTGlzdEl0ZW1zW2ldLnRpdGxlO1xuICB0aXRsZS5wbGFjZWhvbGRlciA9IFwidGl0bGVcIjtcbiAgZm9ybS5hcHBlbmRDaGlsZCh0aXRsZSk7XG5cbiAgY29uc3QgZGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gIGRlc2NyaXB0aW9uLnR5cGUgPSBcInRleHRib3hcIjtcbiAgZGVzY3JpcHRpb24ubmFtZSA9IFwiZGVzY3JpcHRpb25cIjtcbiAgZGVzY3JpcHRpb24udmFsdWUgPSB0b2RvTGlzdEl0ZW1zW2ldLmRlc2NyaXB0aW9uO1xuICBkZXNjcmlwdGlvbi5wbGFjZWhvbGRlciA9IFwiZGVzY3JpcHRpb25cIjtcbiAgZm9ybS5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbik7XG5cbiAgY29uc3QgZHVlRGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgZHVlRGF0ZS50eXBlID0gXCJEYXRlXCI7XG4gIGR1ZURhdGUubmFtZSA9IFwiZHVlRGF0ZVwiO1xuICBkdWVEYXRlLnZhbHVlID0gdG9kb0xpc3RJdGVtc1tpXS5kdWVEYXRlO1xuICBmb3JtLmFwcGVuZENoaWxkKGR1ZURhdGUpO1xuXG4gIGNvbnN0IHByaW9yaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNlbGVjdFwiKTtcbiAgcHJpb3JpdHkuaWQgPSBcInByaW9yaXR5XCI7XG4gIHByaW9yaXR5Lm5hbWUgPSBcInByaW9yaXR5XCI7XG4gIGZvcm0uYXBwZW5kQ2hpbGQocHJpb3JpdHkpO1xuICBjb25zdCBvcHRpb25Mb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpO1xuICBvcHRpb25Mb3cudmFsdWUgPSBcIkxvd1wiO1xuICBvcHRpb25Mb3cuaW5uZXJUZXh0ID0gXCJMb3dcIjtcbiAgcHJpb3JpdHkuYXBwZW5kQ2hpbGQob3B0aW9uTG93KTtcbiAgY29uc3Qgb3B0aW9uTE1lZGl1bSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIik7XG4gIG9wdGlvbkxNZWRpdW0udmFsdWUgPSBcIk1lZGl1bVwiO1xuICBvcHRpb25MTWVkaXVtLmlubmVyVGV4dCA9IFwiTWVkaXVtXCI7XG4gIHByaW9yaXR5LmFwcGVuZENoaWxkKG9wdGlvbkxNZWRpdW0pO1xuICBjb25zdCBvcHRpb25IaWdoID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKTtcbiAgb3B0aW9uSGlnaC52YWx1ZSA9IFwiSGlnaFwiO1xuICBvcHRpb25IaWdoLmlubmVyVGV4dCA9IFwiSGlnaFwiO1xuICBwcmlvcml0eS5hcHBlbmRDaGlsZChvcHRpb25IaWdoKTtcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwcmlvcml0eVwiKS52YWx1ZSA9IHRvZG9MaXN0SXRlbXNbaV0ucHJpb3JpdHk7XG5cbiAgY29uc3QgcHJvamVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzZWxlY3RcIik7XG4gIHByb2plY3QuaWQgPSBcInByb2plY3RcIjtcbiAgcHJvamVjdC5uYW1lID0gXCJwcm9qZWN0XCI7XG4gIGZvcm0uYXBwZW5kQ2hpbGQocHJvamVjdCk7XG5cbiAgZm9yIChjb25zdCBwcm9qZWN0SXRlbSBvZiBwcm9qZWN0cykge1xuICAgIGlmIChwcm9qZWN0SXRlbS5wcm9qZWN0ID09IFwiQWxsXCIpIHtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3Qgb3B0aW9uUHJvamVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIik7XG4gICAgICBvcHRpb25Qcm9qZWN0LnZhbHVlID0gcHJvamVjdEl0ZW0ucHJvamVjdDtcbiAgICAgIG9wdGlvblByb2plY3QuaW5uZXJUZXh0ID0gcHJvamVjdEl0ZW0ucHJvamVjdDtcbiAgICAgIHByb2plY3QuYXBwZW5kQ2hpbGQob3B0aW9uUHJvamVjdCk7XG4gICAgfVxuICB9XG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicHJvamVjdFwiKS52YWx1ZSA9IHRvZG9MaXN0SXRlbXNbaV0ucHJvamVjdDtcblxuICBjb25zdCBzdWJtaXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gIHN1Ym1pdC50eXBlID0gXCJzdWJtaXRcIjtcbiAgZm9ybS5hcHBlbmRDaGlsZChzdWJtaXQpO1xuXG4gIGZvcm0uYWRkRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgY29uc3QgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoZm9ybSk7XG4gICAgY29uc3QgdGl0bGUgPSBmb3JtRGF0YS5nZXQoXCJ0aXRsZVwiKTtcbiAgICBjb25zdCBkZXNjcmlwdGlvbiA9IGZvcm1EYXRhLmdldChcImRlc2NyaXB0aW9uXCIpO1xuICAgIGNvbnN0IGR1ZURhdGUgPSBmb3JtRGF0YS5nZXQoXCJkdWVEYXRlXCIpO1xuICAgIGNvbnN0IHByaW9yaXR5ID0gZm9ybURhdGEuZ2V0KFwicHJpb3JpdHlcIik7XG4gICAgY29uc3QgcHJvamVjdCA9IGZvcm1EYXRhLmdldChcInByb2plY3RcIik7XG5cbiAgICB0b2RvTGlzdEl0ZW1zW2ldLnVwZGF0ZVRhc2soXG4gICAgICBpLFxuICAgICAgdG9kb0xpc3RJdGVtcyxcbiAgICAgIHRpdGxlLFxuICAgICAgZGVzY3JpcHRpb24sXG4gICAgICBkdWVEYXRlLFxuICAgICAgcHJpb3JpdHksXG4gICAgICBwcm9qZWN0XG4gICAgKTtcblxuICAgIGRvY3VtZW50LmJvZHkuaW5uZXJIVE1MID0gXCJcIjtcblxuICAgIHBhZ2VMb2FkKHRvZG9MaXN0SXRlbXMsIHByb2plY3RzKTtcbiAgfSk7XG5cbiAgY29uc3QgY2FuY2VsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICBjYW5jZWwudHlwZSA9IFwiYnV0dG9uXCI7XG4gIGNhbmNlbC52YWx1ZSA9IFwiQ2FuY2VsXCI7XG4gIGZvcm0uYXBwZW5kQ2hpbGQoY2FuY2VsKTtcblxuICBjYW5jZWwuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uIChldmVudCkge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICBkb2N1bWVudC5ib2R5LmlubmVySFRNTCA9IFwiXCI7XG5cbiAgICBwYWdlTG9hZCh0b2RvTGlzdEl0ZW1zLCBwcm9qZWN0cyk7XG4gIH0pO1xuXG4gIGNvbnN0IGRlbGV0ZUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgZGVsZXRlQnV0dG9uLnR5cGUgPSBcImJ1dHRvblwiO1xuICBkZWxldGVCdXR0b24udmFsdWUgPSBcIkRlbGV0ZVwiO1xuICBmb3JtLmFwcGVuZENoaWxkKGRlbGV0ZUJ1dHRvbik7XG5cbiAgZGVsZXRlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgdG9kb0xpc3RJdGVtc1tpXS5kZWxldGVUYXNrKGksIHRvZG9MaXN0SXRlbXMpO1xuXG4gICAgZG9jdW1lbnQuYm9keS5pbm5lckhUTUwgPSBcIlwiO1xuXG4gICAgcGFnZUxvYWQodG9kb0xpc3RJdGVtcywgcHJvamVjdHMpO1xuICB9KTtcbn1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==