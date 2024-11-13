import { useEffect, useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import api from "../api/api";

const Location = ({ handleLocation }) => {
  const [search, setSearch] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOptions, setSelectedOptions] = useState(null); // Stores the selected district
  const [districts, setDistricts] = useState([]);

  useEffect(() => {
    // Fetch districts from the API
    api
      .get("districts")
      .then((response) => {
        setDistricts(response.data.data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  // Filter districts based on the search query
  const filteredItems = districts.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );

  // Close dropdown if clicked outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (event.target.closest(".custom-select")) return;
      setIsOpen(false); // Close dropdown
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Toggle selection of a district
  const toggleSelection = (item) => {
    setSelectedOptions(item); // Set the selected district
    console.log(item); // Log the selected item immediately
    setIsOpen(false); // Close dropdown after selecting
  };

  // Handle location selection and call the parent function
  const findBooks = () => {
    if (selectedOptions) {
      localStorage.setItem("location", JSON.stringify(selectedOptions));

      handleLocation(selectedOptions); // Pass selected district to parent
    }
  };

  return (
    <div className="flex items-center max-w-md p-3 mx-auto bg-gray-100 rounded-lg shadow-md">
      <div className="relative flex w-full custom-select">
        {/* Input field with search functionality */}
        <input
          type="text"
          placeholder="Search.."
          value={selectedOptions ? selectedOptions.name : search} // Display selected district name or search query
          onChange={(e) => setSearch(e.target.value)}
          onFocus={() => setIsOpen(true)}
          className={`w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none`}
        />

        <IoIosArrowDown
          className={`${
            isOpen ? "rotate-[180deg]" : "rotate-0"
          } transition-all duration-300 text-[1.3rem] absolute top-[50%] transform translate-y-[-50%] right-3 text-gray-500`}
        />

        {/* Dropdown menu */}
        {isOpen && (
          <div className="absolute left-0 z-20 w-full max-h-72 overflow-auto mt-1 p-1 bg-white border rounded-md shadow-lg top-full">
            <div className="w-full overflow-auto">
              {filteredItems.map((item) => (
                <p
                  key={item.id}
                  onClick={() => toggleSelection(item)} // Handle selection
                  className="flex items-center px-3 py-2 cursor-pointer hover:bg-gray-200"
                >
                  {item.name}
                </p>
              ))}

              {filteredItems.length === 0 && (
                <p className="text-center text-[0.9rem] text-red-600 py-5">
                  No search found!
                </p>
              )}
            </div>
          </div>
        )}
      </div>
      <button
        onClick={findBooks}
        className="px-4 py-2 ml-2 min-w-28 text-white bg-pink-500 rounded hover:bg-pink-600 focus:outline-none"
      >
        Find Books
      </button>
    </div>
  );
};

export default Location;
