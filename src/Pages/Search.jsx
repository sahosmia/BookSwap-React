import React, { useEffect, useState } from "react";
import api from "../api/api";
import BookItem from "../components/book/BookItem";

const Search = () => {
  const [search, setSearch] = useState("");
  const [books, setBooks] = useState([]);
  const [loading, setloading] = useState(false);
  // apply search function using useEffect by api.search

  useEffect(() => {
    const fetchData = async () => {
      setloading(true);
      try {
        const response = await api.get(`/books?search=${search}`);

        if (response.status === 200) {
          const booksdata = Array.isArray(response.data?.data)
            ? response.data?.data
            : [];

          setBooks(booksdata);
        }
      } catch (error) {
        if (error.name === "CanceledError") {
          console.log("Request canceled:", error.message);
        } else {
          console.error("Error fetching data:", error.message);
        }
      } finally {
        setloading(false);
      }
    };

    fetchData();
  }, [search]);

  return (
    <div className="container py-10">
      <div className="flex justify-center items-center">
        <input
          type="text"
          name="search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-1/2 py-2 px-4 border border-gray-200 rounded-full shadow-sm h-14 text-md focus:outline-none focus:border-teal-400"
          placeholder="Search for books, authors"
        />
      </div>

      <div>
        {loading ? (
          <div className="flex justify-center items-center h-48">
            <div className="w-12 h-12 border-4 border-teal-500 border-dashed rounded-full animate-spin"></div>
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
    </div>
  );
};

export default Search;
