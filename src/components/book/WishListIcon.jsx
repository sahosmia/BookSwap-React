import { useEffect, useState } from "react";
import { MdFavoriteBorder } from "react-icons/md";

const WishListIcon = ({ book }) => {
  const [isWishlist, setIsWishlist] = useState(false);

  useEffect(() => {
    const storedWishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
    const isActive = storedWishlist.some(
      (wishlist) => wishlist._id === book._id
    ); // true or false
    setIsWishlist(isActive);
  }, [book, isWishlist]);

  const addToWishlist = (event) => {
    event.stopPropagation();

    let wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];

    if (!isWishlist) {
      setIsWishlist(true);
      wishlist.push(book);
    } else {
      setIsWishlist(false);
      wishlist = wishlist.filter(
        (wishlistItem) => wishlistItem._id !== book._id
      );
    }
    localStorage.setItem("wishlist", JSON.stringify(wishlist));
  };
  return (
    <div  onClick={addToWishlist}>
      {isWishlist ? "❤️" : <MdFavoriteBorder />}
    </div>
  );
};


export default WishListIcon;
