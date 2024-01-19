const button1 = document.querySelector("#button1");
const button2 = document.querySelector("#button2");
const counter = document.querySelector("#p");

const start = function () {
  let text = counter.textContent;
  text = Number(text);
  text = text + 1;
  counter.textContent = text;
  setTimeout(start, 1000);
};
const reset = function () {
  counter.textContent = 0;
};

button1.addEventListener("click", start);
button2.addEventListener("click", reset);