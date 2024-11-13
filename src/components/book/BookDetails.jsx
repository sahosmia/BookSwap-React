import { useParams } from "react-router-dom";
import books from "../../db/books.js";
import BookOwnerInfo from "./BookOwnerInfo.jsx";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

const BookDetails = () => {
  const navigate = useNavigate();
  const [isWishlist, setIsWishlist] = useState(false);

  const { id } = useParams();

  // Find the book in any category by its ID
  const book = Object.values(books)
    .flat()
    .find((book) => book.id === parseInt(id));

  useEffect(() => {
    // Retrieve wishlist data from localStorage
    const storedWishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
    const isActive = storedWishlist.some((wishlist) => wishlist.id === book.id); // true or false
    setIsWishlist(isActive);
  }, [book, isWishlist]);

  if (!book) {
    return <div className="container mx-auto py-8">Book not found.</div>;
  }

  const ownerInfo = {
    id: book.id,
    name: book.username,
    location: "Chuadanga",
    profileImage: book.userpicture,
    suggestedBooks: 0,
    wantedBooks: 0,
    booksReceived: 0,
    booksSent: 0,
  };

  const addToWishlist = () => {
    // Retrieve existing wishlist from localStorage
    let wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];

    // Save the updated wishlist to localStorage
    if (!isWishlist) {
      setIsWishlist(true);
      wishlist.push(book);
    } else {
      setIsWishlist(false);
      wishlist = wishlist.filter((wishlistItem) => wishlistItem.id !== book.id);
    }
    localStorage.setItem("wishlist", JSON.stringify(wishlist));
  };

  return (
    <div className="container mx-auto p-6 bg-white shadow-md rounded-lg flex flex-col lg:flex-row gap-6">
      <div className="lg:w-1/3">
        <img
          src={book.cover}
          alt={book.title}
          className="w-[350px] h-auto rounded-lg shadow"
        />
      </div>
      <div className="lg:w-2/3 flex flex-col">
        <div className="flex justify-between items-center mb-4">
          <div className="flex space-x-3">
            {/* <button className="bg-blue-100 text-blue-600 px-4 py-2 rounded-lg hover:bg-blue-200">
              Recommend this book +
            </button> */}
            <button
              className="bg-red-100 text-red-600 px-4 py-2 rounded-lg hover:bg-red-200"
              onClick={addToWishlist}
            >
              {isWishlist ? "Remove to wishlist ❤️" : "Add to wishlist ❤️"}
            </button>
          </div>
        </div>

        <h2 className="text-3xl font-semibold mb-2">{book.title}</h2>
        <h3 className="text-xl text-blue-600 mb-2">{book.author}</h3>
        <p className="text-gray-500 mb-4">Publisher : {book.publisher}</p>
        <p className="text-gray-500 mb-4">{book.page} pages</p>

        <p className="text-gray-800">{book.description}</p>

        <div className="mt-8">
          <BookOwnerInfo key={ownerInfo.id} owner={ownerInfo} />
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
