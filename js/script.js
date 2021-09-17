"use strict";

const boxes = document.querySelectorAll(".box-n");

window.addEventListener("scroll", function () {
  boxes.forEach((box) => {
    const distanceFromTop = box.getBoundingClientRect().top;
    translateElement(distanceFromTop, box);
  });
});

function translateElement(distance, elem) {
  if (distance <= 500) {
    elem.classList.add("normal");
  } else {
    elem.classList.remove("normal");
  }
}
