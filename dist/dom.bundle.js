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
/* harmony export */   loadLocal: () => (/* binding */ loadLocal),
/* harmony export */   project: () => (/* binding */ project),
/* harmony export */   saveLocal: () => (/* binding */ saveLocal),
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

function saveLocal(todoListItems, projects) {
  if (storageAvailable("localStorage")) {
    localStorage.clear();
    populateStorage(todoListItems, projects);
  }
}

function loadLocal(todoListItems, projects) {
  if (storageAvailable("localStorage")) {
    // Load projects
    let i = 0;
    let check;
    do {
      const localProject = localStorage.getItem(i + " Project");
      const newProject = new project(localProject);
      projects.push(newProject);
      i = i + 1;
      check = localStorage.getItem(i + " Project");
    } while (check != null);

    // Load todos
    i = 0;
    do {
      const title = localStorage.getItem(i + " Title");
      const description = localStorage.getItem(i + " Description");
      const dueDate = localStorage.getItem(i + " dueDate");
      const priority = localStorage.getItem(i + " Priority");
      const project = localStorage.getItem(i + " TaskProject");
      const complete = localStorage.getItem(i + " Complete")

      const item = new todoList(title, description, dueDate, priority, project);

      todoListItems.push(item);

      if (complete == "true") {
        todoListItems[i].completeTask(i, todoListItems);
      }

      i = i + 1;
      check = localStorage.getItem(i + " Title");
    } while (check != null);
  }
}

function storageAvailable(type) {
  let storage;
  try {
    storage = window[type];
    const x = "__storage_test__";
    storage.setItem(x, x);
    storage.removeItem(x);
    return true;
  } catch (e) {
    return (
      e instanceof DOMException &&
      // everything except Firefox
      (e.code === 22 ||
        // Firefox
        e.code === 1014 ||
        // test name field too, because code might not be present
        // everything except Firefox
        e.name === "QuotaExceededError" ||
        // Firefox
        e.name === "NS_ERROR_DOM_QUOTA_REACHED") &&
      // acknowledge QuotaExceededError only if there's something already stored
      storage &&
      storage.length !== 0
    );
  }
}

function populateStorage(todoListItems, projects) {
  // Projects
  let i = 0;
  for (const projectItems of projects) {
    if (projectItems.project != "All" && projectItems.project != "Default") {
      localStorage.setItem(i + " Project", projectItems.project);
      i = i + 1;
    }
  }

  // Todos
  i = 0;
  for (const todoItems of todoListItems) {
    localStorage.setItem(i + " Title", todoItems.title);
    localStorage.setItem(i + " Description", todoItems.description);
    localStorage.setItem(i + " dueDate", todoItems.dueDate);
    localStorage.setItem(i + " Priority", todoItems.priority);
    localStorage.setItem(i + " TaskProject", todoItems.project);
    localStorage.setItem(i + " Complete", todoItems.complete);
    i = i + 1;
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
  project.id = "project-drop-down";
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
      _todo__WEBPACK_IMPORTED_MODULE_0__.saveLocal(todoListItems, projects);
      resetPage(todoListItems, projects);
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

  project.addEventListener("change", () => {
    console.log("testing")
    resetPage(todoListItems, projects);
    buildTodoList(todoListItems, todoList, completeList, projects);
  });

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
    _todo__WEBPACK_IMPORTED_MODULE_0__.saveLocal(todoListItems, projects);
    resetPage(todoListItems, projects);
  });

  const cancel = document.createElement("input");
  cancel.type = "button";
  cancel.value = "Cancel";
  form.appendChild(cancel);

  cancel.addEventListener("click", function (event) {
    event.preventDefault();

    resetPage(todoListItems, projects);
  });
}

function buildTodoList(todoListItems, todoList, completeList, projects) {
  const projectDropDown = document.getElementById("project-drop-down");

  const createListItem = (item, i) => {
    const listItem = document.createElement("li");

    const complete = document.createElement("input");
    complete.type = "checkbox";
    complete.checked = item.complete;
    listItem.appendChild(complete);
    complete.addEventListener("change", function () {
      if (todoListItems[i].complete == false) {
        todoListItems[i].completeTask(i, todoListItems);
        _todo__WEBPACK_IMPORTED_MODULE_0__.saveLocal(todoListItems, projects);
        resetPage(todoListItems, projects);
      } else {
        todoListItems[i].uncompleteTask(i, todoListItems);
        _todo__WEBPACK_IMPORTED_MODULE_0__.saveLocal(todoListItems, projects);
        resetPage(todoListItems, projects);
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
    if ((projectDropDown.value = "All")) {
      const listItem = createListItem(item, i);

      if (item.complete) {
        completeList.appendChild(listItem);
      } else {
        todoList.appendChild(listItem);
      }
      i = i + 1;
    } else {
      if (item.project == projectDropDown.value) {
        const listItem = createListItem(item, i);

        if (item.complete) {
          completeList.appendChild(listItem);
        } else {
          todoList.appendChild(listItem);
        }
        i = i + 1;
      }
    }
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
  submit.value = "Update";
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
    _todo__WEBPACK_IMPORTED_MODULE_0__.saveLocal(todoListItems, projects);
    resetPage(todoListItems, projects);
  });

  const cancel = document.createElement("input");
  cancel.type = "button";
  cancel.value = "Cancel";
  form.appendChild(cancel);

  cancel.addEventListener("click", function (event) {
    event.preventDefault();

    resetPage(todoListItems, projects);
  });

  const deleteButton = document.createElement("input");
  deleteButton.type = "button";
  deleteButton.value = "Delete";
  form.appendChild(deleteButton);

  deleteButton.addEventListener("click", function (event) {
    event.preventDefault();

    todoListItems[i].deleteTask(i, todoListItems);
    _todo__WEBPACK_IMPORTED_MODULE_0__.saveLocal(todoListItems, projects);
    resetPage(todoListItems, projects);
  });
}

function resetPage(todoListItems, projects) {
  const todoList = document.getElementById("todo-list");
  const completeList = document.getElementById("complete-list");

  todoList.innerHTML = "";
  completeList.innerHTML = "";

  const addModals = document.getElementById("add-task-form");
  if (addModals != null) {
    addModals.remove();
  }
  const editModals = document.getElementById("edit-task-form");
  if (editModals != null) {
    editModals.remove();
  }

  buildTodoList(todoListItems, todoList, completeList, projects);
}

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUVBO0FBQ0E7O0FBRUE7QUFDQSxHQUFHO0FBQ0g7O0FBRU87QUFDUDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSw0Q0FBYztBQUN0QjtBQUNBLFFBQVE7QUFDUjtBQUNBLFFBQVEsNENBQWM7QUFDdEI7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBOztBQUVBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksNENBQWM7QUFDbEI7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxJQUFJLDRDQUFjO0FBQ2xCO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYnBhY2stZGVtby8uL3NyYy90b2RvLmpzIiwid2VicGFjazovL3dlYnBhY2stZGVtby93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly93ZWJwYWNrLWRlbW8vd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3dlYnBhY2stZGVtby93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3dlYnBhY2stZGVtby93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3dlYnBhY2stZGVtby8uL3NyYy9kb20uanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gQ3JlYXRpbmcgYSBuZXcgdG9kb1xuZXhwb3J0IGNsYXNzIHRvZG9MaXN0IHtcbiAgY29uc3RydWN0b3IodGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSwgcHJvamVjdCkge1xuICAgIHRoaXMudGl0bGUgPSB0aXRsZTtcbiAgICB0aGlzLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XG4gICAgdGhpcy5kdWVEYXRlID0gZHVlRGF0ZTtcbiAgICB0aGlzLnByaW9yaXR5ID0gcHJpb3JpdHk7XG4gICAgdGhpcy5wcm9qZWN0ID0gcHJvamVjdDtcbiAgICB0aGlzLmNvbXBsZXRlID0gZmFsc2U7XG4gIH1cblxuICBjb21wbGV0ZVRhc2soaW5kZXgsIHRvZG9MaXN0SXRlbXMpIHtcbiAgICB0b2RvTGlzdEl0ZW1zW2luZGV4XS5jb21wbGV0ZSA9IHRydWU7XG4gIH1cblxuICB1bmNvbXBsZXRlVGFzayhpbmRleCwgdG9kb0xpc3RJdGVtcykge1xuICAgIHRvZG9MaXN0SXRlbXNbaW5kZXhdLmNvbXBsZXRlID0gZmFsc2U7XG4gIH1cblxuICB1cGRhdGVUYXNrKFxuICAgIGluZGV4LFxuICAgIHRvZG9MaXN0SXRlbXMsXG4gICAgdGl0bGUsXG4gICAgZGVzY3JpcHRpb24sXG4gICAgZHVlRGF0ZSxcbiAgICBwcmlvcml0eSxcbiAgICBwcm9qZWN0XG4gICkge1xuICAgIHRvZG9MaXN0SXRlbXNbaW5kZXhdLnRpdGxlID0gdGl0bGU7XG4gICAgdG9kb0xpc3RJdGVtc1tpbmRleF0uZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcbiAgICB0b2RvTGlzdEl0ZW1zW2luZGV4XS5kdWVEYXRlID0gZHVlRGF0ZTtcbiAgICB0b2RvTGlzdEl0ZW1zW2luZGV4XS5wcmlvcml0eSA9IHByaW9yaXR5O1xuICAgIHRvZG9MaXN0SXRlbXNbaW5kZXhdLnByb2plY3QgPSBwcm9qZWN0O1xuICB9XG5cbiAgZGVsZXRlVGFzayhpbmRleCwgdG9kb0xpc3RJdGVtcykge1xuICAgIHRvZG9MaXN0SXRlbXMuc3BsaWNlKGluZGV4LCAxKTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgcHJvamVjdCB7XG4gIGNvbnN0cnVjdG9yKHByb2plY3QpIHtcbiAgICB0aGlzLnByb2plY3QgPSBwcm9qZWN0O1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzYXZlTG9jYWwodG9kb0xpc3RJdGVtcywgcHJvamVjdHMpIHtcbiAgaWYgKHN0b3JhZ2VBdmFpbGFibGUoXCJsb2NhbFN0b3JhZ2VcIikpIHtcbiAgICBsb2NhbFN0b3JhZ2UuY2xlYXIoKTtcbiAgICBwb3B1bGF0ZVN0b3JhZ2UodG9kb0xpc3RJdGVtcywgcHJvamVjdHMpO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBsb2FkTG9jYWwodG9kb0xpc3RJdGVtcywgcHJvamVjdHMpIHtcbiAgaWYgKHN0b3JhZ2VBdmFpbGFibGUoXCJsb2NhbFN0b3JhZ2VcIikpIHtcbiAgICAvLyBMb2FkIHByb2plY3RzXG4gICAgbGV0IGkgPSAwO1xuICAgIGxldCBjaGVjaztcbiAgICBkbyB7XG4gICAgICBjb25zdCBsb2NhbFByb2plY3QgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShpICsgXCIgUHJvamVjdFwiKTtcbiAgICAgIGNvbnN0IG5ld1Byb2plY3QgPSBuZXcgcHJvamVjdChsb2NhbFByb2plY3QpO1xuICAgICAgcHJvamVjdHMucHVzaChuZXdQcm9qZWN0KTtcbiAgICAgIGkgPSBpICsgMTtcbiAgICAgIGNoZWNrID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oaSArIFwiIFByb2plY3RcIik7XG4gICAgfSB3aGlsZSAoY2hlY2sgIT0gbnVsbCk7XG5cbiAgICAvLyBMb2FkIHRvZG9zXG4gICAgaSA9IDA7XG4gICAgZG8ge1xuICAgICAgY29uc3QgdGl0bGUgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShpICsgXCIgVGl0bGVcIik7XG4gICAgICBjb25zdCBkZXNjcmlwdGlvbiA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKGkgKyBcIiBEZXNjcmlwdGlvblwiKTtcbiAgICAgIGNvbnN0IGR1ZURhdGUgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShpICsgXCIgZHVlRGF0ZVwiKTtcbiAgICAgIGNvbnN0IHByaW9yaXR5ID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oaSArIFwiIFByaW9yaXR5XCIpO1xuICAgICAgY29uc3QgcHJvamVjdCA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKGkgKyBcIiBUYXNrUHJvamVjdFwiKTtcbiAgICAgIGNvbnN0IGNvbXBsZXRlID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oaSArIFwiIENvbXBsZXRlXCIpXG5cbiAgICAgIGNvbnN0IGl0ZW0gPSBuZXcgdG9kb0xpc3QodGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSwgcHJvamVjdCk7XG5cbiAgICAgIHRvZG9MaXN0SXRlbXMucHVzaChpdGVtKTtcblxuICAgICAgaWYgKGNvbXBsZXRlID09IFwidHJ1ZVwiKSB7XG4gICAgICAgIHRvZG9MaXN0SXRlbXNbaV0uY29tcGxldGVUYXNrKGksIHRvZG9MaXN0SXRlbXMpO1xuICAgICAgfVxuXG4gICAgICBpID0gaSArIDE7XG4gICAgICBjaGVjayA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKGkgKyBcIiBUaXRsZVwiKTtcbiAgICB9IHdoaWxlIChjaGVjayAhPSBudWxsKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBzdG9yYWdlQXZhaWxhYmxlKHR5cGUpIHtcbiAgbGV0IHN0b3JhZ2U7XG4gIHRyeSB7XG4gICAgc3RvcmFnZSA9IHdpbmRvd1t0eXBlXTtcbiAgICBjb25zdCB4ID0gXCJfX3N0b3JhZ2VfdGVzdF9fXCI7XG4gICAgc3RvcmFnZS5zZXRJdGVtKHgsIHgpO1xuICAgIHN0b3JhZ2UucmVtb3ZlSXRlbSh4KTtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfSBjYXRjaCAoZSkge1xuICAgIHJldHVybiAoXG4gICAgICBlIGluc3RhbmNlb2YgRE9NRXhjZXB0aW9uICYmXG4gICAgICAvLyBldmVyeXRoaW5nIGV4Y2VwdCBGaXJlZm94XG4gICAgICAoZS5jb2RlID09PSAyMiB8fFxuICAgICAgICAvLyBGaXJlZm94XG4gICAgICAgIGUuY29kZSA9PT0gMTAxNCB8fFxuICAgICAgICAvLyB0ZXN0IG5hbWUgZmllbGQgdG9vLCBiZWNhdXNlIGNvZGUgbWlnaHQgbm90IGJlIHByZXNlbnRcbiAgICAgICAgLy8gZXZlcnl0aGluZyBleGNlcHQgRmlyZWZveFxuICAgICAgICBlLm5hbWUgPT09IFwiUXVvdGFFeGNlZWRlZEVycm9yXCIgfHxcbiAgICAgICAgLy8gRmlyZWZveFxuICAgICAgICBlLm5hbWUgPT09IFwiTlNfRVJST1JfRE9NX1FVT1RBX1JFQUNIRURcIikgJiZcbiAgICAgIC8vIGFja25vd2xlZGdlIFF1b3RhRXhjZWVkZWRFcnJvciBvbmx5IGlmIHRoZXJlJ3Mgc29tZXRoaW5nIGFscmVhZHkgc3RvcmVkXG4gICAgICBzdG9yYWdlICYmXG4gICAgICBzdG9yYWdlLmxlbmd0aCAhPT0gMFxuICAgICk7XG4gIH1cbn1cblxuZnVuY3Rpb24gcG9wdWxhdGVTdG9yYWdlKHRvZG9MaXN0SXRlbXMsIHByb2plY3RzKSB7XG4gIC8vIFByb2plY3RzXG4gIGxldCBpID0gMDtcbiAgZm9yIChjb25zdCBwcm9qZWN0SXRlbXMgb2YgcHJvamVjdHMpIHtcbiAgICBpZiAocHJvamVjdEl0ZW1zLnByb2plY3QgIT0gXCJBbGxcIiAmJiBwcm9qZWN0SXRlbXMucHJvamVjdCAhPSBcIkRlZmF1bHRcIikge1xuICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oaSArIFwiIFByb2plY3RcIiwgcHJvamVjdEl0ZW1zLnByb2plY3QpO1xuICAgICAgaSA9IGkgKyAxO1xuICAgIH1cbiAgfVxuXG4gIC8vIFRvZG9zXG4gIGkgPSAwO1xuICBmb3IgKGNvbnN0IHRvZG9JdGVtcyBvZiB0b2RvTGlzdEl0ZW1zKSB7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oaSArIFwiIFRpdGxlXCIsIHRvZG9JdGVtcy50aXRsZSk7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oaSArIFwiIERlc2NyaXB0aW9uXCIsIHRvZG9JdGVtcy5kZXNjcmlwdGlvbik7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oaSArIFwiIGR1ZURhdGVcIiwgdG9kb0l0ZW1zLmR1ZURhdGUpO1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKGkgKyBcIiBQcmlvcml0eVwiLCB0b2RvSXRlbXMucHJpb3JpdHkpO1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKGkgKyBcIiBUYXNrUHJvamVjdFwiLCB0b2RvSXRlbXMucHJvamVjdCk7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oaSArIFwiIENvbXBsZXRlXCIsIHRvZG9JdGVtcy5jb21wbGV0ZSk7XG4gICAgaSA9IGkgKyAxO1xuICB9XG59XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCAqIGFzIHRvZG8gZnJvbSBcIi4vdG9kb1wiO1xuXG5leHBvcnQgZnVuY3Rpb24gcGFnZUxvYWQodG9kb0xpc3RJdGVtcywgcHJvamVjdHMpIHtcbiAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnRlbnQuaWQgPSBcImNvbnRlbnRcIjtcbiAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChjb250ZW50KTtcblxuICAvLyBTdHJ1Y3R1cmUgb2YgdGhlIHBhZ2VcbiAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImhlYWRlclwiKTtcbiAgY29udGVudC5hcHBlbmRDaGlsZChoZWFkZXIpO1xuICBjb25zdCBtYWluID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm1haW5cIik7XG4gIGNvbnRlbnQuYXBwZW5kQ2hpbGQobWFpbik7XG4gIGNvbnN0IGZvb3RlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJmb290ZXJcIik7XG4gIGNvbnRlbnQuYXBwZW5kQ2hpbGQoZm9vdGVyKTtcblxuICAvLyBIZWFkZXIgZWxlbWVudFxuICBjb25zdCBoZWFkZXJUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xuICBoZWFkZXJUZXh0LmlubmVyVGV4dCA9IFwiTXkgVG9kbyBMaXN0XCI7XG4gIGhlYWRlci5hcHBlbmRDaGlsZChoZWFkZXJUZXh0KTtcblxuICBjb25zdCBoZWFkZXJCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICBoZWFkZXJCdXR0b24uaWQgPSBcImFkZC10YXNrLWJ1dHRvblwiO1xuICBoZWFkZXJCdXR0b24uaW5uZXJUZXh0ID0gXCJBZGQgVGFza1wiO1xuICBoZWFkZXIuYXBwZW5kQ2hpbGQoaGVhZGVyQnV0dG9uKTtcbiAgaGVhZGVyQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgYWRkVGFzayh0b2RvTGlzdEl0ZW1zLCBwcm9qZWN0cyk7XG4gIH0pO1xuXG4gIGNvbnN0IHByb2plY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2VsZWN0XCIpO1xuICBwcm9qZWN0Lm5hbWUgPSBcInByb2plY3RcIjtcbiAgcHJvamVjdC5pZCA9IFwicHJvamVjdC1kcm9wLWRvd25cIjtcbiAgaGVhZGVyLmFwcGVuZENoaWxkKHByb2plY3QpO1xuICBmb3IgKGNvbnN0IHByb2plY3RJdGVtIG9mIHByb2plY3RzKSB7XG4gICAgY29uc3Qgb3B0aW9uUHJvamVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIik7XG4gICAgb3B0aW9uUHJvamVjdC52YWx1ZSA9IHByb2plY3RJdGVtLnByb2plY3Q7XG4gICAgb3B0aW9uUHJvamVjdC5pbm5lclRleHQgPSBwcm9qZWN0SXRlbS5wcm9qZWN0O1xuICAgIHByb2plY3QuYXBwZW5kQ2hpbGQob3B0aW9uUHJvamVjdCk7XG4gIH1cbiAgXG5cbiAgY29uc3QgYWRkUHJvamVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgYWRkUHJvamVjdC5wbGFjZWhvbGRlciA9IFwiTmV3IFByb2plY3RcIjtcbiAgaGVhZGVyLmFwcGVuZENoaWxkKGFkZFByb2plY3QpO1xuICBhZGRQcm9qZWN0LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIChldmVudCkgPT4ge1xuICAgIGNvbnN0IGtleSA9IGV2ZW50LmtleTtcbiAgICBpZiAoa2V5ID09IFwiRW50ZXJcIikge1xuICAgICAgY29uc3QgbmV3UHJvamVjdCA9IG5ldyB0b2RvLnByb2plY3QoYWRkUHJvamVjdC52YWx1ZSk7XG4gICAgICBwcm9qZWN0cy5wdXNoKG5ld1Byb2plY3QpO1xuICAgICAgdG9kby5zYXZlTG9jYWwodG9kb0xpc3RJdGVtcywgcHJvamVjdHMpO1xuICAgICAgcmVzZXRQYWdlKHRvZG9MaXN0SXRlbXMsIHByb2plY3RzKTtcbiAgICB9XG4gIH0pO1xuXG4gIC8vIE1haW4gZWxlbWVudFxuICBjb25zdCB0b2RvSXRlbXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICB0b2RvSXRlbXMuaW5uZXJUZXh0ID0gXCJJdGVtcyBUb2RvXCI7XG4gIG1haW4uYXBwZW5kQ2hpbGQodG9kb0l0ZW1zKTtcblxuICBjb25zdCB0b2RvTGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ1bFwiKTtcbiAgdG9kb0xpc3QuaWQgPSBcInRvZG8tbGlzdFwiO1xuICB0b2RvSXRlbXMuYXBwZW5kQ2hpbGQodG9kb0xpc3QpO1xuXG4gIGNvbnN0IGNvbXBsZXRlSXRlbXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb21wbGV0ZUl0ZW1zLmlubmVyVGV4dCA9IFwiSXRlbXMgQ29tcGxldGVkXCI7XG4gIG1haW4uYXBwZW5kQ2hpbGQoY29tcGxldGVJdGVtcyk7XG5cbiAgY29uc3QgY29tcGxldGVMaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInVsXCIpO1xuICBjb21wbGV0ZUxpc3QuaWQgPSBcImNvbXBsZXRlLWxpc3RcIjtcbiAgY29tcGxldGVJdGVtcy5hcHBlbmRDaGlsZChjb21wbGV0ZUxpc3QpO1xuXG4gIGJ1aWxkVG9kb0xpc3QodG9kb0xpc3RJdGVtcywgdG9kb0xpc3QsIGNvbXBsZXRlTGlzdCwgcHJvamVjdHMpO1xuXG4gIHByb2plY3QuYWRkRXZlbnRMaXN0ZW5lcihcImNoYW5nZVwiLCAoKSA9PiB7XG4gICAgY29uc29sZS5sb2coXCJ0ZXN0aW5nXCIpXG4gICAgcmVzZXRQYWdlKHRvZG9MaXN0SXRlbXMsIHByb2plY3RzKTtcbiAgICBidWlsZFRvZG9MaXN0KHRvZG9MaXN0SXRlbXMsIHRvZG9MaXN0LCBjb21wbGV0ZUxpc3QsIHByb2plY3RzKTtcbiAgfSk7XG5cbiAgLy8gRm9vdGVyIGVsZW1lbnRcbiAgY29uc3QgZm9vdGVyVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGZvb3RlclRleHQuaW5uZXJUZXh0ID0gXCJGb290ZXIgdGV4dCBnb2VzIGhlcmVcIjtcbiAgZm9vdGVyLmFwcGVuZENoaWxkKGZvb3RlclRleHQpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYWRkVGFzayh0b2RvTGlzdEl0ZW1zLCBwcm9qZWN0cykge1xuICBjb25zdCBhZGRUYXNrRnJvbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGFkZFRhc2tGcm9tLmlkID0gXCJhZGQtdGFzay1mb3JtXCI7XG4gIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoYWRkVGFza0Zyb20pO1xuXG4gIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZm9ybVwiKTtcbiAgYWRkVGFza0Zyb20uYXBwZW5kQ2hpbGQoZm9ybSk7XG5cbiAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gIHRpdGxlLnR5cGUgPSBcInRleHRib3hcIjtcbiAgdGl0bGUubmFtZSA9IFwidGl0bGVcIjtcbiAgdGl0bGUucGxhY2Vob2xkZXIgPSBcInRpdGxlXCI7XG4gIGZvcm0uYXBwZW5kQ2hpbGQodGl0bGUpO1xuXG4gIGNvbnN0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICBkZXNjcmlwdGlvbi50eXBlID0gXCJ0ZXh0Ym94XCI7XG4gIGRlc2NyaXB0aW9uLm5hbWUgPSBcImRlc2NyaXB0aW9uXCI7XG4gIGRlc2NyaXB0aW9uLnBsYWNlaG9sZGVyID0gXCJkZXNjcmlwdGlvblwiO1xuICBmb3JtLmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uKTtcblxuICBjb25zdCBkdWVEYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICBkdWVEYXRlLnR5cGUgPSBcIkRhdGVcIjtcbiAgZHVlRGF0ZS5uYW1lID0gXCJkdWVEYXRlXCI7XG4gIGZvcm0uYXBwZW5kQ2hpbGQoZHVlRGF0ZSk7XG5cbiAgY29uc3QgcHJpb3JpdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2VsZWN0XCIpO1xuICBwcmlvcml0eS5uYW1lID0gXCJwcmlvcml0eVwiO1xuICBmb3JtLmFwcGVuZENoaWxkKHByaW9yaXR5KTtcbiAgY29uc3Qgb3B0aW9uTG93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKTtcbiAgb3B0aW9uTG93LnZhbHVlID0gXCJMb3dcIjtcbiAgb3B0aW9uTG93LmlubmVyVGV4dCA9IFwiTG93XCI7XG4gIHByaW9yaXR5LmFwcGVuZENoaWxkKG9wdGlvbkxvdyk7XG4gIGNvbnN0IG9wdGlvbkxNZWRpdW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpO1xuICBvcHRpb25MTWVkaXVtLnZhbHVlID0gXCJNZWRpdW1cIjtcbiAgb3B0aW9uTE1lZGl1bS5pbm5lclRleHQgPSBcIk1lZGl1bVwiO1xuICBwcmlvcml0eS5hcHBlbmRDaGlsZChvcHRpb25MTWVkaXVtKTtcbiAgY29uc3Qgb3B0aW9uSGlnaCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIik7XG4gIG9wdGlvbkhpZ2gudmFsdWUgPSBcIkhpZ2hcIjtcbiAgb3B0aW9uSGlnaC5pbm5lclRleHQgPSBcIkhpZ2hcIjtcbiAgcHJpb3JpdHkuYXBwZW5kQ2hpbGQob3B0aW9uSGlnaCk7XG5cbiAgY29uc3QgcHJvamVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzZWxlY3RcIik7XG4gIHByb2plY3QubmFtZSA9IFwicHJvamVjdFwiO1xuICBmb3JtLmFwcGVuZENoaWxkKHByb2plY3QpO1xuXG4gIGZvciAoY29uc3QgcHJvamVjdEl0ZW0gb2YgcHJvamVjdHMpIHtcbiAgICBpZiAocHJvamVjdEl0ZW0ucHJvamVjdCA9PSBcIkFsbFwiKSB7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IG9wdGlvblByb2plY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpO1xuICAgICAgb3B0aW9uUHJvamVjdC52YWx1ZSA9IHByb2plY3RJdGVtLnByb2plY3Q7XG4gICAgICBvcHRpb25Qcm9qZWN0LmlubmVyVGV4dCA9IHByb2plY3RJdGVtLnByb2plY3Q7XG4gICAgICBwcm9qZWN0LmFwcGVuZENoaWxkKG9wdGlvblByb2plY3QpO1xuICAgIH1cbiAgfVxuXG4gIGNvbnN0IHN1Ym1pdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgc3VibWl0LnR5cGUgPSBcInN1Ym1pdFwiO1xuICBmb3JtLmFwcGVuZENoaWxkKHN1Ym1pdCk7XG5cbiAgZm9ybS5hZGRFdmVudExpc3RlbmVyKFwic3VibWl0XCIsIGZ1bmN0aW9uIChldmVudCkge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICBjb25zdCBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YShmb3JtKTtcbiAgICBjb25zdCB0aXRsZSA9IGZvcm1EYXRhLmdldChcInRpdGxlXCIpO1xuICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gZm9ybURhdGEuZ2V0KFwiZGVzY3JpcHRpb25cIik7XG4gICAgY29uc3QgZHVlRGF0ZSA9IGZvcm1EYXRhLmdldChcImR1ZURhdGVcIik7XG4gICAgY29uc3QgcHJpb3JpdHkgPSBmb3JtRGF0YS5nZXQoXCJwcmlvcml0eVwiKTtcbiAgICBjb25zdCBwcm9qZWN0ID0gZm9ybURhdGEuZ2V0KFwicHJvamVjdFwiKTtcblxuICAgIGNvbnN0IGl0ZW0gPSBuZXcgdG9kby50b2RvTGlzdChcbiAgICAgIHRpdGxlLFxuICAgICAgZGVzY3JpcHRpb24sXG4gICAgICBkdWVEYXRlLFxuICAgICAgcHJpb3JpdHksXG4gICAgICBwcm9qZWN0XG4gICAgKTtcblxuICAgIHRvZG9MaXN0SXRlbXMucHVzaChpdGVtKTtcbiAgICB0b2RvLnNhdmVMb2NhbCh0b2RvTGlzdEl0ZW1zLCBwcm9qZWN0cyk7XG4gICAgcmVzZXRQYWdlKHRvZG9MaXN0SXRlbXMsIHByb2plY3RzKTtcbiAgfSk7XG5cbiAgY29uc3QgY2FuY2VsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICBjYW5jZWwudHlwZSA9IFwiYnV0dG9uXCI7XG4gIGNhbmNlbC52YWx1ZSA9IFwiQ2FuY2VsXCI7XG4gIGZvcm0uYXBwZW5kQ2hpbGQoY2FuY2VsKTtcblxuICBjYW5jZWwuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uIChldmVudCkge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICByZXNldFBhZ2UodG9kb0xpc3RJdGVtcywgcHJvamVjdHMpO1xuICB9KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGJ1aWxkVG9kb0xpc3QodG9kb0xpc3RJdGVtcywgdG9kb0xpc3QsIGNvbXBsZXRlTGlzdCwgcHJvamVjdHMpIHtcbiAgY29uc3QgcHJvamVjdERyb3BEb3duID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwcm9qZWN0LWRyb3AtZG93blwiKTtcblxuICBjb25zdCBjcmVhdGVMaXN0SXRlbSA9IChpdGVtLCBpKSA9PiB7XG4gICAgY29uc3QgbGlzdEl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XG5cbiAgICBjb25zdCBjb21wbGV0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICBjb21wbGV0ZS50eXBlID0gXCJjaGVja2JveFwiO1xuICAgIGNvbXBsZXRlLmNoZWNrZWQgPSBpdGVtLmNvbXBsZXRlO1xuICAgIGxpc3RJdGVtLmFwcGVuZENoaWxkKGNvbXBsZXRlKTtcbiAgICBjb21wbGV0ZS5hZGRFdmVudExpc3RlbmVyKFwiY2hhbmdlXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGlmICh0b2RvTGlzdEl0ZW1zW2ldLmNvbXBsZXRlID09IGZhbHNlKSB7XG4gICAgICAgIHRvZG9MaXN0SXRlbXNbaV0uY29tcGxldGVUYXNrKGksIHRvZG9MaXN0SXRlbXMpO1xuICAgICAgICB0b2RvLnNhdmVMb2NhbCh0b2RvTGlzdEl0ZW1zLCBwcm9qZWN0cyk7XG4gICAgICAgIHJlc2V0UGFnZSh0b2RvTGlzdEl0ZW1zLCBwcm9qZWN0cyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0b2RvTGlzdEl0ZW1zW2ldLnVuY29tcGxldGVUYXNrKGksIHRvZG9MaXN0SXRlbXMpO1xuICAgICAgICB0b2RvLnNhdmVMb2NhbCh0b2RvTGlzdEl0ZW1zLCBwcm9qZWN0cyk7XG4gICAgICAgIHJlc2V0UGFnZSh0b2RvTGlzdEl0ZW1zLCBwcm9qZWN0cyk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgdGl0bGUuaW5uZXJUZXh0ID0gaXRlbS50aXRsZTtcbiAgICBsaXN0SXRlbS5hcHBlbmRDaGlsZCh0aXRsZSk7XG5cbiAgICBjb25zdCBkdWVEYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBkdWVEYXRlLmlubmVyVGV4dCA9IGl0ZW0uZHVlRGF0ZTtcbiAgICBsaXN0SXRlbS5hcHBlbmRDaGlsZChkdWVEYXRlKTtcblxuICAgIGNvbnN0IHByb2plY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHByb2plY3QuaW5uZXJUZXh0ID0gaXRlbS5wcm9qZWN0O1xuICAgIGxpc3RJdGVtLmFwcGVuZENoaWxkKHByb2plY3QpO1xuXG4gICAgbGlzdEl0ZW0uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgIGVkaXRUYXNrKHRvZG9MaXN0SXRlbXMsIGksIHByb2plY3RzKTtcbiAgICB9KTtcblxuICAgIHJldHVybiBsaXN0SXRlbTtcbiAgfTtcblxuICBsZXQgaSA9IDA7XG4gIGZvciAoY29uc3QgaXRlbSBvZiB0b2RvTGlzdEl0ZW1zKSB7XG4gICAgaWYgKChwcm9qZWN0RHJvcERvd24udmFsdWUgPSBcIkFsbFwiKSkge1xuICAgICAgY29uc3QgbGlzdEl0ZW0gPSBjcmVhdGVMaXN0SXRlbShpdGVtLCBpKTtcblxuICAgICAgaWYgKGl0ZW0uY29tcGxldGUpIHtcbiAgICAgICAgY29tcGxldGVMaXN0LmFwcGVuZENoaWxkKGxpc3RJdGVtKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRvZG9MaXN0LmFwcGVuZENoaWxkKGxpc3RJdGVtKTtcbiAgICAgIH1cbiAgICAgIGkgPSBpICsgMTtcbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKGl0ZW0ucHJvamVjdCA9PSBwcm9qZWN0RHJvcERvd24udmFsdWUpIHtcbiAgICAgICAgY29uc3QgbGlzdEl0ZW0gPSBjcmVhdGVMaXN0SXRlbShpdGVtLCBpKTtcblxuICAgICAgICBpZiAoaXRlbS5jb21wbGV0ZSkge1xuICAgICAgICAgIGNvbXBsZXRlTGlzdC5hcHBlbmRDaGlsZChsaXN0SXRlbSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdG9kb0xpc3QuYXBwZW5kQ2hpbGQobGlzdEl0ZW0pO1xuICAgICAgICB9XG4gICAgICAgIGkgPSBpICsgMTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gZWRpdFRhc2sodG9kb0xpc3RJdGVtcywgaSwgcHJvamVjdHMpIHtcbiAgY29uc3QgYWRkVGFza0Zyb20gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBhZGRUYXNrRnJvbS5pZCA9IFwiZWRpdC10YXNrLWZvcm1cIjtcbiAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChhZGRUYXNrRnJvbSk7XG5cbiAgY29uc3QgZm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJmb3JtXCIpO1xuICBhZGRUYXNrRnJvbS5hcHBlbmRDaGlsZChmb3JtKTtcblxuICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgdGl0bGUudHlwZSA9IFwidGV4dGJveFwiO1xuICB0aXRsZS5uYW1lID0gXCJ0aXRsZVwiO1xuICB0aXRsZS52YWx1ZSA9IHRvZG9MaXN0SXRlbXNbaV0udGl0bGU7XG4gIHRpdGxlLnBsYWNlaG9sZGVyID0gXCJ0aXRsZVwiO1xuICBmb3JtLmFwcGVuZENoaWxkKHRpdGxlKTtcblxuICBjb25zdCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgZGVzY3JpcHRpb24udHlwZSA9IFwidGV4dGJveFwiO1xuICBkZXNjcmlwdGlvbi5uYW1lID0gXCJkZXNjcmlwdGlvblwiO1xuICBkZXNjcmlwdGlvbi52YWx1ZSA9IHRvZG9MaXN0SXRlbXNbaV0uZGVzY3JpcHRpb247XG4gIGRlc2NyaXB0aW9uLnBsYWNlaG9sZGVyID0gXCJkZXNjcmlwdGlvblwiO1xuICBmb3JtLmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uKTtcblxuICBjb25zdCBkdWVEYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICBkdWVEYXRlLnR5cGUgPSBcIkRhdGVcIjtcbiAgZHVlRGF0ZS5uYW1lID0gXCJkdWVEYXRlXCI7XG4gIGR1ZURhdGUudmFsdWUgPSB0b2RvTGlzdEl0ZW1zW2ldLmR1ZURhdGU7XG4gIGZvcm0uYXBwZW5kQ2hpbGQoZHVlRGF0ZSk7XG5cbiAgY29uc3QgcHJpb3JpdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2VsZWN0XCIpO1xuICBwcmlvcml0eS5pZCA9IFwicHJpb3JpdHlcIjtcbiAgcHJpb3JpdHkubmFtZSA9IFwicHJpb3JpdHlcIjtcbiAgZm9ybS5hcHBlbmRDaGlsZChwcmlvcml0eSk7XG4gIGNvbnN0IG9wdGlvbkxvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIik7XG4gIG9wdGlvbkxvdy52YWx1ZSA9IFwiTG93XCI7XG4gIG9wdGlvbkxvdy5pbm5lclRleHQgPSBcIkxvd1wiO1xuICBwcmlvcml0eS5hcHBlbmRDaGlsZChvcHRpb25Mb3cpO1xuICBjb25zdCBvcHRpb25MTWVkaXVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKTtcbiAgb3B0aW9uTE1lZGl1bS52YWx1ZSA9IFwiTWVkaXVtXCI7XG4gIG9wdGlvbkxNZWRpdW0uaW5uZXJUZXh0ID0gXCJNZWRpdW1cIjtcbiAgcHJpb3JpdHkuYXBwZW5kQ2hpbGQob3B0aW9uTE1lZGl1bSk7XG4gIGNvbnN0IG9wdGlvbkhpZ2ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpO1xuICBvcHRpb25IaWdoLnZhbHVlID0gXCJIaWdoXCI7XG4gIG9wdGlvbkhpZ2guaW5uZXJUZXh0ID0gXCJIaWdoXCI7XG4gIHByaW9yaXR5LmFwcGVuZENoaWxkKG9wdGlvbkhpZ2gpO1xuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInByaW9yaXR5XCIpLnZhbHVlID0gdG9kb0xpc3RJdGVtc1tpXS5wcmlvcml0eTtcblxuICBjb25zdCBwcm9qZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNlbGVjdFwiKTtcbiAgcHJvamVjdC5pZCA9IFwicHJvamVjdFwiO1xuICBwcm9qZWN0Lm5hbWUgPSBcInByb2plY3RcIjtcbiAgZm9ybS5hcHBlbmRDaGlsZChwcm9qZWN0KTtcblxuICBmb3IgKGNvbnN0IHByb2plY3RJdGVtIG9mIHByb2plY3RzKSB7XG4gICAgaWYgKHByb2plY3RJdGVtLnByb2plY3QgPT0gXCJBbGxcIikge1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBvcHRpb25Qcm9qZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKTtcbiAgICAgIG9wdGlvblByb2plY3QudmFsdWUgPSBwcm9qZWN0SXRlbS5wcm9qZWN0O1xuICAgICAgb3B0aW9uUHJvamVjdC5pbm5lclRleHQgPSBwcm9qZWN0SXRlbS5wcm9qZWN0O1xuICAgICAgcHJvamVjdC5hcHBlbmRDaGlsZChvcHRpb25Qcm9qZWN0KTtcbiAgICB9XG4gIH1cbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwcm9qZWN0XCIpLnZhbHVlID0gdG9kb0xpc3RJdGVtc1tpXS5wcm9qZWN0O1xuXG4gIGNvbnN0IHN1Ym1pdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgc3VibWl0LnR5cGUgPSBcInN1Ym1pdFwiO1xuICBzdWJtaXQudmFsdWUgPSBcIlVwZGF0ZVwiO1xuICBmb3JtLmFwcGVuZENoaWxkKHN1Ym1pdCk7XG5cbiAgZm9ybS5hZGRFdmVudExpc3RlbmVyKFwic3VibWl0XCIsIGZ1bmN0aW9uIChldmVudCkge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICBjb25zdCBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YShmb3JtKTtcbiAgICBjb25zdCB0aXRsZSA9IGZvcm1EYXRhLmdldChcInRpdGxlXCIpO1xuICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gZm9ybURhdGEuZ2V0KFwiZGVzY3JpcHRpb25cIik7XG4gICAgY29uc3QgZHVlRGF0ZSA9IGZvcm1EYXRhLmdldChcImR1ZURhdGVcIik7XG4gICAgY29uc3QgcHJpb3JpdHkgPSBmb3JtRGF0YS5nZXQoXCJwcmlvcml0eVwiKTtcbiAgICBjb25zdCBwcm9qZWN0ID0gZm9ybURhdGEuZ2V0KFwicHJvamVjdFwiKTtcblxuICAgIHRvZG9MaXN0SXRlbXNbaV0udXBkYXRlVGFzayhcbiAgICAgIGksXG4gICAgICB0b2RvTGlzdEl0ZW1zLFxuICAgICAgdGl0bGUsXG4gICAgICBkZXNjcmlwdGlvbixcbiAgICAgIGR1ZURhdGUsXG4gICAgICBwcmlvcml0eSxcbiAgICAgIHByb2plY3RcbiAgICApO1xuICAgIHRvZG8uc2F2ZUxvY2FsKHRvZG9MaXN0SXRlbXMsIHByb2plY3RzKTtcbiAgICByZXNldFBhZ2UodG9kb0xpc3RJdGVtcywgcHJvamVjdHMpO1xuICB9KTtcblxuICBjb25zdCBjYW5jZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gIGNhbmNlbC50eXBlID0gXCJidXR0b25cIjtcbiAgY2FuY2VsLnZhbHVlID0gXCJDYW5jZWxcIjtcbiAgZm9ybS5hcHBlbmRDaGlsZChjYW5jZWwpO1xuXG4gIGNhbmNlbC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgIHJlc2V0UGFnZSh0b2RvTGlzdEl0ZW1zLCBwcm9qZWN0cyk7XG4gIH0pO1xuXG4gIGNvbnN0IGRlbGV0ZUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgZGVsZXRlQnV0dG9uLnR5cGUgPSBcImJ1dHRvblwiO1xuICBkZWxldGVCdXR0b24udmFsdWUgPSBcIkRlbGV0ZVwiO1xuICBmb3JtLmFwcGVuZENoaWxkKGRlbGV0ZUJ1dHRvbik7XG5cbiAgZGVsZXRlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgdG9kb0xpc3RJdGVtc1tpXS5kZWxldGVUYXNrKGksIHRvZG9MaXN0SXRlbXMpO1xuICAgIHRvZG8uc2F2ZUxvY2FsKHRvZG9MaXN0SXRlbXMsIHByb2plY3RzKTtcbiAgICByZXNldFBhZ2UodG9kb0xpc3RJdGVtcywgcHJvamVjdHMpO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gcmVzZXRQYWdlKHRvZG9MaXN0SXRlbXMsIHByb2plY3RzKSB7XG4gIGNvbnN0IHRvZG9MaXN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0b2RvLWxpc3RcIik7XG4gIGNvbnN0IGNvbXBsZXRlTGlzdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29tcGxldGUtbGlzdFwiKTtcblxuICB0b2RvTGlzdC5pbm5lckhUTUwgPSBcIlwiO1xuICBjb21wbGV0ZUxpc3QuaW5uZXJIVE1MID0gXCJcIjtcblxuICBjb25zdCBhZGRNb2RhbHMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFkZC10YXNrLWZvcm1cIik7XG4gIGlmIChhZGRNb2RhbHMgIT0gbnVsbCkge1xuICAgIGFkZE1vZGFscy5yZW1vdmUoKTtcbiAgfVxuICBjb25zdCBlZGl0TW9kYWxzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJlZGl0LXRhc2stZm9ybVwiKTtcbiAgaWYgKGVkaXRNb2RhbHMgIT0gbnVsbCkge1xuICAgIGVkaXRNb2RhbHMucmVtb3ZlKCk7XG4gIH1cblxuICBidWlsZFRvZG9MaXN0KHRvZG9MaXN0SXRlbXMsIHRvZG9MaXN0LCBjb21wbGV0ZUxpc3QsIHByb2plY3RzKTtcbn1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==