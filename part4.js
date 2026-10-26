var tasks = [];
var input = document.getElementById("taskInput");
var list = document.getElementById("taskList");

function showTasks() {
  list.innerHTML = "";
  for (var i = 0; i < tasks.length; i++) {
    showTask(i);
  }
}

function showTask(i) {
  var li = document.createElement("li");

  var span = document.createElement("span");
  span.textContent = tasks[i].text;
  if (tasks[i].done === true) {
    span.style.textDecoration = "line-through";
  }
  span.addEventListener("click", function () {
    tasks[i].done = !tasks[i].done;
    showTasks();
  });

  var button = document.createElement("button");
  button.textContent = "Delete";
  button.addEventListener("click", function () {
    deleteTask(i);
  });

  li.appendChild(span);
  li.appendChild(button);
  list.appendChild(li);
}

function deleteTask(index) {
  var newTasks = [];
  for (var i = 0; i < tasks.length; i++) {
    if (i !== index) {
      newTasks.push(tasks[i]);
    }
  }
  tasks = newTasks;
  showTasks();
}

function addTask() {
  if (input.value === "") {
    return;
  }
  tasks.push({ text: input.value, done: false });
  input.value = "";
  showTasks();
}

document.getElementById("addTask").addEventListener("click", addTask);
