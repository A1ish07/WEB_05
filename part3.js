var hover = document.getElementById("hover");
var input = document.getElementById("input");
var output = document.getElementById("output");
var a = document.getElementById("a");
var b = document.getElementById("b");
var op = document.getElementById("op");
var result = document.getElementById("result");

function mouseOver() {
  hover.style.backgroundColor = "orange";
}

function mouseOut() {
  hover.style.backgroundColor = "lightgray";
}

function showInput() {
  output.textContent = input.value;
}

function calculate() {
  var x = Number(a.value);
  var y = Number(b.value);
  if (op.value === "+") {
    result.textContent = x + y;
  } else if (op.value === "-") {
    result.textContent = x - y;
  } else if (op.value === "*") {
    result.textContent = x * y;
  } else if (op.value === "/") {
    if (y === 0) {
      result.textContent = "Cannot divide by zero";
    } else {
      result.textContent = x / y;
    }
  }
}

hover.addEventListener("mouseover", mouseOver);
hover.addEventListener("mouseout", mouseOut);
input.addEventListener("keyup", showInput);
document.getElementById("equals").addEventListener("click", calculate);
