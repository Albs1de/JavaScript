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

const leftDiv = () => {
  const leftDiv = document.createElement("div");
  leftDiv.classList.add("leftDiv");

  const inBoxBtn = document.createElement("button");
  inBoxBtn.classList.add("inboxBtn", "leftbtnItems");
  inBoxBtn.textContent = "Inbox";
  inBoxBtn.addEventListener("click", () => {
    updateContent(inboxContent().innerHTML);
  });
  leftDiv.appendChild(inBoxBtn);

  const todayBtn = document.createElement("button");
  todayBtn.classList.add("todayBtn", "leftbtnItems");
  todayBtn.textContent = "Today";
  todayBtn.addEventListener("click", () => {
    updateContent(todayContent().innerHTML);
  });

  leftDiv.appendChild(todayBtn);

  const thisWeekBtn = document.createElement("button");
  thisWeekBtn.classList.add("thisWeekBtn", "leftbtnItems");
  thisWeekBtn.textContent = "This Week";
  thisWeekBtn.addEventListener("click", () => {
    updateContent(thisWeekContent().innerHTML);
  });

  leftDiv.appendChild(thisWeekBtn);

  const projectTitle = document.createElement("h2");
  projectTitle.classList.add("projectTitle");
  projectTitle.textContent = "Projects";
  leftDiv.appendChild(projectTitle);

  // Project div
  const projectDiv = document.createElement("div");
  projectDiv.classList.add("projectDiv");
  leftDiv.appendChild(projectDiv);

  leftDiv.appendChild(addProjectBtn());
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

  rightDiv.appendChild(inboxContent());

  return rightDiv;
};

const addProjectBtn = () => {
  const addProjectBtn = document.createElement("button");
  addProjectBtn.classList.add("addProjectBtn", "leftbtnItems");
  addProjectBtn.textContent = "+ Add Project";

  addProjectBtn.addEventListener("click", () => {
    const projectDiv = document.querySelector(".projectDiv");
    const newProject = document.createElement("button");
    newProject.classList.add("newProject", "leftbtnItems");
    newProject.textContent = "New Project";
    projectDiv.appendChild(newProject);
  });

  return addProjectBtn;
};

function updateContent(content) {
  const rightDiv = document.querySelector("#rightDiv");
  rightDiv.innerHTML = content;
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

  btnInboxContent.addEventListener("click", function addTask() {
    const newTask = document.createElement("button");

    newTask.classList.add("newTask");
    newTask.textContent = "New Task";
    inboxContent.appendChild(newTask);
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
  todayContet.appendChild(todayContentTitle);

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
