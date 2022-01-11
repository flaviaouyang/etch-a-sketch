const share = document.getElementById("share");
const clearGrid = document.getElementById("clear-grid");
clearGrid.addEventListener("click", function(){
  gridMode = "none";
  clearCanvas();
});
share.addEventListener("click", function () {
  gridMode = "default";
  clearCanvas();
});

const canvas = document.querySelector(".canvas-container");
const clear = document.querySelector(".clear");
const mono = document.querySelector(".mono");
const poly = document.querySelector(".poly");
let gridMode = "default";

function monoPaint(element) {
  console.log("mono triggered");
  element.target.style.backgroundColor = "black";
}

function clearCanvas() {
  console.log("clear triggered");
  canvas.innerHTML = "";
  createCanvas("mono", gridMode);
}

function polyPaint(element) {
  console.log("triggered");
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  console.log(`rgb(${r}, ${g}, ${b})`);
  element.target.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
}

createCanvas = (mode, grid="default") => {
  canvas.innerHTML = "";
  for (let i = 0; i < 400; i++) {
    const div = document.createElement("div");
    div.classList.add("square");
    if (grid === "default") {
      div.style.border = "1px solid black";
    }
    div.style.backgroundColor = "white";
    if (mode === "mono") {
      div.addEventListener("mouseover", monoPaint);
    } else {
      div.addEventListener("mouseover", polyPaint);
    }
    canvas.appendChild(div);
  }
};
mono.addEventListener("click", function () {
  createCanvas("mono", gridMode);
});
clear.addEventListener("click", clearCanvas);
poly.addEventListener("click", function () {
  createCanvas("poly", gridMode);
});
createCanvas("mono", gridMode);
