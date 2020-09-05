let library = [];

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
addBookToLibrary();
