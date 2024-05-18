"use strict";

document.addEventListener("DOMContentLoaded", () => {
  const slides = document.querySelectorAll(".slide");
  const prev = document.querySelector(".leftnav");
  const next = document.querySelector(".rightnav");
  const dots = document.querySelectorAll(".dot");
  let currentslide = 0;

  const totalslides = slides.length;

  slides[currentslide].style.left = "0";
  dots[currentslide].classList.add("active");

  function showslide(index) {
    slides.forEach((slide, i) => {
      if (i < index) {
        slide.style.left = "-100%";
      } else if (i === index) {
        slide.style.left = "0";
      } else {
        slide.style.left = "100%";
      }
    });

    dots.forEach((dot, i) => {
      if (i === index) {
        dot.classList.add("active");
      } else {
        dot.classList.remove("active");
      }
    });
  }

  function nextslide() {
    currentslide = (currentslide + 1) % totalslides;

    setTimeout(() => {
      showslide(currentslide);
    }, 10);
  }

  function prevslide() {
    currentslide = (currentslide - 1 + totalslides) % totalslides;
    setTimeout(() => {
      showslide(currentslide);
    }, 10);
  }

  next.addEventListener("click", nextslide);
  prev.addEventListener("click", prevslide);

  setInterval(nextslide, 3000);

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
