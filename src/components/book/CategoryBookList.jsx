import { useState } from "react";
import BookItem from "./BookItem";
import CategoryNavigation from "./CategoryNavigation";
import useFetchApi from "../../hooks/useFetchApi";
import { useAuth } from "../../context/AuthContext";

const CategoryBookList = () => {
  const { location } = useAuth();
  const [selectedCategory, setSelectedCategory] = useState("");

  const { data, loading, error } = useFetchApi(
    `books?category=${selectedCategory}&location=${location._id}`
  );
 

  if (loading) {
    return (
      <div className="flex justify-center items-center h-48">
        <div className="w-12 h-12 border-4 border-teal-500 border-dashed rounded-full animate-spin"></div>
      </div>
    );
  }

  const books = Array.isArray(data?.data) ? data.data : [];

  return (
    <div className="container py-8 mx-auto">
      <CategoryNavigation
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />

      {error ? (
        <div className="text-red-500 text-center mt-5">
          <h1 className="text-2xl font-semibold">An error occurred</h1>
          <p>{error}</p>
        </div>
      ) : books.length > 0 ? (
        <div className="grid grid-cols-1 mt-5 md:grid-cols-2 lg:grid-cols-4 gap-x-4 gap-y-10">
          {books.map((book) => (
            <BookItem key={book._id} book={book} />
          ))}
        </div>
      ) : (
        <div className="text-center text-gray-500 mt-5">
          <h2 className="text-xl font-semibold">No books found!</h2>
          <p className="mt-2">
            Try selecting a different category or location.
          </p>
        </div>
      )}
    </div>
  );
};

export default CategoryBookList;
