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
}

class project {
  constructor(project) {
    this.project = project
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


// Initial load of the page
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
    const optionProject = document.createElement("option");
    optionProject.value = projectItem.project;
    optionProject.innerText = projectItem.project;
    project.appendChild(optionProject);
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

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZG9tLmJ1bmRsZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRU87QUFDUDtBQUNBO0FBQ0E7QUFDQTs7Ozs7O1VDeEJBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7Ozs7OztBQ04rQjs7QUFFL0I7QUFDTztBQUNQO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxxQkFBcUIsMkNBQWE7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0EsR0FBRztBQUNIOztBQUVPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2VicGFjay1kZW1vLy4vc3JjL3RvZG8uanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1kZW1vL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3dlYnBhY2stZGVtby93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vd2VicGFjay1kZW1vL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vd2VicGFjay1kZW1vL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vd2VicGFjay1kZW1vLy4vc3JjL2RvbS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBDcmVhdGluZyBhIG5ldyB0b2RvXG5leHBvcnQgY2xhc3MgdG9kb0xpc3Qge1xuICBjb25zdHJ1Y3Rvcih0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5LCBwcm9qZWN0KSB7XG4gICAgdGhpcy50aXRsZSA9IHRpdGxlO1xuICAgIHRoaXMuZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcbiAgICB0aGlzLmR1ZURhdGUgPSBkdWVEYXRlO1xuICAgIHRoaXMucHJpb3JpdHkgPSBwcmlvcml0eTtcbiAgICB0aGlzLnByb2plY3QgPSBwcm9qZWN0O1xuICAgIHRoaXMuY29tcGxldGUgPSBmYWxzZTtcbiAgfVxuXG4gIGNvbXBsZXRlVGFzayhpbmRleCwgdG9kb0xpc3RJdGVtcykge1xuICAgIHRvZG9MaXN0SXRlbXNbaW5kZXhdLmNvbXBsZXRlID0gdHJ1ZTtcbiAgfVxuXG4gIHVuY29tcGxldGVUYXNrKGluZGV4LCB0b2RvTGlzdEl0ZW1zKSB7XG4gICAgdG9kb0xpc3RJdGVtc1tpbmRleF0uY29tcGxldGUgPSBmYWxzZTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgcHJvamVjdCB7XG4gIGNvbnN0cnVjdG9yKHByb2plY3QpIHtcbiAgICB0aGlzLnByb2plY3QgPSBwcm9qZWN0XG4gIH1cbn0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCAqIGFzIHRvZG8gZnJvbSBcIi4vdG9kb1wiO1xuXG4vLyBJbml0aWFsIGxvYWQgb2YgdGhlIHBhZ2VcbmV4cG9ydCBmdW5jdGlvbiBwYWdlTG9hZCh0b2RvTGlzdEl0ZW1zLCBwcm9qZWN0cykge1xuICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29udGVudC5pZCA9IFwiY29udGVudFwiO1xuICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGNvbnRlbnQpO1xuXG4gIC8vIFN0cnVjdHVyZSBvZiB0aGUgcGFnZVxuICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaGVhZGVyXCIpO1xuICBjb250ZW50LmFwcGVuZENoaWxkKGhlYWRlcik7XG4gIGNvbnN0IG1haW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibWFpblwiKTtcbiAgY29udGVudC5hcHBlbmRDaGlsZChtYWluKTtcbiAgY29uc3QgZm9vdGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImZvb3RlclwiKTtcbiAgY29udGVudC5hcHBlbmRDaGlsZChmb290ZXIpO1xuXG4gIC8vIEhlYWRlciBlbGVtZW50XG4gIGNvbnN0IGhlYWRlclRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIik7XG4gIGhlYWRlclRleHQuaW5uZXJUZXh0ID0gXCJNeSBUb2RvIExpc3RcIjtcbiAgaGVhZGVyLmFwcGVuZENoaWxkKGhlYWRlclRleHQpO1xuXG4gIGNvbnN0IGhlYWRlckJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gIGhlYWRlckJ1dHRvbi5pZCA9IFwiYWRkLXRhc2stYnV0dG9uXCI7XG4gIGhlYWRlckJ1dHRvbi5pbm5lclRleHQgPSBcIkFkZCBUYXNrXCI7XG4gIGhlYWRlci5hcHBlbmRDaGlsZChoZWFkZXJCdXR0b24pO1xuICBoZWFkZXJCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBhZGRUYXNrKHRvZG9MaXN0SXRlbXMsIHByb2plY3RzKTtcbiAgfSk7XG5cbiAgY29uc3QgcHJvamVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzZWxlY3RcIik7XG4gIHByb2plY3QubmFtZSA9IFwicHJvamVjdFwiO1xuICBoZWFkZXIuYXBwZW5kQ2hpbGQocHJvamVjdCk7XG4gIGZvciAoY29uc3QgcHJvamVjdEl0ZW0gb2YgcHJvamVjdHMpIHtcbiAgICBjb25zdCBvcHRpb25Qcm9qZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKTtcbiAgICBvcHRpb25Qcm9qZWN0LnZhbHVlID0gcHJvamVjdEl0ZW0ucHJvamVjdDtcbiAgICBvcHRpb25Qcm9qZWN0LmlubmVyVGV4dCA9IHByb2plY3RJdGVtLnByb2plY3Q7XG4gICAgcHJvamVjdC5hcHBlbmRDaGlsZChvcHRpb25Qcm9qZWN0KTtcbiAgfVxuXG4gIC8vIE1haW4gZWxlbWVudFxuICBjb25zdCB0b2RvSXRlbXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICB0b2RvSXRlbXMuaW5uZXJUZXh0ID0gXCJJdGVtcyBUb2RvXCI7XG4gIG1haW4uYXBwZW5kQ2hpbGQodG9kb0l0ZW1zKTtcblxuICBjb25zdCB0b2RvTGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ1bFwiKTtcbiAgdG9kb0xpc3QuaWQgPSBcInRvZG8tbGlzdFwiO1xuICB0b2RvSXRlbXMuYXBwZW5kQ2hpbGQodG9kb0xpc3QpO1xuXG4gIGNvbnN0IGNvbXBsZXRlSXRlbXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb21wbGV0ZUl0ZW1zLmlubmVyVGV4dCA9IFwiSXRlbXMgQ29tcGxldGVkXCI7XG4gIG1haW4uYXBwZW5kQ2hpbGQoY29tcGxldGVJdGVtcyk7XG5cbiAgY29uc3QgY29tcGxldGVMaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInVsXCIpO1xuICBjb21wbGV0ZUxpc3QuaWQgPSBcImNvbXBsZXRlLWxpc3RcIjtcbiAgY29tcGxldGVJdGVtcy5hcHBlbmRDaGlsZChjb21wbGV0ZUxpc3QpO1xuXG4gIGJ1aWxkVG9kb0xpc3QodG9kb0xpc3RJdGVtcywgdG9kb0xpc3QsIGNvbXBsZXRlTGlzdCwgcHJvamVjdHMpO1xuXG4gIC8vIEZvb3RlciBlbGVtZW50XG4gIGNvbnN0IGZvb3RlclRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBmb290ZXJUZXh0LmlubmVyVGV4dCA9IFwiRm9vdGVyIHRleHQgZ29lcyBoZXJlXCI7XG4gIGZvb3Rlci5hcHBlbmRDaGlsZChmb290ZXJUZXh0KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFkZFRhc2sodG9kb0xpc3RJdGVtcywgcHJvamVjdHMpIHtcbiAgY29uc3QgYWRkVGFza0Zyb20gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBhZGRUYXNrRnJvbS5pZCA9IFwiYWRkLXRhc2stZm9ybVwiO1xuICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGFkZFRhc2tGcm9tKTtcblxuICBjb25zdCBmb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImZvcm1cIik7XG4gIGFkZFRhc2tGcm9tLmFwcGVuZENoaWxkKGZvcm0pO1xuXG4gIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICB0aXRsZS50eXBlID0gXCJ0ZXh0Ym94XCI7XG4gIHRpdGxlLm5hbWUgPSBcInRpdGxlXCI7XG4gIHRpdGxlLnBsYWNlaG9sZGVyID0gXCJ0aXRsZVwiO1xuICBmb3JtLmFwcGVuZENoaWxkKHRpdGxlKTtcblxuICBjb25zdCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgZGVzY3JpcHRpb24udHlwZSA9IFwidGV4dGJveFwiO1xuICBkZXNjcmlwdGlvbi5uYW1lID0gXCJkZXNjcmlwdGlvblwiO1xuICBkZXNjcmlwdGlvbi5wbGFjZWhvbGRlciA9IFwiZGVzY3JpcHRpb25cIjtcbiAgZm9ybS5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbik7XG5cbiAgY29uc3QgZHVlRGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgZHVlRGF0ZS50eXBlID0gXCJEYXRlXCI7XG4gIGR1ZURhdGUubmFtZSA9IFwiZHVlRGF0ZVwiO1xuICBmb3JtLmFwcGVuZENoaWxkKGR1ZURhdGUpO1xuXG4gIGNvbnN0IHByaW9yaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNlbGVjdFwiKTtcbiAgcHJpb3JpdHkubmFtZSA9IFwicHJpb3JpdHlcIjtcbiAgZm9ybS5hcHBlbmRDaGlsZChwcmlvcml0eSk7XG4gIGNvbnN0IG9wdGlvbkxvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIik7XG4gIG9wdGlvbkxvdy52YWx1ZSA9IFwiTG93XCI7XG4gIG9wdGlvbkxvdy5pbm5lclRleHQgPSBcIkxvd1wiO1xuICBwcmlvcml0eS5hcHBlbmRDaGlsZChvcHRpb25Mb3cpO1xuICBjb25zdCBvcHRpb25MTWVkaXVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKTtcbiAgb3B0aW9uTE1lZGl1bS52YWx1ZSA9IFwiTWVkaXVtXCI7XG4gIG9wdGlvbkxNZWRpdW0uaW5uZXJUZXh0ID0gXCJNZWRpdW1cIjtcbiAgcHJpb3JpdHkuYXBwZW5kQ2hpbGQob3B0aW9uTE1lZGl1bSk7XG4gIGNvbnN0IG9wdGlvbkhpZ2ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpO1xuICBvcHRpb25IaWdoLnZhbHVlID0gXCJIaWdoXCI7XG4gIG9wdGlvbkhpZ2guaW5uZXJUZXh0ID0gXCJIaWdoXCI7XG4gIHByaW9yaXR5LmFwcGVuZENoaWxkKG9wdGlvbkhpZ2gpO1xuXG4gIGNvbnN0IHByb2plY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2VsZWN0XCIpO1xuICBwcm9qZWN0Lm5hbWUgPSBcInByb2plY3RcIjtcbiAgZm9ybS5hcHBlbmRDaGlsZChwcm9qZWN0KTtcblxuICBmb3IgKGNvbnN0IHByb2plY3RJdGVtIG9mIHByb2plY3RzKSB7XG4gICAgY29uc3Qgb3B0aW9uUHJvamVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIik7XG4gICAgb3B0aW9uUHJvamVjdC52YWx1ZSA9IHByb2plY3RJdGVtLnByb2plY3Q7XG4gICAgb3B0aW9uUHJvamVjdC5pbm5lclRleHQgPSBwcm9qZWN0SXRlbS5wcm9qZWN0O1xuICAgIHByb2plY3QuYXBwZW5kQ2hpbGQob3B0aW9uUHJvamVjdCk7XG4gIH1cblxuICBjb25zdCBzdWJtaXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gIHN1Ym1pdC50eXBlID0gXCJzdWJtaXRcIjtcbiAgZm9ybS5hcHBlbmRDaGlsZChzdWJtaXQpO1xuXG4gIGZvcm0uYWRkRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgY29uc3QgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoZm9ybSk7XG4gICAgY29uc3QgdGl0bGUgPSBmb3JtRGF0YS5nZXQoXCJ0aXRsZVwiKTtcbiAgICBjb25zdCBkZXNjcmlwdGlvbiA9IGZvcm1EYXRhLmdldChcImRlc2NyaXB0aW9uXCIpO1xuICAgIGNvbnN0IGR1ZURhdGUgPSBmb3JtRGF0YS5nZXQoXCJkdWVEYXRlXCIpO1xuICAgIGNvbnN0IHByaW9yaXR5ID0gZm9ybURhdGEuZ2V0KFwicHJpb3JpdHlcIik7XG4gICAgY29uc3QgcHJvamVjdCA9IGZvcm1EYXRhLmdldChcInByb2plY3RcIik7XG5cbiAgICBjb25zdCBpdGVtID0gbmV3IHRvZG8udG9kb0xpc3QoXG4gICAgICB0aXRsZSxcbiAgICAgIGRlc2NyaXB0aW9uLFxuICAgICAgZHVlRGF0ZSxcbiAgICAgIHByaW9yaXR5LFxuICAgICAgcHJvamVjdFxuICAgICk7XG5cbiAgICB0b2RvTGlzdEl0ZW1zLnB1c2goaXRlbSk7XG5cbiAgICBkb2N1bWVudC5ib2R5LmlubmVySFRNTCA9IFwiXCI7XG5cbiAgICBwYWdlTG9hZCh0b2RvTGlzdEl0ZW1zLCBwcm9qZWN0cyk7XG4gIH0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYnVpbGRUb2RvTGlzdCh0b2RvTGlzdEl0ZW1zLCB0b2RvTGlzdCwgY29tcGxldGVMaXN0LCBwcm9qZWN0cykge1xuICBjb25zdCBjcmVhdGVMaXN0SXRlbSA9IChpdGVtLCBpKSA9PiB7XG4gICAgY29uc3QgbGlzdEl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XG5cbiAgICBjb25zdCBjb21wbGV0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICBjb21wbGV0ZS50eXBlID0gXCJjaGVja2JveFwiO1xuICAgIGNvbXBsZXRlLmNoZWNrZWQgPSBpdGVtLmNvbXBsZXRlO1xuICAgIGxpc3RJdGVtLmFwcGVuZENoaWxkKGNvbXBsZXRlKTtcbiAgICBjb21wbGV0ZS5hZGRFdmVudExpc3RlbmVyKFwiY2hhbmdlXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGlmICh0b2RvTGlzdEl0ZW1zW2ldLmNvbXBsZXRlID09IGZhbHNlKSB7XG4gICAgICAgIHRvZG9MaXN0SXRlbXNbaV0uY29tcGxldGVUYXNrKGksIHRvZG9MaXN0SXRlbXMpO1xuICAgICAgICBkb2N1bWVudC5ib2R5LmlubmVySFRNTCA9IFwiXCI7XG4gICAgICAgIHBhZ2VMb2FkKHRvZG9MaXN0SXRlbXMsIHByb2plY3RzKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRvZG9MaXN0SXRlbXNbaV0udW5jb21wbGV0ZVRhc2soaSwgdG9kb0xpc3RJdGVtcyk7XG4gICAgICAgIGRvY3VtZW50LmJvZHkuaW5uZXJIVE1MID0gXCJcIjtcbiAgICAgICAgcGFnZUxvYWQodG9kb0xpc3RJdGVtcywgcHJvamVjdHMpO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHRpdGxlLmlubmVyVGV4dCA9IGl0ZW0udGl0bGU7XG4gICAgbGlzdEl0ZW0uYXBwZW5kQ2hpbGQodGl0bGUpO1xuXG4gICAgY29uc3QgZHVlRGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgZHVlRGF0ZS5pbm5lclRleHQgPSBpdGVtLmR1ZURhdGU7XG4gICAgbGlzdEl0ZW0uYXBwZW5kQ2hpbGQoZHVlRGF0ZSk7XG5cbiAgICByZXR1cm4gbGlzdEl0ZW07XG4gIH07XG5cbiAgbGV0IGkgPSAwO1xuICBmb3IgKGNvbnN0IGl0ZW0gb2YgdG9kb0xpc3RJdGVtcykge1xuICAgIGNvbnN0IGxpc3RJdGVtID0gY3JlYXRlTGlzdEl0ZW0oaXRlbSwgaSk7XG5cbiAgICBpZiAoaXRlbS5jb21wbGV0ZSkge1xuICAgICAgY29tcGxldGVMaXN0LmFwcGVuZENoaWxkKGxpc3RJdGVtKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdG9kb0xpc3QuYXBwZW5kQ2hpbGQobGlzdEl0ZW0pO1xuICAgIH1cbiAgICBpID0gaSArIDE7XG4gIH1cbn1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==