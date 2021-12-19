const changePanel = document.querySelector("header");
const btn = document.querySelector("#btn");
const info = document.querySelector("#info");
const hex = document.querySelector("#hex");
const rgb = document.querySelector("#rgb");
let selectedH2;

changePanel.onclick = (event) => {
  let target = event.target;

  while (target !== this) {
    if (target.tagName === "H2") {
      activeClass(target);
      return;
    }
    target = target.parentNode;
  }
};

function activeClass(node) {
  if (selectedH2) {
    selectedH2.classList.remove("active");
  }
  selectedH2 = node;
  selectedH2.classList.add("active");
}

btn.addEventListener("click", () => {
  const red = Math.floor(Math.random() * 255);
  const green = Math.floor(Math.random() * 255);
  const blue = Math.floor(Math.random() * 255);

  const color = `rgb(${red}, ${green}, ${blue})`;

  if (rgb.className === "active") {
    info.innerHTML = color;
  } else if (hex.className === "active") {
    function rgbToHex(red, green, blue) {
      return (
        `#${((1 << 24) + (red << 16) + (green << 8) + blue).toString(16).slice(1)}`
      );
    }

    info.innerHTML = rgbToHex(red, green, blue);
  }
  document.body.style.background = color;
});

info.addEventListener("click", () => {
  let range = document.createRange();
  range.selectNode(info);
  window.getSelection().removeAllRanges();
  window.getSelection().addRange(range);
  document.execCommand("copy");
  window.getSelection().removeAllRanges();
});
