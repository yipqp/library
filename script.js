const formPopup = document.querySelector(".form-popup");
const addBookButton = document.querySelector(".add-book-button");
const cancelButton = document.querySelector(".cancel-button");
const blurContainer = document.querySelector(".blur-container");
const titleInput = document.querySelector("#title");
const authorInput = document.querySelector("#author");
const numPages = document.querySelector("#pageNumber");

function clearInputs() {
  titleInput.value = "";
  authorInput.value = "";
  numPages.value = "";
}

addBookButton.addEventListener("click", () => {
  formPopup.style.display = "block";
  blurContainer.style.display = "block";
  blurContainer.classList.add("blur");
});

cancelButton.addEventListener("click", () => {
  formPopup.style.display = "none";
  blurContainer.style.display = "none";
  clearInputs();
});

const library = [];

class Book {
  constructor(author, title, pages, isRead) {
    this.author = author;
    this.title = title;
    this.pages = pages;
    this.isRead = isRead;
  }
}
