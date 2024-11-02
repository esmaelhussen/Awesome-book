import { savebooks, loadbooks } from './storage.js';

class BookCollection {
  constructor() {
    this.books = loadbooks();
  }

  addBook = (title, author) => {
    this.books.push({ title, author });
    this.updateLocalStorage();
    this.displayBooks();
  }

  removeBook = (index) => {
    this.books = this.books.filter((_, i) => i !== index);
    this.updateLocalStorage();
    this.displayBooks();
  }

  updateLocalStorage = () => {
    savebooks(this.books);
  }

  displayBooks = () => {
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

export default BookCollection;
