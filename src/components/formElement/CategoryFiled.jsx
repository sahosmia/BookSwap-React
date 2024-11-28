import { useEffect, useState } from "react";
import { IoIosArrowDown } from "react-icons/io";

import api from "../../api/api";

const CategoryFiled = ({ onChange, value }) => {
  const [search, setSearch] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [districts, setDistricts] = useState([]);

  const [selectedOptions, setSelectedOptions] = useState(null);
  useEffect(() => {
    api
      .get("categories")
      .then((response) => {
        setDistricts(response.data.data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  // Close dropdown if clicked outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (event.target.closest(".custom-select")) return;
      setIsOpen(false); // Close dropdown
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Update selectedOptions if a value is passed from the parent
  useEffect(() => {
    if (value && districts.length > 0) {
      const selectedDistrict = districts.find(
        (district) => district._id === value
      );
      if (selectedDistrict) {
        setSelectedOptions(selectedDistrict);
      }
    }
  }, [value, districts]);

  // Filter districts based on the search query
  const filteredItems = districts.filter((item) =>
    item.title.toLowerCase().includes(search.toLowerCase())
  );

  // Toggle selection of a district
  const toggleSelection = (item) => {
    setSelectedOptions(item);
    setIsOpen(false);
    onChange(item._id, "category");
  };

  const clearInput = () => {
    setSelectedOptions(null);
    setSearch("");
    onChange("", "category");
  };

  return (
    <div className="w-full mb-2">
      <label
        htmlFor="category"
        className="text-[15px] text-gray-500 font-[400]"
      >
        Category
      </label>
      <div className="relative w-full custom-select">
        <input
          type="text"
          placeholder="Search.."
          value={selectedOptions ? selectedOptions.title : search}
          onChange={(e) => setSearch(e.target.value)}
          onFocus={() => setIsOpen(true)}
          className={`w-full border border-gray-300 rounded-md px-3 py-2 mt-1 focus:outline-none`}
        />
        <div className="absolute top-[50%] transform translate-y-[-50%] right-3 flex items-center gap-2">
          {/* close button  */}
          {selectedOptions && (
            <button
              onClick={clearInput}
              className="p-1 ml-2 text-gray-500 hover:text-red-600 focus:outline-none"
            >
              ✕
            </button>
          )}
          <IoIosArrowDown
            className={`${
              isOpen ? "rotate-[180deg]" : "rotate-0"
            } transition-all duration-300 text-[1.3rem]  text-gray-500`}
          />
        </div>

        {/* Dropdown menu */}
        {isOpen && (
          <div className="absolute left-0 z-20 w-full p-1 mt-1 overflow-auto bg-white border rounded-md shadow-lg max-h-60 top-full">
            <div className="w-full overflow-auto">
              {filteredItems.map((item) => (
                <p
                  key={item._id}
                  onClick={() => toggleSelection(item)}
                  className="flex items-center px-3 py-2 cursor-pointer hover:bg-gray-200"
                >
                  {item.title}
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
    </div>
  );
};

export default CategoryFiled;
