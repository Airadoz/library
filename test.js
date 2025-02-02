const modal = document.querySelector(".modal");
const openModal = document.querySelector(".open-modal");
const closeModal = document.querySelector(".close-modal");

const title = document.querySelector("#title");
const author = document.querySelector("#author");
const pages = document.getElementById("pages");
const book_read = document.getElementById("read");

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
function addBook(a, b, c, d, e) {
	const book = new Book(a.value, b.value, c.value, d.value, e);
	return book;
}
