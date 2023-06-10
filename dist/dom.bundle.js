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

      const item = new todoList(title, description, dueDate, priority, project);

      todoListItems.push(item);

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

  const saveLocalButton = document.createElement("button");
  saveLocalButton.id = "save-local-button";
  saveLocalButton.innerText = "Save Local";
  header.appendChild(saveLocalButton);
  saveLocalButton.addEventListener("click", () => {
    _todo__WEBPACK_IMPORTED_MODULE_0__.saveLocal(todoListItems, projects);
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
  document.body.innerHTML = "";

  pageLoad(todoListItems, projects);
}

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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dG9kby5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWRlbW8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vd2VicGFjay1kZW1vL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly93ZWJwYWNrLWRlbW8vd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly93ZWJwYWNrLWRlbW8vd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly93ZWJwYWNrLWRlbW8vLi9zcmMvZG9tLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIENyZWF0aW5nIGEgbmV3IHRvZG9cbmV4cG9ydCBjbGFzcyB0b2RvTGlzdCB7XG4gIGNvbnN0cnVjdG9yKHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHksIHByb2plY3QpIHtcbiAgICB0aGlzLnRpdGxlID0gdGl0bGU7XG4gICAgdGhpcy5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xuICAgIHRoaXMuZHVlRGF0ZSA9IGR1ZURhdGU7XG4gICAgdGhpcy5wcmlvcml0eSA9IHByaW9yaXR5O1xuICAgIHRoaXMucHJvamVjdCA9IHByb2plY3Q7XG4gICAgdGhpcy5jb21wbGV0ZSA9IGZhbHNlO1xuICB9XG5cbiAgY29tcGxldGVUYXNrKGluZGV4LCB0b2RvTGlzdEl0ZW1zKSB7XG4gICAgdG9kb0xpc3RJdGVtc1tpbmRleF0uY29tcGxldGUgPSB0cnVlO1xuICB9XG5cbiAgdW5jb21wbGV0ZVRhc2soaW5kZXgsIHRvZG9MaXN0SXRlbXMpIHtcbiAgICB0b2RvTGlzdEl0ZW1zW2luZGV4XS5jb21wbGV0ZSA9IGZhbHNlO1xuICB9XG5cbiAgdXBkYXRlVGFzayhcbiAgICBpbmRleCxcbiAgICB0b2RvTGlzdEl0ZW1zLFxuICAgIHRpdGxlLFxuICAgIGRlc2NyaXB0aW9uLFxuICAgIGR1ZURhdGUsXG4gICAgcHJpb3JpdHksXG4gICAgcHJvamVjdFxuICApIHtcbiAgICB0b2RvTGlzdEl0ZW1zW2luZGV4XS50aXRsZSA9IHRpdGxlO1xuICAgIHRvZG9MaXN0SXRlbXNbaW5kZXhdLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XG4gICAgdG9kb0xpc3RJdGVtc1tpbmRleF0uZHVlRGF0ZSA9IGR1ZURhdGU7XG4gICAgdG9kb0xpc3RJdGVtc1tpbmRleF0ucHJpb3JpdHkgPSBwcmlvcml0eTtcbiAgICB0b2RvTGlzdEl0ZW1zW2luZGV4XS5wcm9qZWN0ID0gcHJvamVjdDtcbiAgfVxuXG4gIGRlbGV0ZVRhc2soaW5kZXgsIHRvZG9MaXN0SXRlbXMpIHtcbiAgICB0b2RvTGlzdEl0ZW1zLnNwbGljZShpbmRleCwgMSk7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIHByb2plY3Qge1xuICBjb25zdHJ1Y3Rvcihwcm9qZWN0KSB7XG4gICAgdGhpcy5wcm9qZWN0ID0gcHJvamVjdDtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gc2F2ZUxvY2FsKHRvZG9MaXN0SXRlbXMsIHByb2plY3RzKSB7XG4gIGlmIChzdG9yYWdlQXZhaWxhYmxlKFwibG9jYWxTdG9yYWdlXCIpKSB7XG4gICAgbG9jYWxTdG9yYWdlLmNsZWFyKCk7XG4gICAgcG9wdWxhdGVTdG9yYWdlKHRvZG9MaXN0SXRlbXMsIHByb2plY3RzKTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gbG9hZExvY2FsKHRvZG9MaXN0SXRlbXMsIHByb2plY3RzKSB7XG4gIGlmIChzdG9yYWdlQXZhaWxhYmxlKFwibG9jYWxTdG9yYWdlXCIpKSB7XG4gICAgLy8gTG9hZCBwcm9qZWN0c1xuICAgIGxldCBpID0gMDtcbiAgICBsZXQgY2hlY2s7XG4gICAgZG8ge1xuICAgICAgY29uc3QgbG9jYWxQcm9qZWN0ID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oaSArIFwiIFByb2plY3RcIik7XG4gICAgICBjb25zdCBuZXdQcm9qZWN0ID0gbmV3IHByb2plY3QobG9jYWxQcm9qZWN0KTtcbiAgICAgIHByb2plY3RzLnB1c2gobmV3UHJvamVjdCk7XG4gICAgICBpID0gaSArIDE7XG4gICAgICBjaGVjayA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKGkgKyBcIiBQcm9qZWN0XCIpO1xuICAgIH0gd2hpbGUgKGNoZWNrICE9IG51bGwpO1xuXG4gICAgLy8gTG9hZCB0b2Rvc1xuICAgIGkgPSAwO1xuICAgIGRvIHtcbiAgICAgIGNvbnN0IHRpdGxlID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oaSArIFwiIFRpdGxlXCIpO1xuICAgICAgY29uc3QgZGVzY3JpcHRpb24gPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShpICsgXCIgRGVzY3JpcHRpb25cIik7XG4gICAgICBjb25zdCBkdWVEYXRlID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oaSArIFwiIGR1ZURhdGVcIik7XG4gICAgICBjb25zdCBwcmlvcml0eSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKGkgKyBcIiBQcmlvcml0eVwiKTtcbiAgICAgIGNvbnN0IHByb2plY3QgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShpICsgXCIgVGFza1Byb2plY3RcIik7XG5cbiAgICAgIGNvbnN0IGl0ZW0gPSBuZXcgdG9kb0xpc3QodGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSwgcHJvamVjdCk7XG5cbiAgICAgIHRvZG9MaXN0SXRlbXMucHVzaChpdGVtKTtcblxuICAgICAgaSA9IGkgKyAxO1xuICAgICAgY2hlY2sgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShpICsgXCIgVGl0bGVcIik7XG4gICAgfSB3aGlsZSAoY2hlY2sgIT0gbnVsbCk7XG4gIH1cbn1cblxuZnVuY3Rpb24gc3RvcmFnZUF2YWlsYWJsZSh0eXBlKSB7XG4gIGxldCBzdG9yYWdlO1xuICB0cnkge1xuICAgIHN0b3JhZ2UgPSB3aW5kb3dbdHlwZV07XG4gICAgY29uc3QgeCA9IFwiX19zdG9yYWdlX3Rlc3RfX1wiO1xuICAgIHN0b3JhZ2Uuc2V0SXRlbSh4LCB4KTtcbiAgICBzdG9yYWdlLnJlbW92ZUl0ZW0oeCk7XG4gICAgcmV0dXJuIHRydWU7XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICByZXR1cm4gKFxuICAgICAgZSBpbnN0YW5jZW9mIERPTUV4Y2VwdGlvbiAmJlxuICAgICAgLy8gZXZlcnl0aGluZyBleGNlcHQgRmlyZWZveFxuICAgICAgKGUuY29kZSA9PT0gMjIgfHxcbiAgICAgICAgLy8gRmlyZWZveFxuICAgICAgICBlLmNvZGUgPT09IDEwMTQgfHxcbiAgICAgICAgLy8gdGVzdCBuYW1lIGZpZWxkIHRvbywgYmVjYXVzZSBjb2RlIG1pZ2h0IG5vdCBiZSBwcmVzZW50XG4gICAgICAgIC8vIGV2ZXJ5dGhpbmcgZXhjZXB0IEZpcmVmb3hcbiAgICAgICAgZS5uYW1lID09PSBcIlF1b3RhRXhjZWVkZWRFcnJvclwiIHx8XG4gICAgICAgIC8vIEZpcmVmb3hcbiAgICAgICAgZS5uYW1lID09PSBcIk5TX0VSUk9SX0RPTV9RVU9UQV9SRUFDSEVEXCIpICYmXG4gICAgICAvLyBhY2tub3dsZWRnZSBRdW90YUV4Y2VlZGVkRXJyb3Igb25seSBpZiB0aGVyZSdzIHNvbWV0aGluZyBhbHJlYWR5IHN0b3JlZFxuICAgICAgc3RvcmFnZSAmJlxuICAgICAgc3RvcmFnZS5sZW5ndGggIT09IDBcbiAgICApO1xuICB9XG59XG5cbmZ1bmN0aW9uIHBvcHVsYXRlU3RvcmFnZSh0b2RvTGlzdEl0ZW1zLCBwcm9qZWN0cykge1xuICAvLyBQcm9qZWN0c1xuICBsZXQgaSA9IDA7XG4gIGZvciAoY29uc3QgcHJvamVjdEl0ZW1zIG9mIHByb2plY3RzKSB7XG4gICAgaWYgKHByb2plY3RJdGVtcy5wcm9qZWN0ICE9IFwiQWxsXCIgJiYgcHJvamVjdEl0ZW1zLnByb2plY3QgIT0gXCJEZWZhdWx0XCIpIHtcbiAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKGkgKyBcIiBQcm9qZWN0XCIsIHByb2plY3RJdGVtcy5wcm9qZWN0KTtcbiAgICAgIGkgPSBpICsgMTtcbiAgICB9XG4gIH1cblxuICAvLyBUb2Rvc1xuICBpID0gMDtcbiAgZm9yIChjb25zdCB0b2RvSXRlbXMgb2YgdG9kb0xpc3RJdGVtcykge1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKGkgKyBcIiBUaXRsZVwiLCB0b2RvSXRlbXMudGl0bGUpO1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKGkgKyBcIiBEZXNjcmlwdGlvblwiLCB0b2RvSXRlbXMuZGVzY3JpcHRpb24pO1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKGkgKyBcIiBkdWVEYXRlXCIsIHRvZG9JdGVtcy5kdWVEYXRlKTtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShpICsgXCIgUHJpb3JpdHlcIiwgdG9kb0l0ZW1zLnByaW9yaXR5KTtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShpICsgXCIgVGFza1Byb2plY3RcIiwgdG9kb0l0ZW1zLnByb2plY3QpO1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKGkgKyBcIiBDb21wbGV0ZVwiLCB0b2RvSXRlbXMuY29tcGxldGUpO1xuICAgIGkgPSBpICsgMTtcbiAgfVxufVxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgKiBhcyB0b2RvIGZyb20gXCIuL3RvZG9cIjtcblxuZXhwb3J0IGZ1bmN0aW9uIHBhZ2VMb2FkKHRvZG9MaXN0SXRlbXMsIHByb2plY3RzKSB7XG4gIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb250ZW50LmlkID0gXCJjb250ZW50XCI7XG4gIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoY29udGVudCk7XG5cbiAgLy8gU3RydWN0dXJlIG9mIHRoZSBwYWdlXG4gIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoZWFkZXJcIik7XG4gIGNvbnRlbnQuYXBwZW5kQ2hpbGQoaGVhZGVyKTtcbiAgY29uc3QgbWFpbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJtYWluXCIpO1xuICBjb250ZW50LmFwcGVuZENoaWxkKG1haW4pO1xuICBjb25zdCBmb290ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZm9vdGVyXCIpO1xuICBjb250ZW50LmFwcGVuZENoaWxkKGZvb3Rlcik7XG5cbiAgLy8gSGVhZGVyIGVsZW1lbnRcbiAgY29uc3QgaGVhZGVyVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKTtcbiAgaGVhZGVyVGV4dC5pbm5lclRleHQgPSBcIk15IFRvZG8gTGlzdFwiO1xuICBoZWFkZXIuYXBwZW5kQ2hpbGQoaGVhZGVyVGV4dCk7XG5cbiAgY29uc3QgaGVhZGVyQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgaGVhZGVyQnV0dG9uLmlkID0gXCJhZGQtdGFzay1idXR0b25cIjtcbiAgaGVhZGVyQnV0dG9uLmlubmVyVGV4dCA9IFwiQWRkIFRhc2tcIjtcbiAgaGVhZGVyLmFwcGVuZENoaWxkKGhlYWRlckJ1dHRvbik7XG4gIGhlYWRlckJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIGFkZFRhc2sodG9kb0xpc3RJdGVtcywgcHJvamVjdHMpO1xuICB9KTtcblxuICBjb25zdCBwcm9qZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNlbGVjdFwiKTtcbiAgcHJvamVjdC5uYW1lID0gXCJwcm9qZWN0XCI7XG4gIGhlYWRlci5hcHBlbmRDaGlsZChwcm9qZWN0KTtcbiAgZm9yIChjb25zdCBwcm9qZWN0SXRlbSBvZiBwcm9qZWN0cykge1xuICAgIGNvbnN0IG9wdGlvblByb2plY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpO1xuICAgIG9wdGlvblByb2plY3QudmFsdWUgPSBwcm9qZWN0SXRlbS5wcm9qZWN0O1xuICAgIG9wdGlvblByb2plY3QuaW5uZXJUZXh0ID0gcHJvamVjdEl0ZW0ucHJvamVjdDtcbiAgICBwcm9qZWN0LmFwcGVuZENoaWxkKG9wdGlvblByb2plY3QpO1xuICB9XG5cbiAgY29uc3QgYWRkUHJvamVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgYWRkUHJvamVjdC5wbGFjZWhvbGRlciA9IFwiTmV3IFByb2plY3RcIjtcbiAgaGVhZGVyLmFwcGVuZENoaWxkKGFkZFByb2plY3QpO1xuICBhZGRQcm9qZWN0LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIChldmVudCkgPT4ge1xuICAgIGNvbnN0IGtleSA9IGV2ZW50LmtleTtcbiAgICBpZiAoa2V5ID09IFwiRW50ZXJcIikge1xuICAgICAgY29uc3QgbmV3UHJvamVjdCA9IG5ldyB0b2RvLnByb2plY3QoYWRkUHJvamVjdC52YWx1ZSk7XG4gICAgICBwcm9qZWN0cy5wdXNoKG5ld1Byb2plY3QpO1xuICAgICAgdG9kby5zYXZlTG9jYWwodG9kb0xpc3RJdGVtcywgcHJvamVjdHMpO1xuICAgICAgcmVzZXRQYWdlKHRvZG9MaXN0SXRlbXMsIHByb2plY3RzKTtcbiAgICB9XG4gIH0pO1xuXG4gIGNvbnN0IHNhdmVMb2NhbEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gIHNhdmVMb2NhbEJ1dHRvbi5pZCA9IFwic2F2ZS1sb2NhbC1idXR0b25cIjtcbiAgc2F2ZUxvY2FsQnV0dG9uLmlubmVyVGV4dCA9IFwiU2F2ZSBMb2NhbFwiO1xuICBoZWFkZXIuYXBwZW5kQ2hpbGQoc2F2ZUxvY2FsQnV0dG9uKTtcbiAgc2F2ZUxvY2FsQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgdG9kby5zYXZlTG9jYWwodG9kb0xpc3RJdGVtcywgcHJvamVjdHMpO1xuICB9KTtcblxuICAvLyBNYWluIGVsZW1lbnRcbiAgY29uc3QgdG9kb0l0ZW1zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgdG9kb0l0ZW1zLmlubmVyVGV4dCA9IFwiSXRlbXMgVG9kb1wiO1xuICBtYWluLmFwcGVuZENoaWxkKHRvZG9JdGVtcyk7XG5cbiAgY29uc3QgdG9kb0xpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidWxcIik7XG4gIHRvZG9MaXN0LmlkID0gXCJ0b2RvLWxpc3RcIjtcbiAgdG9kb0l0ZW1zLmFwcGVuZENoaWxkKHRvZG9MaXN0KTtcblxuICBjb25zdCBjb21wbGV0ZUl0ZW1zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29tcGxldGVJdGVtcy5pbm5lclRleHQgPSBcIkl0ZW1zIENvbXBsZXRlZFwiO1xuICBtYWluLmFwcGVuZENoaWxkKGNvbXBsZXRlSXRlbXMpO1xuXG4gIGNvbnN0IGNvbXBsZXRlTGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ1bFwiKTtcbiAgY29tcGxldGVMaXN0LmlkID0gXCJjb21wbGV0ZS1saXN0XCI7XG4gIGNvbXBsZXRlSXRlbXMuYXBwZW5kQ2hpbGQoY29tcGxldGVMaXN0KTtcblxuICBidWlsZFRvZG9MaXN0KHRvZG9MaXN0SXRlbXMsIHRvZG9MaXN0LCBjb21wbGV0ZUxpc3QsIHByb2plY3RzKTtcblxuICAvLyBGb290ZXIgZWxlbWVudFxuICBjb25zdCBmb290ZXJUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgZm9vdGVyVGV4dC5pbm5lclRleHQgPSBcIkZvb3RlciB0ZXh0IGdvZXMgaGVyZVwiO1xuICBmb290ZXIuYXBwZW5kQ2hpbGQoZm9vdGVyVGV4dCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhZGRUYXNrKHRvZG9MaXN0SXRlbXMsIHByb2plY3RzKSB7XG4gIGNvbnN0IGFkZFRhc2tGcm9tID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgYWRkVGFza0Zyb20uaWQgPSBcImFkZC10YXNrLWZvcm1cIjtcbiAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChhZGRUYXNrRnJvbSk7XG5cbiAgY29uc3QgZm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJmb3JtXCIpO1xuICBhZGRUYXNrRnJvbS5hcHBlbmRDaGlsZChmb3JtKTtcblxuICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgdGl0bGUudHlwZSA9IFwidGV4dGJveFwiO1xuICB0aXRsZS5uYW1lID0gXCJ0aXRsZVwiO1xuICB0aXRsZS5wbGFjZWhvbGRlciA9IFwidGl0bGVcIjtcbiAgZm9ybS5hcHBlbmRDaGlsZCh0aXRsZSk7XG5cbiAgY29uc3QgZGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gIGRlc2NyaXB0aW9uLnR5cGUgPSBcInRleHRib3hcIjtcbiAgZGVzY3JpcHRpb24ubmFtZSA9IFwiZGVzY3JpcHRpb25cIjtcbiAgZGVzY3JpcHRpb24ucGxhY2Vob2xkZXIgPSBcImRlc2NyaXB0aW9uXCI7XG4gIGZvcm0uYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb24pO1xuXG4gIGNvbnN0IGR1ZURhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gIGR1ZURhdGUudHlwZSA9IFwiRGF0ZVwiO1xuICBkdWVEYXRlLm5hbWUgPSBcImR1ZURhdGVcIjtcbiAgZm9ybS5hcHBlbmRDaGlsZChkdWVEYXRlKTtcblxuICBjb25zdCBwcmlvcml0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzZWxlY3RcIik7XG4gIHByaW9yaXR5Lm5hbWUgPSBcInByaW9yaXR5XCI7XG4gIGZvcm0uYXBwZW5kQ2hpbGQocHJpb3JpdHkpO1xuICBjb25zdCBvcHRpb25Mb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpO1xuICBvcHRpb25Mb3cudmFsdWUgPSBcIkxvd1wiO1xuICBvcHRpb25Mb3cuaW5uZXJUZXh0ID0gXCJMb3dcIjtcbiAgcHJpb3JpdHkuYXBwZW5kQ2hpbGQob3B0aW9uTG93KTtcbiAgY29uc3Qgb3B0aW9uTE1lZGl1bSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIik7XG4gIG9wdGlvbkxNZWRpdW0udmFsdWUgPSBcIk1lZGl1bVwiO1xuICBvcHRpb25MTWVkaXVtLmlubmVyVGV4dCA9IFwiTWVkaXVtXCI7XG4gIHByaW9yaXR5LmFwcGVuZENoaWxkKG9wdGlvbkxNZWRpdW0pO1xuICBjb25zdCBvcHRpb25IaWdoID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKTtcbiAgb3B0aW9uSGlnaC52YWx1ZSA9IFwiSGlnaFwiO1xuICBvcHRpb25IaWdoLmlubmVyVGV4dCA9IFwiSGlnaFwiO1xuICBwcmlvcml0eS5hcHBlbmRDaGlsZChvcHRpb25IaWdoKTtcblxuICBjb25zdCBwcm9qZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNlbGVjdFwiKTtcbiAgcHJvamVjdC5uYW1lID0gXCJwcm9qZWN0XCI7XG4gIGZvcm0uYXBwZW5kQ2hpbGQocHJvamVjdCk7XG5cbiAgZm9yIChjb25zdCBwcm9qZWN0SXRlbSBvZiBwcm9qZWN0cykge1xuICAgIGlmIChwcm9qZWN0SXRlbS5wcm9qZWN0ID09IFwiQWxsXCIpIHtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3Qgb3B0aW9uUHJvamVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIik7XG4gICAgICBvcHRpb25Qcm9qZWN0LnZhbHVlID0gcHJvamVjdEl0ZW0ucHJvamVjdDtcbiAgICAgIG9wdGlvblByb2plY3QuaW5uZXJUZXh0ID0gcHJvamVjdEl0ZW0ucHJvamVjdDtcbiAgICAgIHByb2plY3QuYXBwZW5kQ2hpbGQob3B0aW9uUHJvamVjdCk7XG4gICAgfVxuICB9XG5cbiAgY29uc3Qgc3VibWl0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICBzdWJtaXQudHlwZSA9IFwic3VibWl0XCI7XG4gIGZvcm0uYXBwZW5kQ2hpbGQoc3VibWl0KTtcblxuICBmb3JtLmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgIGNvbnN0IGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKGZvcm0pO1xuICAgIGNvbnN0IHRpdGxlID0gZm9ybURhdGEuZ2V0KFwidGl0bGVcIik7XG4gICAgY29uc3QgZGVzY3JpcHRpb24gPSBmb3JtRGF0YS5nZXQoXCJkZXNjcmlwdGlvblwiKTtcbiAgICBjb25zdCBkdWVEYXRlID0gZm9ybURhdGEuZ2V0KFwiZHVlRGF0ZVwiKTtcbiAgICBjb25zdCBwcmlvcml0eSA9IGZvcm1EYXRhLmdldChcInByaW9yaXR5XCIpO1xuICAgIGNvbnN0IHByb2plY3QgPSBmb3JtRGF0YS5nZXQoXCJwcm9qZWN0XCIpO1xuXG4gICAgY29uc3QgaXRlbSA9IG5ldyB0b2RvLnRvZG9MaXN0KFxuICAgICAgdGl0bGUsXG4gICAgICBkZXNjcmlwdGlvbixcbiAgICAgIGR1ZURhdGUsXG4gICAgICBwcmlvcml0eSxcbiAgICAgIHByb2plY3RcbiAgICApO1xuXG4gICAgdG9kb0xpc3RJdGVtcy5wdXNoKGl0ZW0pO1xuICAgIHRvZG8uc2F2ZUxvY2FsKHRvZG9MaXN0SXRlbXMsIHByb2plY3RzKTtcbiAgICByZXNldFBhZ2UodG9kb0xpc3RJdGVtcywgcHJvamVjdHMpO1xuICB9KTtcblxuICBjb25zdCBjYW5jZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gIGNhbmNlbC50eXBlID0gXCJidXR0b25cIjtcbiAgY2FuY2VsLnZhbHVlID0gXCJDYW5jZWxcIjtcbiAgZm9ybS5hcHBlbmRDaGlsZChjYW5jZWwpO1xuXG4gIGNhbmNlbC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgIHJlc2V0UGFnZSh0b2RvTGlzdEl0ZW1zLCBwcm9qZWN0cyk7XG4gIH0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYnVpbGRUb2RvTGlzdCh0b2RvTGlzdEl0ZW1zLCB0b2RvTGlzdCwgY29tcGxldGVMaXN0LCBwcm9qZWN0cykge1xuICBjb25zdCBjcmVhdGVMaXN0SXRlbSA9IChpdGVtLCBpKSA9PiB7XG4gICAgY29uc3QgbGlzdEl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XG5cbiAgICBjb25zdCBjb21wbGV0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICBjb21wbGV0ZS50eXBlID0gXCJjaGVja2JveFwiO1xuICAgIGNvbXBsZXRlLmNoZWNrZWQgPSBpdGVtLmNvbXBsZXRlO1xuICAgIGxpc3RJdGVtLmFwcGVuZENoaWxkKGNvbXBsZXRlKTtcbiAgICBjb21wbGV0ZS5hZGRFdmVudExpc3RlbmVyKFwiY2hhbmdlXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGlmICh0b2RvTGlzdEl0ZW1zW2ldLmNvbXBsZXRlID09IGZhbHNlKSB7XG4gICAgICAgIHRvZG9MaXN0SXRlbXNbaV0uY29tcGxldGVUYXNrKGksIHRvZG9MaXN0SXRlbXMpO1xuICAgICAgICB0b2RvLnNhdmVMb2NhbCh0b2RvTGlzdEl0ZW1zLCBwcm9qZWN0cyk7XG4gICAgICAgIHJlc2V0UGFnZSh0b2RvTGlzdEl0ZW1zLCBwcm9qZWN0cyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0b2RvTGlzdEl0ZW1zW2ldLnVuY29tcGxldGVUYXNrKGksIHRvZG9MaXN0SXRlbXMpO1xuICAgICAgICB0b2RvLnNhdmVMb2NhbCh0b2RvTGlzdEl0ZW1zLCBwcm9qZWN0cyk7XG4gICAgICAgIHJlc2V0UGFnZSh0b2RvTGlzdEl0ZW1zLCBwcm9qZWN0cyk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgdGl0bGUuaW5uZXJUZXh0ID0gaXRlbS50aXRsZTtcbiAgICBsaXN0SXRlbS5hcHBlbmRDaGlsZCh0aXRsZSk7XG5cbiAgICBjb25zdCBkdWVEYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBkdWVEYXRlLmlubmVyVGV4dCA9IGl0ZW0uZHVlRGF0ZTtcbiAgICBsaXN0SXRlbS5hcHBlbmRDaGlsZChkdWVEYXRlKTtcblxuICAgIGNvbnN0IHByb2plY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHByb2plY3QuaW5uZXJUZXh0ID0gaXRlbS5wcm9qZWN0O1xuICAgIGxpc3RJdGVtLmFwcGVuZENoaWxkKHByb2plY3QpO1xuXG4gICAgbGlzdEl0ZW0uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgIGVkaXRUYXNrKHRvZG9MaXN0SXRlbXMsIGksIHByb2plY3RzKTtcbiAgICB9KTtcblxuICAgIHJldHVybiBsaXN0SXRlbTtcbiAgfTtcblxuICBsZXQgaSA9IDA7XG4gIGZvciAoY29uc3QgaXRlbSBvZiB0b2RvTGlzdEl0ZW1zKSB7XG4gICAgY29uc3QgbGlzdEl0ZW0gPSBjcmVhdGVMaXN0SXRlbShpdGVtLCBpKTtcblxuICAgIGlmIChpdGVtLmNvbXBsZXRlKSB7XG4gICAgICBjb21wbGV0ZUxpc3QuYXBwZW5kQ2hpbGQobGlzdEl0ZW0pO1xuICAgIH0gZWxzZSB7XG4gICAgICB0b2RvTGlzdC5hcHBlbmRDaGlsZChsaXN0SXRlbSk7XG4gICAgfVxuICAgIGkgPSBpICsgMTtcbiAgfVxufVxuXG5mdW5jdGlvbiBlZGl0VGFzayh0b2RvTGlzdEl0ZW1zLCBpLCBwcm9qZWN0cykge1xuICBjb25zdCBhZGRUYXNrRnJvbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGFkZFRhc2tGcm9tLmlkID0gXCJlZGl0LXRhc2stZm9ybVwiO1xuICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGFkZFRhc2tGcm9tKTtcblxuICBjb25zdCBmb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImZvcm1cIik7XG4gIGFkZFRhc2tGcm9tLmFwcGVuZENoaWxkKGZvcm0pO1xuXG4gIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICB0aXRsZS50eXBlID0gXCJ0ZXh0Ym94XCI7XG4gIHRpdGxlLm5hbWUgPSBcInRpdGxlXCI7XG4gIHRpdGxlLnZhbHVlID0gdG9kb0xpc3RJdGVtc1tpXS50aXRsZTtcbiAgdGl0bGUucGxhY2Vob2xkZXIgPSBcInRpdGxlXCI7XG4gIGZvcm0uYXBwZW5kQ2hpbGQodGl0bGUpO1xuXG4gIGNvbnN0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICBkZXNjcmlwdGlvbi50eXBlID0gXCJ0ZXh0Ym94XCI7XG4gIGRlc2NyaXB0aW9uLm5hbWUgPSBcImRlc2NyaXB0aW9uXCI7XG4gIGRlc2NyaXB0aW9uLnZhbHVlID0gdG9kb0xpc3RJdGVtc1tpXS5kZXNjcmlwdGlvbjtcbiAgZGVzY3JpcHRpb24ucGxhY2Vob2xkZXIgPSBcImRlc2NyaXB0aW9uXCI7XG4gIGZvcm0uYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb24pO1xuXG4gIGNvbnN0IGR1ZURhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gIGR1ZURhdGUudHlwZSA9IFwiRGF0ZVwiO1xuICBkdWVEYXRlLm5hbWUgPSBcImR1ZURhdGVcIjtcbiAgZHVlRGF0ZS52YWx1ZSA9IHRvZG9MaXN0SXRlbXNbaV0uZHVlRGF0ZTtcbiAgZm9ybS5hcHBlbmRDaGlsZChkdWVEYXRlKTtcblxuICBjb25zdCBwcmlvcml0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzZWxlY3RcIik7XG4gIHByaW9yaXR5LmlkID0gXCJwcmlvcml0eVwiO1xuICBwcmlvcml0eS5uYW1lID0gXCJwcmlvcml0eVwiO1xuICBmb3JtLmFwcGVuZENoaWxkKHByaW9yaXR5KTtcbiAgY29uc3Qgb3B0aW9uTG93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKTtcbiAgb3B0aW9uTG93LnZhbHVlID0gXCJMb3dcIjtcbiAgb3B0aW9uTG93LmlubmVyVGV4dCA9IFwiTG93XCI7XG4gIHByaW9yaXR5LmFwcGVuZENoaWxkKG9wdGlvbkxvdyk7XG4gIGNvbnN0IG9wdGlvbkxNZWRpdW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpO1xuICBvcHRpb25MTWVkaXVtLnZhbHVlID0gXCJNZWRpdW1cIjtcbiAgb3B0aW9uTE1lZGl1bS5pbm5lclRleHQgPSBcIk1lZGl1bVwiO1xuICBwcmlvcml0eS5hcHBlbmRDaGlsZChvcHRpb25MTWVkaXVtKTtcbiAgY29uc3Qgb3B0aW9uSGlnaCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIik7XG4gIG9wdGlvbkhpZ2gudmFsdWUgPSBcIkhpZ2hcIjtcbiAgb3B0aW9uSGlnaC5pbm5lclRleHQgPSBcIkhpZ2hcIjtcbiAgcHJpb3JpdHkuYXBwZW5kQ2hpbGQob3B0aW9uSGlnaCk7XG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicHJpb3JpdHlcIikudmFsdWUgPSB0b2RvTGlzdEl0ZW1zW2ldLnByaW9yaXR5O1xuXG4gIGNvbnN0IHByb2plY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2VsZWN0XCIpO1xuICBwcm9qZWN0LmlkID0gXCJwcm9qZWN0XCI7XG4gIHByb2plY3QubmFtZSA9IFwicHJvamVjdFwiO1xuICBmb3JtLmFwcGVuZENoaWxkKHByb2plY3QpO1xuXG4gIGZvciAoY29uc3QgcHJvamVjdEl0ZW0gb2YgcHJvamVjdHMpIHtcbiAgICBpZiAocHJvamVjdEl0ZW0ucHJvamVjdCA9PSBcIkFsbFwiKSB7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IG9wdGlvblByb2plY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpO1xuICAgICAgb3B0aW9uUHJvamVjdC52YWx1ZSA9IHByb2plY3RJdGVtLnByb2plY3Q7XG4gICAgICBvcHRpb25Qcm9qZWN0LmlubmVyVGV4dCA9IHByb2plY3RJdGVtLnByb2plY3Q7XG4gICAgICBwcm9qZWN0LmFwcGVuZENoaWxkKG9wdGlvblByb2plY3QpO1xuICAgIH1cbiAgfVxuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInByb2plY3RcIikudmFsdWUgPSB0b2RvTGlzdEl0ZW1zW2ldLnByb2plY3Q7XG5cbiAgY29uc3Qgc3VibWl0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICBzdWJtaXQudHlwZSA9IFwic3VibWl0XCI7XG4gIHN1Ym1pdC52YWx1ZSA9IFwiVXBkYXRlXCI7XG4gIGZvcm0uYXBwZW5kQ2hpbGQoc3VibWl0KTtcblxuICBmb3JtLmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgIGNvbnN0IGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKGZvcm0pO1xuICAgIGNvbnN0IHRpdGxlID0gZm9ybURhdGEuZ2V0KFwidGl0bGVcIik7XG4gICAgY29uc3QgZGVzY3JpcHRpb24gPSBmb3JtRGF0YS5nZXQoXCJkZXNjcmlwdGlvblwiKTtcbiAgICBjb25zdCBkdWVEYXRlID0gZm9ybURhdGEuZ2V0KFwiZHVlRGF0ZVwiKTtcbiAgICBjb25zdCBwcmlvcml0eSA9IGZvcm1EYXRhLmdldChcInByaW9yaXR5XCIpO1xuICAgIGNvbnN0IHByb2plY3QgPSBmb3JtRGF0YS5nZXQoXCJwcm9qZWN0XCIpO1xuXG4gICAgdG9kb0xpc3RJdGVtc1tpXS51cGRhdGVUYXNrKFxuICAgICAgaSxcbiAgICAgIHRvZG9MaXN0SXRlbXMsXG4gICAgICB0aXRsZSxcbiAgICAgIGRlc2NyaXB0aW9uLFxuICAgICAgZHVlRGF0ZSxcbiAgICAgIHByaW9yaXR5LFxuICAgICAgcHJvamVjdFxuICAgICk7XG4gICAgdG9kby5zYXZlTG9jYWwodG9kb0xpc3RJdGVtcywgcHJvamVjdHMpO1xuICAgIHJlc2V0UGFnZSh0b2RvTGlzdEl0ZW1zLCBwcm9qZWN0cyk7XG4gIH0pO1xuXG4gIGNvbnN0IGNhbmNlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgY2FuY2VsLnR5cGUgPSBcImJ1dHRvblwiO1xuICBjYW5jZWwudmFsdWUgPSBcIkNhbmNlbFwiO1xuICBmb3JtLmFwcGVuZENoaWxkKGNhbmNlbCk7XG5cbiAgY2FuY2VsLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgcmVzZXRQYWdlKHRvZG9MaXN0SXRlbXMsIHByb2plY3RzKTtcbiAgfSk7XG5cbiAgY29uc3QgZGVsZXRlQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICBkZWxldGVCdXR0b24udHlwZSA9IFwiYnV0dG9uXCI7XG4gIGRlbGV0ZUJ1dHRvbi52YWx1ZSA9IFwiRGVsZXRlXCI7XG4gIGZvcm0uYXBwZW5kQ2hpbGQoZGVsZXRlQnV0dG9uKTtcblxuICBkZWxldGVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uIChldmVudCkge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICB0b2RvTGlzdEl0ZW1zW2ldLmRlbGV0ZVRhc2soaSwgdG9kb0xpc3RJdGVtcyk7XG4gICAgdG9kby5zYXZlTG9jYWwodG9kb0xpc3RJdGVtcywgcHJvamVjdHMpO1xuICAgIHJlc2V0UGFnZSh0b2RvTGlzdEl0ZW1zLCBwcm9qZWN0cyk7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiByZXNldFBhZ2UodG9kb0xpc3RJdGVtcywgcHJvamVjdHMpIHtcbiAgZG9jdW1lbnQuYm9keS5pbm5lckhUTUwgPSBcIlwiO1xuXG4gIHBhZ2VMb2FkKHRvZG9MaXN0SXRlbXMsIHByb2plY3RzKTtcbn1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==