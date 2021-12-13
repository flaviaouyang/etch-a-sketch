// copy  website address to clipboard
function copyAddress() {
  navigator.clipboard.writeText(
    "https://flaviaouyang.github.io/etch-a-sketch/"
  );
  alert("Website URL copied to clipboard");
}

const share = document.getElementById("share");
share.addEventListener("click", function () {
  if (!navigator.clipboard) {
    alert("You browser does not support this feature");
    return false;
  }
  copyAddress();
});

const canvas = document.querySelector(".canvas-container");
const clear = document.querySelector(".clear");
const mono = document.querySelector(".mono");
const poly = document.querySelector(".poly");

function monoPaint(element) {
  console.log("mono triggered");
  element.target.style.backgroundColor = "black";
}

function clearCanvas() {
  console.log("clear triggered");
  canvas.innerHTML = "";
  createCanvas("mono");
}

function polyPaint(element) {
  console.log("triggered");
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  console.log(`rgb(${r}, ${g}, ${b})`);
  element.target.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
}

createCanvas = (mode) => {
    canvas.innerHTML = "";
  for (let i = 0; i < 400; i++) {
    const div = document.createElement("div");
    div.classList.add("square");
    div.style.border = "1px solid black";
    div.style.backgroundColor = "white";
    if (mode === "mono") {
      div.addEventListener("mouseover", monoPaint);
    } else {
      div.addEventListener("mouseover", polyPaint);
    }
    canvas.appendChild(div);
  }
};
mono.addEventListener("click", function() {
    createCanvas("mono");
})
clear.addEventListener("click", clearCanvas);
poly.addEventListener("click", function () {
  createCanvas("poly");
});
createCanvas("mono");
