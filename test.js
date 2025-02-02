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
