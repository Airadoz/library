const myLibrary = [];
const modal = document.querySelector(".modal");
const openModal = document.querySelector(".open-modal");
const closeModal = document.querySelector(".close-modal");

const title = document.querySelector("#title");
const author = document.querySelector("#author");
const pages = document.getElementById("pages");
const book_read = document.getElementById("read");
let number_of_items = 0;
let books;

const book_wrapper = document.querySelector(".book_wrapper") 

openModal.addEventListener("click", ()=>{
  modal.showModal();
})

function Book(title, author, pages, read, id) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  this.id = id;
}
function addBook(){
  const book = new Book(title.value,author.value,pages.value,book_read.value,number_of_items);
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
function template(){
  
}
function dislayBook(array){
  const div = document.createElement("div");
  const title = document.createElement("div");
  const author = document.createElement("div");
  const pages = document.createElement("div");
  const read = document.createElement("div");
  const edit = document.createElement("button");
  edit.textContent = "Edit a book?"
  edit.classList.add("edit");
  edit.setAttribute("id",`${number_of_items}`)
  div.classList.add("book");
  // title.classList.add("title");
  // author.classList.add("author");
  // pages.classList.add("pages");
  // read.classList.add("read");

  div.setAttribute("data-book-number",`${number_of_items}`)
  title.innerHTML = "Book's title is: "+`<span class="title-info">${array[number_of_items].title}</span>`;
  author.innerHTML = "Book's author is: "+`<span class="author-info">${array[number_of_items].author}</span>`;
  pages.innerHTML = "There are "+`<span class="pages-info">${array[number_of_items].pages}</span>`+" pages in the book";
  read.innerHTML = "Book is read? "+`<span class="read-info">${array[number_of_items].read}</span>`;
  div.append(title,author,pages,read, edit);
  book_wrapper.appendChild(div)
  number_of_items+=1;
}
function deleteBook(){
  let book_to_delete = document.querySelector(".grid.book_wrapper div.book:last-child");
  book_to_delete.remove()
}
closeModal.addEventListener("click",()=>{
  setTimeout(()=>{
    books = document.querySelectorAll(".edit")
    // console.log(books)
    getBookToEdit(books)
  }, 250)
})
function editBook(element){
    modal.showModal();

  let title = document.querySelector(`[data-book-number='${element.getAttribute("data-book-number")}'] .title-info`).textContent;
  let author = document.querySelector(`[data-book-number='${element.getAttribute("data-book-number")}'] .author-info`).textContent;
  let pages = document.querySelector(`[data-book-number='${element.getAttribute("data-book-number")}'] .pages-info`).textContent;
  let read = document.querySelector(`[data-book-number='${element.getAttribute("data-book-number")}'] .read-info`).textContent;
  let bookToChange = [];
  let Book = {}
  Book.title = title
  Book.author = author;
  Book.pages = pages;
  Book.read = read
  bookToChange.push(Book)
  console.log(Book, bookToChange)
  closeModal.addEventListener("click",()=>{
    // deleteBook(element)
    addBook(myLibrary[`${element.getAttribute("data-book-number")}`]);
    modal.close();
  })
} 

function getBookToEdit(books){
  books.forEach(book => {
    book.addEventListener("click",()=>{
      let change = book.getAttribute("id");
      let to_change = document.querySelector(`[data-book-number='${change}']`);
      editBook(to_change)
    })
  });
}
