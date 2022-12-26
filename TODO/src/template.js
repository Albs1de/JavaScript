import { format } from "date-fns";

export default function createTemplate() {
  const mainDiv = document.createElement("body");
  mainDiv.classList.add("mainDiv");
  mainDiv.appendChild(navBar());

  // body div
  const bodyDiv = document.createElement("div");
  bodyDiv.classList.add("bodyDiv");
  bodyDiv.appendChild(leftDiv());
  bodyDiv.appendChild(rightDiv());
  mainDiv.appendChild(bodyDiv);

  return mainDiv;
}

const navBar = () => {
  // create navbar
  const navBar = document.createElement("nav");
  navBar.classList.add("navbar");
  navBar.classList.add("navbar-expand-lg");

  const navBarText = document.createElement("h1");
  navBarText.classList.add("navbar-text");
  navBarText.textContent = "To Do List";
  navBar.appendChild(navBarText);
  return navBar;
};
const dateChanges = () => {
  const dateInput = document.createElement("input");
  dateInput.type = "date";
  dateInput.classList.add("dateInput");
  dateInput.addEventListener("change", () => {
    const selectedDate = dateInput.value;

    //formatiere
    const formattedDate = format(selectedDate("dd.MM.yyyy"));

    // erstelle neues Element um das formatierte Datum anzuzeigen
    const dateElement = document.createElement("p");
    dateElement.textContent = formattedDate;

    // füge das Element in den DOM ein
    const newTask = document.querySelector(".newElement");
    newTask.appendChild(dateElement);
  });
};

const leftDiv = () => {
  const leftDiv = document.createElement("div");
  leftDiv.classList.add("leftDiv");
  const leftDivTitle = document.createElement("h2");
  leftDivTitle.classList.add("leftDivTitle");
  leftDivTitle.textContent = "Projects";

  const buttons = [
    {
      text: "Inbox",
      onclick: () => updateContent(inboxContent()),
      class: "inboxBtn",
    },
    {
      text: "Today",
      onclick: () => updateContent(todayContent()),
      class: "todayBtn",
    },
    {
      text: "This Week",
      onclick: () => updateContent(thisWeekContent()),
      class: "thisWeekBtn",
    },
  ];
  // Create for each Button element an button
  buttons.forEach((button) => {
    const element = document.createElement("button");

    element.textContent = button.text;

    element.classList.add(button.class, "leftbtnItems");
    element.addEventListener("click", button.onclick);

    leftDiv.appendChild(element);
  });
  leftDiv.appendChild(leftDivTitle);

  const projectBtn = [
    {
      text: "+ Add Project",
      onclick: () => updateContent(addProjectBtn()),
      class: "addProjectBtn",
    },
  ];
  projectBtn.forEach((button) => {
    const element = document.createElement("button");
    element.textContent = button.text;
    element.classList.add(button.class, "leftbtnItems");
    element.addEventListener("click", button.onclick);
    leftDiv.appendChild(element);
  });
  return leftDiv;
};

const rightDiv = () => {
  const rightDiv = document.createElement("div");
  rightDiv.classList.add("rightDiv");
  rightDiv.setAttribute("id", "rightDiv");
  const rightDivTitle = document.createElement("h2");
  rightDivTitle.classList.add("rightDivTitle");

  rightDivTitle.textContent = "Inbox";
  rightDiv.appendChild(rightDivTitle);
  const getBtnInboxContent = inboxContent();

  return rightDiv;
};

const addProjectBtn = () => {
  const addProjectBtns = document.createElement("button");
  addProjectBtns.classList.add("addProjectBtn", "leftbtnItems");
  addProjectBtns.textContent = "+ Add Project";

  addProjectBtns.addEventListener("click", () => {
    const projectDiv = document.querySelector(".projectDiv");
    const newProject = document.createElement("button");
    newProject.classList.add("newProject", "leftbtnItems");
    newProject.textContent = "New Project";
  });
  dateChanges();
  addProjectBtn.appendChild(addProjectBtns);
  return addProjectBtn;
};

function updateContent(content) {
  const rightDiv = document.querySelector("#rightDiv");
  //rightDiv.innerHTML = content;
  rightDiv.innerHTML = "";
  rightDiv.appendChild(content);
}

// dynamic content for right div with Inbox
function inboxContent() {
  const inboxContent = document.createElement("div");
  inboxContent.classList.add("inboxContent");

  const inboxContentTitle = document.createElement("h2");
  inboxContentTitle.classList.add("inboxContentTitle");
  inboxContentTitle.textContent = "Inbox";
  inboxContent.appendChild(inboxContentTitle);

  const btnInboxContent = document.createElement("button");
  btnInboxContent.classList.add("btnInboxContent");
  btnInboxContent.textContent = "+ Add Task";

  const addBtn = document.createElement("button");
  addBtn.classList.add("addBtn");
  addBtn.textContent = "Add";

  const deleteBtn = document.createElement("button");
  deleteBtn.classList.add("deleteBtn");
  deleteBtn.textContent = "Delete";

  btnInboxContent.addEventListener("click", function addTask() {
    const newTask = document.createElement("input");
    newTask.classList.add("newTask", "input-group");
    newTask.placeholder = "New Task";

    //hide btnInboxContent
    btnInboxContent.classList.add("hidden");

    inboxContent.insertBefore(newTask, btnInboxContent);
    inboxContent.insertBefore(addBtn, btnInboxContent);
    inboxContent.insertBefore(deleteBtn, btnInboxContent);
  });

  addBtn.addEventListener("click", () => {
    btnInboxContent.classList.remove("hidden");

    const value = document.querySelector(".newTask").value;
    const newTask = document.querySelector(".newTask");
    const newElement = document.createElement("p");
    newElement.textContent = value;
    newElement.classList.add("newElement");

    inboxContent.insertBefore(newElement, btnInboxContent);
    inboxContent.removeChild(newTask);
    inboxContent.removeChild(addBtn);
    inboxContent.removeChild(deleteBtn);
  });

  inboxContent.appendChild(btnInboxContent);

  return inboxContent;
}

// dynamic content for right div with Today
const todayContent = () => {
  const todayContet = document.createElement("div");
  todayContet.classList.add("todayContent");

  const todayContentTitle = document.createElement("h2");
  todayContentTitle.classList.add("todayContentTitle");
  todayContentTitle.textContent = "Today";

  const btnTodayContent = document.createElement("button");
  btnTodayContent.classList.add("btnTodayContent");
  btnTodayContent.textContent = "+ Add Task";

  btnTodayContent.addEventListener("click", function addTask() {
    const newTask = document.createElement("input");
    newTask.type = "text";
    newTask.classList.add("newTask", "input-group");
    newTask.placeholder = "New Task";
    todayContet.insertBefore(newTask, btnTodayContent);
  });
  todayContet.appendChild(todayContentTitle);
  todayContet.appendChild(btnTodayContent);
  return todayContet;
};

// dynamic content for right div with This Week
const thisWeekContent = () => {
  const thisWeekContent = document.createElement("div");
  thisWeekContent.classList.add("thisWeekContent");

  const thisWeekContentTitle = document.createElement("h2");
  thisWeekContentTitle.classList.add("thisWeekContentTitle");
  thisWeekContentTitle.textContent = "This Week";
  thisWeekContent.appendChild(thisWeekContentTitle);

  return thisWeekContent;
};

// dynamic content for right div with Projects
const projectsContent = () => {
  const projectsContent = document.createElement("div");
  projectsContent.classList.add("projectsContent");

  const projectsContentTitle = document.createElement("h2");
  projectsContentTitle.classList.add("projectsContentTitle");
  projectsContentTitle.textContent = "Projects";
  projectsContent.appendChild(projectsContentTitle);

  return projectsContent;
};
