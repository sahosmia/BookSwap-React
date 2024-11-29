const avaterImage = (image) => {
  return `http://localhost:5000/uploads/avater/${image}`;
};
const bookImage = (image) => {
  return `http://localhost:5000/uploads/books/${image}`;
};

export { avaterImage, bookImage };
