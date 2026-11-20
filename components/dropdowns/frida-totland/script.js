const dropdown = document.querySelector(".dropdown");
const trigger = document.querySelector(".dropdown__trigger");

trigger.addEventListener("click", function (event) {
  event.stopPropagation();
  dropdown.classList.toggle("open");
  trigger.setAttribute("aria-expanded", dropdown.classList.contains("open"));
});

function closeDropdown() {
  dropdown.classList.remove("open");
  trigger.setAttribute("aria-expanded", "false");
}

// Close when clicking outside
document.addEventListener("click", closeDropdown);

// Close with Escape
document.addEventListener("keydown", function (event) {
  if (event.key === "Escape") {
    closeDropdown();
    trigger.focus();
  }
});

// Prevent closing when clicking inside the menu
dropdown.addEventListener("click", function (event) {
  event.stopPropagation();
});