let library = [];
let deleteButtons = [];
function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  //   ***** Read should be a boolean
  this.read = read;
  this.info = function() {
    return `${title} by ${author}, ${pages} pages, ${read}`;
  };
}
// ***** Needs to be changed latter to take input from a form
function addBookToLibrary(title, author, pages, read) {
  let newBook = new Book(title, author, pages, read);
  library.push(newBook);
  displayBooks();
}

// to display Books
function displayBooks() {
  let container = document.getElementById("main");

  let book = library[library.length - 1];
  // library.forEach(book => {
  let titleDiv = document.createElement("div");
  titleDiv.className = "title";
  titleDiv.innerHTML = book.title;
  let authorDiv = document.createElement("div");
  authorDiv.className = "author";
  authorDiv.innerHTML = book.author;
  let pagesDiv = document.createElement("div");
  pagesDiv.className = "pages";
  pagesDiv.innerHTML = book.pages;
  let readDiv = document.createElement("div");
  let readTrue = ` <input checked type="checkbox" id="${library.length -
    1}" />`;
  let readFalse = ` <input  type="checkbox" id="${library.length - 1}" />`;
  readDiv.className = "read";
  if (book.read === true) {
    readDiv.innerHTML = readTrue;
  } else {
    readDiv.innerHTML = readFalse;
  }
  readDiv.firstElementChild.addEventListener("click", () => {
    console.log(readDiv.firstElementChild.checked);
    if (readDiv.firstElementChild.checked === true) {
      book.read = true;
    } else {
      book.read = false;
    }
  });
  let deleteButton = document.createElement("button");
  deleteButton.className = "delete";
  deleteButton.innerHTML = "delete";
  deleteButton.addEventListener("click", () => {
    deleteBook(deleteButton);
  });
  let newContainer = document.createElement("div");
  newContainer.className = "container";
  newContainer.appendChild(titleDiv);
  newContainer.appendChild(authorDiv);
  newContainer.appendChild(pagesDiv);
  newContainer.appendChild(readDiv);
  newContainer.appendChild(deleteButton);
  container.appendChild(newContainer);
}

function deleteBook(element) {
  element.parentNode.remove();
}

let addBooksButton = document.getElementById("addBook");
let turnClick = false;

function showHideForm() {
  if (turnClick === false) {
    document.querySelector("form").style.visibility = "visible";
    document.getElementById("addBook").style.visibility = "hidden";
    turnClick = true;
  } else {
    document.querySelector("form").style.visibility = "hidden";
    document.getElementById("addBook").style.visibility = "visible";
    document.getElementById("author").value = "";
    document.getElementById("pages").value = "";
    document.getElementById("read").value = false;
    turnClick = false;
  }
}
addBooksButton.addEventListener("click", () => {
  showHideForm();
});

function sumbitBook() {
  console.log("here");
  let title = document.getElementById("title").value;
  let author = document.getElementById("author").value;
  let pages = document.getElementById("pages").value;
  let read = "";
  if (document.getElementById("read").checked === true) {
    read = true;
  } else {
    read = false;
  }
  addBookToLibrary(title, author, pages, read);
  showHideForm();
}

let additionActionButton = document.getElementById("additionAction");

additionActionButton.addEventListener("click", () => {
  sumbitBook();
});

// displayBooks();
