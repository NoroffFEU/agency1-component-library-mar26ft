const totalPages = 3;

let currentPage = 1;

const numbersContainer = document.querySelector("#page-numbers-container");
const previousBtn = document.querySelector("#prev-btn");
const nextBtn = document.querySelector("#next-btn");

function getPageItems(current, total) {
  const items = [];
  for (let i = 1; i <= total; i++) {
    const isEdge = i === 1 || i === total;
    const isNearCurrent = Math.abs(i - current) <= 1;
    if (isEdge || isNearCurrent) {
      items.push(i);
    } else if (items[items.length - 1] !== '...') {
      items.push('...')
    }
  }
  return items;
}

function renderPagination() {
  numbersContainer.innerHTML = "";

  getPageItems(currentPage, totalPages).forEach((item) => {
    if (item === "...") {
      const ellipsis = document.createElement("span");
      ellipsis.classList.add("ellipsis");
      ellipsis.textContent = "...";
      numbersContainer.appendChild(ellipsis);
    } else {
      const pageNumber = document.createElement("a");
      pageNumber.classList.add("page-number");
      pageNumber.dataset.page = item;
      pageNumber.textContent = item;
      if (item === currentPage) {
        pageNumber.classList.add("active");
      }
      numbersContainer.appendChild(pageNumber);
    }
  });
  previousBtn.disabled = currentPage === 1;
  nextBtn.disabled = currentPage === totalPages;
}

previousBtn.addEventListener("click", () => {
  if (currentPage > 1) {
    currentPage--;
    renderPagination();
  }
});

nextBtn.addEventListener("click", () => {
  if (currentPage < totalPages) {
    currentPage++;
    renderPagination();
  }
});

numbersContainer.addEventListener("click", (e) => {
  const link = e.target.closest(".page-number");
  if (!link) return;
  currentPage = Number(link.dataset.page);
  renderPagination();
});

renderPagination();
