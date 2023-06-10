/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
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
/*!*********************!*\
  !*** ./src/todo.js ***!
  \*********************/
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

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9kby5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7VUFBQTtVQUNBOzs7OztXQ0RBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7Ozs7QUNOQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFTztBQUNQO0FBQ0E7QUFDQTtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7O0FBRU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07O0FBRU47QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWJwYWNrLWRlbW8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vd2VicGFjay1kZW1vL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly93ZWJwYWNrLWRlbW8vd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly93ZWJwYWNrLWRlbW8vd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly93ZWJwYWNrLWRlbW8vLi9zcmMvdG9kby5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBUaGUgcmVxdWlyZSBzY29wZVxudmFyIF9fd2VicGFja19yZXF1aXJlX18gPSB7fTtcblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIi8vIENyZWF0aW5nIGEgbmV3IHRvZG9cbmV4cG9ydCBjbGFzcyB0b2RvTGlzdCB7XG4gIGNvbnN0cnVjdG9yKHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHksIHByb2plY3QpIHtcbiAgICB0aGlzLnRpdGxlID0gdGl0bGU7XG4gICAgdGhpcy5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xuICAgIHRoaXMuZHVlRGF0ZSA9IGR1ZURhdGU7XG4gICAgdGhpcy5wcmlvcml0eSA9IHByaW9yaXR5O1xuICAgIHRoaXMucHJvamVjdCA9IHByb2plY3Q7XG4gICAgdGhpcy5jb21wbGV0ZSA9IGZhbHNlO1xuICB9XG5cbiAgY29tcGxldGVUYXNrKGluZGV4LCB0b2RvTGlzdEl0ZW1zKSB7XG4gICAgdG9kb0xpc3RJdGVtc1tpbmRleF0uY29tcGxldGUgPSB0cnVlO1xuICB9XG5cbiAgdW5jb21wbGV0ZVRhc2soaW5kZXgsIHRvZG9MaXN0SXRlbXMpIHtcbiAgICB0b2RvTGlzdEl0ZW1zW2luZGV4XS5jb21wbGV0ZSA9IGZhbHNlO1xuICB9XG5cbiAgdXBkYXRlVGFzayhcbiAgICBpbmRleCxcbiAgICB0b2RvTGlzdEl0ZW1zLFxuICAgIHRpdGxlLFxuICAgIGRlc2NyaXB0aW9uLFxuICAgIGR1ZURhdGUsXG4gICAgcHJpb3JpdHksXG4gICAgcHJvamVjdFxuICApIHtcbiAgICB0b2RvTGlzdEl0ZW1zW2luZGV4XS50aXRsZSA9IHRpdGxlO1xuICAgIHRvZG9MaXN0SXRlbXNbaW5kZXhdLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XG4gICAgdG9kb0xpc3RJdGVtc1tpbmRleF0uZHVlRGF0ZSA9IGR1ZURhdGU7XG4gICAgdG9kb0xpc3RJdGVtc1tpbmRleF0ucHJpb3JpdHkgPSBwcmlvcml0eTtcbiAgICB0b2RvTGlzdEl0ZW1zW2luZGV4XS5wcm9qZWN0ID0gcHJvamVjdDtcbiAgfVxuXG4gIGRlbGV0ZVRhc2soaW5kZXgsIHRvZG9MaXN0SXRlbXMpIHtcbiAgICB0b2RvTGlzdEl0ZW1zLnNwbGljZShpbmRleCwgMSk7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIHByb2plY3Qge1xuICBjb25zdHJ1Y3Rvcihwcm9qZWN0KSB7XG4gICAgdGhpcy5wcm9qZWN0ID0gcHJvamVjdDtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gc2F2ZUxvY2FsKHRvZG9MaXN0SXRlbXMsIHByb2plY3RzKSB7XG4gIGlmIChzdG9yYWdlQXZhaWxhYmxlKFwibG9jYWxTdG9yYWdlXCIpKSB7XG4gICAgcG9wdWxhdGVTdG9yYWdlKHRvZG9MaXN0SXRlbXMsIHByb2plY3RzKTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gbG9hZExvY2FsKHRvZG9MaXN0SXRlbXMsIHByb2plY3RzKSB7XG4gIGlmIChzdG9yYWdlQXZhaWxhYmxlKFwibG9jYWxTdG9yYWdlXCIpKSB7XG4gICAgLy8gTG9hZCBwcm9qZWN0c1xuICAgIGxldCBpID0gMDtcbiAgICBsZXQgY2hlY2s7XG4gICAgZG8ge1xuICAgICAgY29uc3QgbG9jYWxQcm9qZWN0ID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oaSArIFwiIFByb2plY3RcIik7XG4gICAgICBjb25zdCBuZXdQcm9qZWN0ID0gbmV3IHByb2plY3QobG9jYWxQcm9qZWN0KTtcbiAgICAgIHByb2plY3RzLnB1c2gobmV3UHJvamVjdCk7XG4gICAgICBpID0gaSArIDE7XG4gICAgICBjaGVjayA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKGkgKyBcIiBQcm9qZWN0XCIpO1xuICAgIH0gd2hpbGUgKGNoZWNrICE9IG51bGwpO1xuXG4gICAgLy8gTG9hZCB0b2Rvc1xuICAgIGkgPSAwO1xuICAgIGRvIHtcbiAgICAgIGNvbnN0IHRpdGxlID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oaSArIFwiIFRpdGxlXCIpO1xuICAgICAgY29uc3QgZGVzY3JpcHRpb24gPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShpICsgXCIgRGVzY3JpcHRpb25cIik7XG4gICAgICBjb25zdCBkdWVEYXRlID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oaSArIFwiIGR1ZURhdGVcIik7XG4gICAgICBjb25zdCBwcmlvcml0eSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKGkgKyBcIiBQcmlvcml0eVwiKTtcbiAgICAgIGNvbnN0IHByb2plY3QgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShpICsgXCIgVGFza1Byb2plY3RcIik7XG5cbiAgICAgIGNvbnN0IGl0ZW0gPSBuZXcgdG9kb0xpc3QodGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSwgcHJvamVjdCk7XG5cbiAgICAgIHRvZG9MaXN0SXRlbXMucHVzaChpdGVtKTtcblxuICAgICAgaSA9IGkgKyAxO1xuICAgICAgY2hlY2sgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShpICsgXCIgVGl0bGVcIik7XG4gICAgfSB3aGlsZSAoY2hlY2sgIT0gbnVsbCk7XG4gIH1cbn1cblxuZnVuY3Rpb24gc3RvcmFnZUF2YWlsYWJsZSh0eXBlKSB7XG4gIGxldCBzdG9yYWdlO1xuICB0cnkge1xuICAgIHN0b3JhZ2UgPSB3aW5kb3dbdHlwZV07XG4gICAgY29uc3QgeCA9IFwiX19zdG9yYWdlX3Rlc3RfX1wiO1xuICAgIHN0b3JhZ2Uuc2V0SXRlbSh4LCB4KTtcbiAgICBzdG9yYWdlLnJlbW92ZUl0ZW0oeCk7XG4gICAgcmV0dXJuIHRydWU7XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICByZXR1cm4gKFxuICAgICAgZSBpbnN0YW5jZW9mIERPTUV4Y2VwdGlvbiAmJlxuICAgICAgLy8gZXZlcnl0aGluZyBleGNlcHQgRmlyZWZveFxuICAgICAgKGUuY29kZSA9PT0gMjIgfHxcbiAgICAgICAgLy8gRmlyZWZveFxuICAgICAgICBlLmNvZGUgPT09IDEwMTQgfHxcbiAgICAgICAgLy8gdGVzdCBuYW1lIGZpZWxkIHRvbywgYmVjYXVzZSBjb2RlIG1pZ2h0IG5vdCBiZSBwcmVzZW50XG4gICAgICAgIC8vIGV2ZXJ5dGhpbmcgZXhjZXB0IEZpcmVmb3hcbiAgICAgICAgZS5uYW1lID09PSBcIlF1b3RhRXhjZWVkZWRFcnJvclwiIHx8XG4gICAgICAgIC8vIEZpcmVmb3hcbiAgICAgICAgZS5uYW1lID09PSBcIk5TX0VSUk9SX0RPTV9RVU9UQV9SRUFDSEVEXCIpICYmXG4gICAgICAvLyBhY2tub3dsZWRnZSBRdW90YUV4Y2VlZGVkRXJyb3Igb25seSBpZiB0aGVyZSdzIHNvbWV0aGluZyBhbHJlYWR5IHN0b3JlZFxuICAgICAgc3RvcmFnZSAmJlxuICAgICAgc3RvcmFnZS5sZW5ndGggIT09IDBcbiAgICApO1xuICB9XG59XG5cbmZ1bmN0aW9uIHBvcHVsYXRlU3RvcmFnZSh0b2RvTGlzdEl0ZW1zLCBwcm9qZWN0cykge1xuICAvLyBQcm9qZWN0c1xuICBsZXQgaSA9IDA7XG4gIGZvciAoY29uc3QgcHJvamVjdEl0ZW1zIG9mIHByb2plY3RzKSB7XG4gICAgaWYgKHByb2plY3RJdGVtcy5wcm9qZWN0ICE9IFwiQWxsXCIgJiYgcHJvamVjdEl0ZW1zLnByb2plY3QgIT0gXCJEZWZhdWx0XCIpIHtcbiAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKGkgKyBcIiBQcm9qZWN0XCIsIHByb2plY3RJdGVtcy5wcm9qZWN0KTtcbiAgICAgIGkgPSBpICsgMTtcbiAgICB9XG4gIH1cblxuICAvLyBUb2Rvc1xuICBpID0gMDtcbiAgZm9yIChjb25zdCB0b2RvSXRlbXMgb2YgdG9kb0xpc3RJdGVtcykge1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKGkgKyBcIiBUaXRsZVwiLCB0b2RvSXRlbXMudGl0bGUpO1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKGkgKyBcIiBEZXNjcmlwdGlvblwiLCB0b2RvSXRlbXMuZGVzY3JpcHRpb24pO1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKGkgKyBcIiBkdWVEYXRlXCIsIHRvZG9JdGVtcy5kdWVEYXRlKTtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShpICsgXCIgUHJpb3JpdHlcIiwgdG9kb0l0ZW1zLnByaW9yaXR5KTtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShpICsgXCIgVGFza1Byb2plY3RcIiwgdG9kb0l0ZW1zLnByb2plY3QpO1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKGkgKyBcIiBDb21wbGV0ZVwiLCB0b2RvSXRlbXMuY29tcGxldGUpO1xuICAgIGkgPSBpICsgMTtcbiAgfVxufVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9