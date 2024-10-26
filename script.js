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

const showSection = (sectionId) => {
  document.querySelectorAll("#content > div").forEach((section) => {
    section.classList.add("hidden");
  });
  document.getElementById(sectionId).classList.remove("hidden");
};

document.getElementById("viewBooks").onclick = () =>
  showSection("bookListSection");
document.getElementById("addBook").onclick = () =>
  showSection("addBookSection");
document.getElementById("contactInfo").onclick = () =>
  showSection("contactSection");

showSection("bookListSection");

function getOrdinalSuffix(day) {
  if (day > 3 && day < 21) return "th";
  switch (day % 10) {
    case 1:
      return "st";
    case 2:
      return "nd";
    case 3:
      return "rd";
    default:
      return "th";
  }
}

function updateDate() {
  const now = new Date();
  const month = now.toLocaleString("en-US", { month: "long" });
  const day = now.getDate();
  const year = now.getFullYear();
  const time = now.toLocaleTimeString("en-US", { hour12: true });

  const formattedDate = `${month} ${day}${getOrdinalSuffix(
    day
  )} ${year}, ${time}`;
  document.getElementById("dateDisplay").innerText = formattedDate;
}
updateDate();
setInterval(updateDate, 1000);
