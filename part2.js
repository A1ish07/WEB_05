var text = document.getElementById("text");
var box = document.getElementById("box");
var list = document.getElementById("list");

function changeText() {
  text.textContent = "New text";
}

function changeColor() {
  box.style.backgroundColor = "lightblue";
}

function changeSize() {
  box.style.fontSize = "30px";
}

function addItem() {
  var li = document.createElement("li");
  li.textContent = "Item " + (list.children.length + 1);
  list.appendChild(li);
}

function removeItem() {
  var last = list.lastElementChild;
  if (last) {
    list.removeChild(last);
  }
}

document.getElementById("changeText").addEventListener("click", changeText);
document.getElementById("changeColor").addEventListener("click", changeColor);
document.getElementById("changeSize").addEventListener("click", changeSize);
document.getElementById("add").addEventListener("click", addItem);
document.getElementById("remove").addEventListener("click", removeItem);
