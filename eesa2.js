"use strict";

document.addEventListener("DOMContentLoaded", () => {
  const textAnim = document.getElementById("animate_head");

  let isExpanded = true;

  function variableSpacing() {
    if (isExpanded) {
      textAnim.style.letterSpacing = "1px";
    } else {
      textAnim.style.letterSpacing = "4px";
    }
    isExpanded = !isExpanded;
  }

  setInterval(variableSpacing, 1000);
});
