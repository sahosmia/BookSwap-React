import { IoSearch } from "react-icons/io5";
import { Link } from "react-router-dom";

const Search = () => {
  return (
    <Link to="/search" className="text-gray-500 ">
      <IoSearch className="w-8 h-10" />
    </Link>
  );
};

export default Search;
