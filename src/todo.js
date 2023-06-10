// Creating a new todo
export class todoList {
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

export class project {
  constructor(project) {
    this.project = project;
  }
}

export function saveLocal(todoListItems, projects) {
  if (storageAvailable("localStorage")) {
    populateStorage(todoListItems, projects);
  }
}

export function loadLocal(todoListItems, projects) {
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
