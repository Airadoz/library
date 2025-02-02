const modal = document.querySelector(".modal");
const openModal = document.querySelector(".open-modal");
const closeModal = document.querySelector(".close-modal");

const title = document.querySelector("#title");
const author = document.querySelector("#author");
const pages = document.getElementById("pages");
const book_read = document.getElementById("read");

let book_wrapper = document.querySelector(".book_wrapper");

let number_of_items = 0;
let books;
let elementAdded = { title: "", author: "", pages: "", read: "" };
let edit = false;
let displayed = false;

let myLibrary = [
	{ title: "Hobbit", author: "Tolkien", pages: 1000, read: "No", id: 0, displayed: false },
	{ title: "Catcher in the wry", author: "Selindger", pages: 400, read: "No", id: 1, displayed: false },
	{ title: "Catcher in the wry", author: "Selindger", pages: 400, read: "Yes", id: 2, displayed: false },
];

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

function checkForEmptyVal(a, b, c, d) {
	if (a.value === "") {
		return { true: true, value: "a" };
	}
	if (b.value === "") {
		return { true: true, value: "b" };
	}
	if (c.value === "") {
		return { true: true, value: "c" };
	}
	if (d.value === "-") {
		return { true: true, value: "d" };
	}
}

function incompleteInfoTemplate() {
	let template = {};
	let div = document.createElement("div");
	div.classList.add("incomplete");
	div.textContent = "This field is required";
	template.div = div;
	return template;
}

function enforceFullInfo() {
	let check = checkForEmptyVal(title, author, pages, read);
	let template = incompleteInfoTemplate();
	if (check !== undefined && check.value === "a") {
		console.log("a is empty");
		if (elementAdded.title === "") {
			title.insertAdjacentElement("beforebegin", template.div);
			elementAdded.title = "title";
		} else return;
	} else {
		let to_delete = document.querySelector(".title-info .incomplete");
		if (to_delete !== null) {
			to_delete.remove();
			elementAdded.title = "";
		}
	}

	if (check !== undefined && check.value === "b") {
		console.log("b is empty");
		if (elementAdded.author === "") {
			author.insertAdjacentElement("beforebegin", template.div);
			elementAdded.author = "author";
		} else return;
	} else {
		let to_delete = document.querySelector(".author-info .incomplete");
		if (to_delete !== null) {
			to_delete.remove();
			elementAdded.author = "";
		}
	}

	if (check !== undefined && check.value === "c") {
		console.log("c is empty");
		if (elementAdded.pages === "") {
			pages.insertAdjacentElement("beforebegin", template.div);
			elementAdded.pages = "pages";
		} else return;
	} else {
		let to_delete = document.querySelector(".page-info .incomplete");
		if (to_delete !== null) {
			to_delete.remove();
			elementAdded.pages = "";
		}
	}

	if (check !== undefined && check.value === "d") {
		console.log("d is empty");
		if (elementAdded.read === "") {
			read.insertAdjacentElement("beforebegin", template.div);
			elementAdded.read = "read";
		} else return;
	} else {
		let to_delete = document.querySelector(".read-info .incomplete");
		if (to_delete !== null) {
			to_delete.remove();
			elementAdded.read = "";
		}
	}
}

function checkInputChanges(...args) {
	args.forEach((element) => {
		element.addEventListener("change", () => {
			let check = checkForEmptyVal(title, author, pages, read);
			console.log("change!");
			if (check === undefined) {
				console.log("undefined!");
				enforceFullInfo();
				clearIncompleteDivs();
			}
		});
	});
}
checkInputChanges(title, author, pages, read);
function clearIncompleteDivs() {
	let to_delete = document.querySelectorAll(".incomplete");
	if (to_delete.length > 0) {
		to_delete.forEach((element) => {
			element.remove();
		});
	}
}

function dislayBook(array) {
	array.forEach((book) => {
		if (book.displayed === true) {
			return;
		} else {
			let template = {};
			template.div = document.createElement("div");
			template.title = document.createElement("div");
			template.author = document.createElement("div");
			template.pages = document.createElement("div");
			template.read = document.createElement("div");
			template.edit = document.createElement("button");
			template.edit.textContent = "Edit a book?";
			template.edit.classList.add("edit");
			template.div.classList.add("book");
			template.title.innerHTML = "Book's title is: " + `<span class="title-info">${book.title}</span>`;
			template.author.innerHTML = "Book's author is: " + `<span class="author-info">${book.author}</span>`;
			template.pages.innerHTML = "There are " + `<span class="pages-info">${book.pages}</span>` + " pages in the book";
			template.read.innerHTML = "Book is read? " + `<span class="read-info">${book.read}</span>`;
			template.edit.setAttribute("id", `${book.id}`);
			template.div.setAttribute("data-book-number", `${book.id}`);
			template.div.append(template.title, template.author, template.pages, template.read, template.edit);
			console.log(book);
			book_wrapper.append(template.div);
			number_of_items += 1;
			book.displayed = true;
		}
	});
}

function clearInputValues() {
	title.value = "";
	author.value = "";
	pages.value = "";
	book_read.value = "-";
}
function deleteBook() {
	let book_to_delete = document.querySelector(".grid.book_wrapper div.book:last-child");
	let array_check = book_to_delete.getAttribute("data-book-number");
	if (book_to_delete !== null) {
		book_to_delete.remove();
		myLibrary.pop(myLibrary.length - array_check);
	}
}

function book_elems() {
	let editBtns = document.querySelectorAll(".edit");
	if (editBtns.length === 0) {
		editBtns = document.querySelectorAll(".edit");
	}
	return editBtns;
}

closeModal.addEventListener("click", (e) => {
	e.preventDefault();
	let check = checkForEmptyVal(title, author, pages, read);
	if (edit === false) {
		if (check !== undefined && check.true === true) {
			console.log("HA", checkForEmptyVal(title, author, pages, read));
			enforceFullInfo();
		} else {
			myLibrary.push(addBook(title, author, pages, read, number_of_items));
			console.log(myLibrary);
			dislayBook(myLibrary);
			clearInputValues();
			getBookToEdit();
			modal.close();
		}
	} else {
		// let a = getBookToEdit();
		// editBookCard(a);
		modal.close();
	}
});

dislayBook(myLibrary);
book_elems();
