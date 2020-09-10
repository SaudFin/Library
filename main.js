let library = [
  { title: "hello World", author: "Blum Blah", pages: 320, read: "YES" },
  { title: "hello Moon", author: "Blum Blah", pages: 500, read: "NO" },
  { title: "hello World", author: "Blum blooh", pages: 242, read: "YES" }
];

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
function addBookToLibrary() {
  let title = prompt("What is the title of the book?");
  let author = prompt("who is the author of the book?");
  let pages = prompt("How many pages are in the book?");
  let read = prompt("Did you read it?");
  library.push(new Book(title, author, pages, read));
}

// to display Books
function displayBooks() {
  let container = document.getElementById("container");
  library.forEach(book => {
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
    readDiv.className = "read";
    readDiv.innerHTML = book.read;
    container.appendChild(titleDiv);
    container.appendChild(authorDiv);
    container.appendChild(pagesDiv);
    container.appendChild(readDiv);
    // container.style.gridTemplateRows = `repeat(${library.length}, 1fr 1fr 1fr 1fr)`;
  });
}

let addBooksButton = document.getElementById("addBook");

addBooksButton.addEventListener("click", () => {
  document.querySelector("form").style.visibility = "visible";
});
// addBookToLibrary();
displayBooks();
