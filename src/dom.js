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
  headerButton.innerText = "Add Task";
  header.appendChild(headerButton);

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
}

export function addTask(todoListItems) {
  const list = document.getElementById("todo-list");
}
