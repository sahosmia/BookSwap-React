import { IoSearch } from "react-icons/io5";

const Search = () => {
  return (
    <div className="relative flex items-center w-1/2 h-30">
      <input
        type="text"
        className="w-full p-2 pl-4 pr-10 border border-gray-200 rounded-full shadow-sm h-14 text-md focus:outline-none focus:border-teal-400"
        placeholder="Search for books, authors, publishers or members..."
      />
      <button className="absolute text-gray-500 right-2 ">
        <IoSearch className="w-8 h-10" />
      </button>
    </div>
  );
};

export default Search;
