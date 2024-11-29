import { Link, useNavigate } from "react-router-dom";
import { Avatar } from "@mui/material";
import DefaultBookImage from "../../assets/ten book.jpg";
import WishListIcon from "./WishListIcon";
import { BiEdit, BiTrash } from "react-icons/bi";
import api from "../../api/api";
import { toast } from "react-toastify";
import AvterImage from "../AvterImage";
const BookItem = ({ book, actionAble = false }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/book/${book.slug}`);
  };

  const handleDelete = async (event) => {
    event.stopPropagation();

    try {
      const response = await api.delete(`/books/${book.slug}`);
      toast.success(response.data.message); 
      window.location.reload();
      return response.data;
    } catch (error) {
      console.error(
        "Error deleting book:",
        error.response?.data || error.message
      );
      throw error;
    }
  };
  const navigateToEditPage = (event) => {
    event.stopPropagation();
    navigate(`/book/edit/${book.slug}`);
  };

  return (
    <div
      className="relative w-[250px] sm:w-full md:w-[250px] xl:w-[350px] mx-auto drop-shadow bg-white overflow-hidden rounded-xl shadow-md  hover:shadow-lg transform hover:scale-105 transition-all duration-300"
      onClick={handleClick}
    >
      <div className="absolute flex gap-1 top-4 right-4">
        <WishListIcon book={book} />
        {actionAble && (
          <>
            <button onClick={navigateToEditPage}>
              <BiEdit />
            </button>
            <button onClick={handleDelete}>
              <BiTrash />
            </button>
          </>
        )}
      </div>

      <img
        crossOrigin="anonymous"
        className="object-cover w-full h-96 md:h-72 lg:h-96"
        src={`http://localhost:5000/uploads/books/${book.cover_photo}`}
        alt={book.title}
      />
      <div className="relative my-4 text-center">
        <div className="absolute inline-block -translate-x-1/2 -top-12 left-1/2">
          {/* <AvaterImage
            src={`${book.user.avater}`}
            alt={book.user?.username}
           
          /> */}

          <AvterImage
            src={book?.user?.avater}
            alt={book.user?.username}
            size={60}
          />
        </div>
        <h2 className="text-xl font-semibold text-gray-900 pt-7 ">
          {book.user?.name || "Unknown Author"}{" "}
        </h2>
        <h3 className="text-gray-600">{book.author_name}</h3>
      </div>
    </div>
  );
};

export default BookItem;
