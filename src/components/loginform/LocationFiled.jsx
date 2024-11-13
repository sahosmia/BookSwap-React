import { useEffect, useState } from "react";
import { IoIosArrowDown } from "react-icons/io";

import api from "../../api/api";

const LocationFiled = ({ onChange, value }) => {
  const [search, setSearch] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [districts, setDistricts] = useState([]);

  const [selectedOptions, setSelectedOptions] = useState(null); // Stores the selected district
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
      // Find the district object based on the value (_id)
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
    item.name.toLowerCase().includes(search.toLowerCase())
  );

  // Toggle selection of a district
  const toggleSelection = (item) => {
    setSelectedOptions(item); // Set the selected district
    console.log(item); // Log the selected item immediately
    setIsOpen(false); // Close dropdown after selecting
    onChange(item._id, "location"); // Pass selected location _id to parent
  };

  const clearInput = () => {
    setSelectedOptions(null); // Clear selected district
    setSearch(""); // Reset search field
    onChange("", "location"); // Notify parent of cleared location
    // setIsOpen(false); // Close dropdown
  };

  return (
    <div className="w-full mb-2">
      <label htmlFor="location" className="text-[15px] font-[400]">
        Location
      </label>
      <div className="w-full relative custom-select">
        <input
          type="text"
          placeholder="Search.."
          value={selectedOptions ? selectedOptions.name : search} // Display selected district name or search query
          onChange={(e) => setSearch(e.target.value)}
          onFocus={() => setIsOpen(true)}
          className={`w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none`}
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
          <div className="absolute left-0 z-20 w-full max-h-60 overflow-auto mt-1 p-1 bg-white border rounded-md shadow-lg top-full">
            <div className="w-full overflow-auto">
              {filteredItems.map((item) => (
                <p
                  key={item._id}
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
    </div>
  );
};

export default LocationFiled;
