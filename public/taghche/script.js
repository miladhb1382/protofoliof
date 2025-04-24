"use strict";
const items = document.querySelectorAll(".item");
const overlay = document.getElementById("backDrop");
const content = document.getElementById("content");
console.log(overlay);
items.forEach((item) => {
  item.addEventListener("mouseenter", () => {
    overlay.style.display = "block";
    document.body.style.overflowY = "hidden";
  });
  item.addEventListener("mouseleave", () => {
    overlay.style.display = "none";
    document.body.style.overflowY = "";
  });
});
