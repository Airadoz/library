const myLibrary = [];
const modal = document.querySelector(".modal");
const openModal = document.querySelector(".open-modal");
const closeModal = document.querySelector(".close-modal");

const title = document.querySelector("#title");
const author = document.querySelector("#author");
const pages = document.getElementById("pages");
const book_read = document.getElementById("read");
let number_of_items = 0;

const book_wrapper = document.querySelector(".book_wrapper") 

openModal.addEventListener("click", ()=>{
  modal.showModal();
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
  console.log(myLibrary)
  clearInputValue()
}
function clearInputValue(){
  title.innerHTML = "";
  title.value = "";
  author.innerHTML = "";
  author.value = "";
  pages.innerHTML = "";
  pages.value = "";
  book_read.value = "no"
}
function dislayBook(array){
    const div = document.createElement("div");
    const title = document.createElement("div");
    const author = document.createElement("div");
    const pages = document.createElement("div");
    const read = document.createElement("div");

    div.classList.add("book");
    title.innerHTML = array[number_of_items].title;
    author.innerHTML = array[number_of_items].author;
    pages.innerHTML = array[number_of_items].pages;
    read.innerHTML = array[number_of_items].read;
    div.append(title,author,pages,read);
    book_wrapper.appendChild(div)
    number_of_items+=1;
}