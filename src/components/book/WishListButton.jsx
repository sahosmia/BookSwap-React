import { useEffect, useState } from "react";
import PropTypes from "prop-types";

const WishListButton = ({ book }) => {
  const [isWishlist, setIsWishlist] = useState(false);

  useEffect(() => {
    if (book) {
      const storedWishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
      const isActive = storedWishlist.some(
        (wishlistItem) => wishlistItem.id === book.id
      );
      setIsWishlist(isActive);
    }
  }, [book]);

  const addToWishlist = () => {
    let wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];

    if (isWishlist) {
      wishlist = wishlist.filter((wishlistItem) => wishlistItem.id !== book.id);
    } else {
      wishlist.push(book);
    }

    setIsWishlist(!isWishlist);
    localStorage.setItem("wishlist", JSON.stringify(wishlist));
  };
  return (
    <button
      className={`px-4 py-2 ${
        isWishlist ? "bg-red-100 text-red-600" : "bg-blue-100 text-blue-600"
      } rounded-lg hover:${isWishlist ? "bg-red-200" : "bg-blue-200"}`}
      onClick={addToWishlist}
    >
      {isWishlist ? "Remove from wishlist ❤️" : "Add to wishlist ❤️"}
    </button>
  );
};

WishListButton.propTypes = {
  book: PropTypes.shape({
    id: PropTypes.text,
  }),
};

export default WishListButton;
