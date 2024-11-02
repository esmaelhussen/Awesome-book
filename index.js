import BookCollection from './modules/allBooks.js';
import { updateDate } from './modules/date.js';
import { showSection } from './modules/pagesUI.js';

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

document.getElementById("viewBooks").onclick = () =>
  showSection("bookListSection");
document.getElementById("addBook").onclick = () =>
  showSection("addBookSection");
document.getElementById("contactInfo").onclick = () =>
  showSection("contactSection");

showSection("bookListSection");

updateDate();
setInterval(updateDate, 1000);
