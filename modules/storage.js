export const loadbooks = () => {
  return JSON.parse(localStorage.getItem("books")) || [];
};

export const savebooks = (books) => {
  localStorage.setItem("books", JSON.stringify(books));
};
