const formPopup = document.querySelector(".form-popup");
const addBookButton = document.querySelector(".add-book-button");
const cancelButton = document.querySelector(".cancel-button");
const blurContainer = document.querySelector(".blur-container");
const titleInput = document.querySelector("#title");
const authorInput = document.querySelector("#author");
const pagesInput = document.querySelector("#pageNumber");
const addBookForm = document.querySelector(".add-book-form");
const main = document.querySelector("main");

const library = [];

function clearInputs() {
  titleInput.value = "";
  authorInput.value = "";
  pagesInput.value = "";
}

function closeForm() {
  formPopup.style.display = "none";
  blurContainer.style.display = "none";
  clearInputs();
}

function addBookToLibrary(book) {
  library.push(book);
}

function deleteBook() {
  const bookIndex =
    this.parentElement.parentElement.parentElement.dataset.index;
  library.splice(bookIndex, 1);
  updateCardDisplay();
}

function updateCardDisplay() {
  let htmlCards = "";
  library.forEach((book, index) => {
    htmlCards += `<div class="book" data-index=${index}>
    <div class="book-title">${book.title}</div>
    <div class="book-author">${book.author}</div>
    <div class="book-pages">${book.pages}</div>
    <div class="bottom-row">
      <div class="buttons">
        <button class="read">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <title>check-bold</title>
            <path
              d="M9,20.42L2.79,14.21L5.62,11.38L9,14.77L18.88,4.88L21.71,7.71L9,20.42Z"
            />
          </svg>
        </button>
        <button class="delete-button">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <title>delete</title>
            <path
              d="M19,4H15.5L14.5,3H9.5L8.5,4H5V6H19M6,19A2,2 0 0,0 8,21H16A2,2 0 0,0 18,19V7H6V19Z"
            />
          </svg>
        </button>
      </div>
    </div>
  </div>`;
  });
  main.innerHTML = htmlCards;
  const deleteButtons = document.querySelectorAll(".delete-button");
  deleteButtons.forEach((book) => {
    book.addEventListener("click", deleteBook);
  });
}

class Book {
  constructor(author, title, pages) {
    this.author = author;
    this.title = title;
    this.pages = pages;
  }
}

addBookButton.addEventListener("click", () => {
  formPopup.style.display = "block";
  blurContainer.style.display = "block";
  blurContainer.classList.add("blur");
});

cancelButton.addEventListener("click", closeForm);

addBookForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const author = authorInput.value;
  const title = titleInput.value;
  const pages = pagesInput.value;
  const tempBook = new Book(author, title, pages);
  addBookToLibrary(tempBook);
  updateCardDisplay();
  closeForm();
});

window.addEventListener("load", () => {
  const normalPeople = new Book("Sally Rooney", "Normal People", 239);
  const cryingInHMart = new Book("Michelle Zauner", "Crying in H Mart", 257);
  const theHouseOfHades = new Book("Rick Riordan", "The House of Hades", 673);

  addBookToLibrary(normalPeople);
  addBookToLibrary(cryingInHMart);
  addBookToLibrary(theHouseOfHades);

  updateCardDisplay();
});
