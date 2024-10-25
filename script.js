class BookCollection {
  constructor() {
    this.books = JSON.parse(localStorage.getItem("books")) || [];
  }

  addBook(title, author) {
    this.books.push({ title, author });
    this.updateLocalStorage();
    this.displayBooks();
  }

  removeBook(index) {
    this.books = this.books.filter((_, i) => i !== index);
    this.updateLocalStorage();
    this.displayBooks();
  }

  updateLocalStorage() {
    localStorage.setItem("books", JSON.stringify(this.books));
  }

  displayBooks() {
    const bookList = document.getElementById("bookList");
    bookList.innerHTML = "";
    this.books.forEach((book, index) => {
      const li = document.createElement("li");
      li.textContent = `"${book.title}" by ${book.author}`;

      const removeBtn = document.createElement("button");
      removeBtn.textContent = "Remove";
      removeBtn.onclick = () => this.removeBook(index);

      li.appendChild(removeBtn);
      bookList.appendChild(li);
    });
  }
}

const bookCollection = new BookCollection();
bookCollection.displayBooks();

document.getElementById("addBtn").onclick = () => {
  const title = document.getElementById("title").value;
  const author = document.getElementById("author").value;

  if (title && author) {
    bookCollection.addBook(title, author);
    document.getElementById("title").value = "";
    document.getElementById("author").value = "";
  } else {
    alert("Please enter both title and author.");
  }
};

