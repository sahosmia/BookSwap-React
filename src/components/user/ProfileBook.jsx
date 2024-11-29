import { useAuth } from "../../context/AuthContext";
import BookItem from "../book/BookItem";
import useFetchApi from "../../hooks/useFetchApi";

const ProfileBook = () => {
  const { user } = useAuth();

  const { data, loading } = useFetchApi(`users/${user._id}`);

  if (loading) {
    return <p className="text-center text-gray-600">Loading book data...</p>;
  }

  if (!data?.data.books) {
    return <p className="text-center text-gray-600">No book found.</p>;
  }
  return (
    <div>
      <h1 className="my-8 text-4xl font-bold text-center">Your Book</h1>

      <div className="grid grid-cols-1 mt-5 md:grid-cols-2 lg:grid-cols-4 gap-x-4 gap-y-10">
        {data?.data.books.length > 0 ? (
          data?.data.books.map((book) => (
            <BookItem key={book._id} book={book} actionAble />
          ))
        ) : (
          // TODO: Make a good design for not found book error
          <h1>Oh No you have no books</h1>
        )}
      </div>
    </div>
  );
};

export default ProfileBook;
