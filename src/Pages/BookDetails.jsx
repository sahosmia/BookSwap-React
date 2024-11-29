import { useParams } from "react-router-dom";
import BookOwnerInfo from "../components/book/BookOwnerInfo.jsx";
import useFetchApi from "../hooks/useFetchApi.js";
import WishListButton from "../components/book/WishListButton.jsx";
import { bookImage } from "../util/imageShow.js";

const BookDetails = () => {
  const { slug } = useParams();

  const { data: response, loading, error } = useFetchApi(`books/${slug}`);
  const book = response?.data;

  // Loading state
  if (loading) {
    return <p className="text-center text-gray-600">Loading book details...</p>;
  }

  // Error state
  if (error) {
    return (
      <p className="text-center text-red-600">
        Error fetching book details: {error}
      </p>
    );
  }

  // Book not found
  if (!book) {
    return (
      <p className="text-center text-gray-600">No book found for this slug.</p>
    );
  }

  return (
    <div className="container flex flex-col gap-6 p-6 mx-auto bg-white rounded-lg shadow-md lg:flex-row">
      {/* Book Cover */}
      <div className="lg:w-1/3">
        <img
        crossOrigin="anonymous"
          src={bookImage(book.cover_photo)}
          alt={book.title}
          className="w-[350px] h-auto rounded-lg shadow"
        />
      </div>

      {/* Book Details */}
      <div className="flex flex-col lg:w-2/3">
        <div className="flex items-center justify-between mb-4">
          <WishListButton book={book} />
        </div>

        <h2 className="mb-2 text-3xl font-semibold">{book.title}</h2>
        <h3 className="mb-2 text-xl text-blue-600">{book.author_name}</h3>
        <p className="mb-4 text-gray-500">
          Publisher: {book.publication_name || "Unknown"}
        </p>
        <p className="mb-4 text-gray-500">{book.total_page || 0} pages</p>
        <p className="text-gray-800">{book.description || "No description"}</p>

        <div className="mt-8">
          {book.user ? (
            <BookOwnerInfo key={book.slug} owner={book.user} />
          ) : (
            <p className="text-gray-600">No owner information available.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
