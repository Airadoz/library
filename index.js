const myLibrary = [];
const modal = document.querySelector(".modal");
const openModal = document.querySelector(".open-modal");
const closeModal = document.querySelector(".close-modal");

const title = document.querySelector("#title");
const author = document.querySelector("#author");
const pages = document.getElementById("pages");
const book_read = document.getElementById("read");

openModal.addEventListener("click", ()=>{
  modal.showModal();
})
closeModal.addEventListener("click", ()=>{
  addBook();
  modal.close();
})

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}
function addBook(){
  const book = new Book(title.value,author.value,pages.value,book_read.value);
  myLibrary.push(book)
}