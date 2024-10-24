let bookCollection = JSON.parse(localStorage.getItem("books")) || [];

function displayBooks() {
  const bookList = document.getElementById("bookList");
  bookList.innerHTML = "";
  bookCollection.forEach((book, index) => {
    const li = document.createElement("li");
    li.textContent = `"${book.title}" by ${book.author}`;

    const removeBtn = document.createElement("button");
    removeBtn.textContent = "Remove";
    removeBtn.onclick = () => {
      removeBook(index);
    };

    li.appendChild(removeBtn);
    bookList.appendChild(li);
  });
}

function addBook(title, author) {
  bookCollection.push({ title, author });
  localStorage.setItem("books", JSON.stringify(bookCollection));
  displayBooks();
}

function removeBook(index) {
  bookCollection = bookCollection.filter((_, i) => i !== index);
  localStorage.setItem("books", JSON.stringify(bookCollection));
  displayBooks();
}

document.getElementById("addBtn").onclick = () => {
  const title = document.getElementById("title").value;
  const author = document.getElementById("author").value;

  if (title && author) {
    addBook(title, author);
    document.getElementById("title").value = "";
    document.getElementById("author").value = "";
  } else {
    alert("Please enter both title and author.");
  }
};

displayBooks();
