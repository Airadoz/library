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
let form = document.querySelector("form");

let book_wrapper = document.querySelector(".book_wrapper");

openModal.addEventListener("click", () => {
	modal.showModal();
});

function Book(title, author, pages, read, id) {
	this.title = title;
	this.author = author;
	this.pages = pages;
	this.read = read;
	this.id = id;
}
function addBook() {
	const book = new Book(title.value, author.value, pages.value, book_read.value, number_of_items);
	return book;
}
function addToArray(value) {
	myLibrary.push(value);
	console.log(myLibrary);
}
closeModal.addEventListener("click", () => {
	addToArray(addBook());
});

function clearInputValue() {
	title.innerHTML = "";
	title.value = "";
	author.innerHTML = "";
	author.value = "";
	pages.innerHTML = "";
	pages.value = "";
	book_read.value = "no";
}
function template() {
	let template = {};
	template.div = document.createElement("div");
	template.title = document.createElement("div");
	template.author = document.createElement("div");
	template.pages = document.createElement("div");
	template.read = document.createElement("div");
	template.edit = document.createElement("button");
	return template;
}
function dislayBook(array, template) {
	template.edit.textContent = "Edit a book?";
	template.edit.classList.add("edit");
	template.edit.setAttribute("id", `${number_of_items}`);
	template.div.classList.add("book");
	template.div.setAttribute("data-book-number", `${number_of_items}`);
	template.title.innerHTML = "Book's title is: " + `<span class="title-info">${array[number_of_items].title}</span>`;
	template.author.innerHTML = "Book's author is: " + `<span class="author-info">${array[number_of_items].author}</span>`;
	template.pages.innerHTML = "There are " + `<span class="pages-info">${array[number_of_items].pages}</span>` + " pages in the book";
	template.read.innerHTML = "Book is read? " + `<span class="read-info">${array[number_of_items].read}</span>`;
	template.div.append(template.title, template.author, template.pages, template.read, template.edit);
	console.log(template, "appended");
	book_wrapper.appendChild(template.div);
	number_of_items += 1;
}
function deleteBook() {
	let book_to_delete = document.querySelector(".grid.book_wrapper div.book:last-child");
	book_to_delete.remove();
}
closeModal.addEventListener("click", () => {
	setTimeout(() => {
		books = document.querySelectorAll(".edit");
		// console.log(books)
		getBookToEdit(books);
	}, 250);
});
function returnEditValues(element) {
	const editObj = {};
	let title = document.querySelector(`[data-book-number='${element.getAttribute("data-book-number")}'] .title-info`).textContent;
	let author = document.querySelector(`[data-book-number='${element.getAttribute("data-book-number")}'] .author-info`).textContent;
	let pages = document.querySelector(`[data-book-number='${element.getAttribute("data-book-number")}'] .pages-info`).textContent;
	let read = document.querySelector(`[data-book-number='${element.getAttribute("data-book-number")}'] .read-info`).textContent;
	let id = document.querySelector(`[data-book-number='${element.getAttribute("data-book-number")}']`);
	editObj.title = title;
	editObj.author = author;
	editObj.pages = pages;
	editObj.read = read;
	editObj.id = id;
	return editObj;
}
function editBook(element) {
	modal.showModal();
	// let bookToChange = [];
	// let Book = {};
	// Book.title = title;
	// Book.author = author;
	// Book.pages = pages;
	// Book.read = read;
	// bookToChange.push(Book);
	// console.log(Book, bookToChange);
	closeModal.addEventListener("click", () => {
		// deleteBook(element)
		// addBook(myLibrary[`${element.getAttribute("data-book-number")}`]);
		console.log(element);
		modal.close();
	});
}

function getBookToEdit(books) {
	books.forEach((book) => {
		book.addEventListener("click", () => {
			let change = book.getAttribute("id");
			let to_change = document.querySelector(`[data-book-number='${change}']`);
			editBook(returnEditValues(to_change));
		});
	});
}

form.addEventListener("submit", () => {
	console.log("a");
});
