import todoList from "./todo";

// Initial load of the page
export function pageLoad(todoListItems) {
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
    addTask(todoListItems);
  });

  // Main element
  const list = document.createElement("ul");
  list.id = "todo-list";
  main.appendChild(list);

  for (const item of todoListItems) {
    const listItem = document.createElement("li");
    list.appendChild(listItem);

    const form = document.createElement("form");
    listItem.appendChild(form);

    const complete = document.createElement("input");
    complete.type = "checkbox";
    complete.checked = item.complete;
    form.appendChild(complete);

    const title = document.createElement("input");
    title.type = "textbox";
    title.value = item.title;
    form.appendChild(title);

    const dueDate = document.createElement("input");
    dueDate.type = "date";
    dueDate.value = item.dueDate;
    form.appendChild(dueDate);

    const submit = document.createElement("input");
    submit.type = "submit";
    form.appendChild(submit);
  }

  // Footer element
  const footerText = document.createElement("div");
  footerText.innerText = "Footer text goes here";
  footer.appendChild(footerText);
}

export function addTask(todoListItems) {
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

  const project = document.createElement("input");
  project.type = "textbox";
  project.name = "project";
  project.defaultValue = "default";
  form.appendChild(project);

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

    const item = new todoList(title, description, dueDate, priority, project);

    todoListItems.push(item);

    document.body.innerHTML = "";

    pageLoad(todoListItems);
  });
}
