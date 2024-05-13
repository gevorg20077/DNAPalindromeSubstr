import SubstrDisplay from "./SubstrDisplay.js";

const substrDisplay = new SubstrDisplay();

document.querySelector(".substr").addEventListener('submit', function (event) {
  event.preventDefault();
  substrDisplay.handleSubmit(event);
});