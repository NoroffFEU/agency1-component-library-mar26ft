const dropdown = document.querySelector(".dropdown");
const trigger = document.querySelector(".dropdown__trigger");

trigger.addEventListener("click", function (event) {
  event.stopPropagation();
  dropdown.classList.toggle("open");
  trigger.setAttribute("aria-expanded", dropdown.classList.contains("open"));
});

// Close when clicking outside
document.addEventListener("click", function () {
  dropdown.classList.remove("open");
  trigger.setAttribute("aria-expanded", "false");
});

// Prevent closing when clicking inside the menu
dropdown.addEventListener("click", function (event) {
  event.stopPropagation();
});