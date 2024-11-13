import { useEffect, useState } from "react";
import BookItem from "../book/BookItem";

const Wishlists = () => {
  const [wishlist, setWishlist] = useState([]);

  // Load wishlist from localStorage
  const loadWishlist = () => {
    const storedWishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
    setWishlist(storedWishlist);
  };

  useEffect(() => {
    loadWishlist();
  }, []);

  // Update wishlist if the item is added or removed
  const updateWishlist = () => {
    loadWishlist();
  };

  return (
    <div className="container min-h-[600px]">
      <h1 className="my-10 text-4xl font-bold text-center text-red-700 capitalize ">
        My Wishes
      </h1>

      {wishlist.length === 0 ? (
        <p className="m-6 text-3xl font-bold text-center ">
          Add your WishList ....{" "}
        </p>
      ) : (
        <div className="grid grid-cols-1 m-10 md:grid-cols-2 lg:grid-cols-4 gap-x-4 gap-y-10">
          {wishlist.map((book) => (
            <BookItem
              key={book.id}
              book={book}
              onWishlistChange={updateWishlist}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Wishlists;
