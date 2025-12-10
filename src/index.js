import "./css/style.css";
import Collapse from "./js/Collapse.js";

document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll(".collapse-button");

  buttons.forEach((button) => {
    const targetId = button.dataset.collapseTarget;
    const content = document.getElementById(targetId);

    if (content) {
      new Collapse(button, content);
    }
  });
});
