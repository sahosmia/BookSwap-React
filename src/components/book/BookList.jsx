import { useState } from "react";
import books from "../../db/books";
import BookItem from "./BookItem";
import CategoryNavigation from "../CategoryNavigation";
const BookList = () => {
  const [selectedCategory, setSelectedCategory] = useState("fiction");

  return (
    <>
      <div className="container mx-auto py-8">
        <CategoryNavigation
          categories={Object.keys(books)}
          selectedCategory={selectedCategory}
          onSelectCategory={setSelectedCategory}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-4 gap-y-10 mt-5">
          {books[selectedCategory].map((book) => (
            <BookItem key={book.id} book={book} />
          ))}
        </div>
      </div>
    </>
  );
};

export default BookList;
