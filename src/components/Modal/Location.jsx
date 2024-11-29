import { useEffect, useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import api from "../../api/api";
import { useAuth } from "../../context/AuthContext";

const Location = () => {
  const [search, setSearch] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOptions, setSelectedOptions] = useState(null);
  const [districts, setDistricts] = useState([]);
  const { updateLocation } = useAuth();

  useEffect(() => {
    api
      .get("districts")
      .then((response) => {
        setDistricts(response.data.data);
      })
      .catch((err) => console.log(err.message));
  }, []);

  const filteredItems = districts.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest(".custom-select")) setIsOpen(false);
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const toggleSelection = (item) => {
    setSelectedOptions(item);
    setIsOpen(false);
  };

  const handleLocations = () => {
    if (selectedOptions) {
      updateLocation(selectedOptions);
    }
  };

  return (
    <div className="relative flex items-center justify-center h-screen bg-gray-100 relat">
      <div className="max-w-md p-3 mx-auto border rounded-lg shadow-md ">
        <h4 className="pb-2 font-medium text-gray-500 ">
          Select a location to get specific books
        </h4>
        <div className="flex items-center ">
          <div className="relative flex w-full custom-select">
            <input
              type="text"
              placeholder="Search.."
              value={selectedOptions ? selectedOptions.name : search}
              onChange={(e) => setSearch(e.target.value)}
              onFocus={() => setIsOpen(true)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none"
            />
            <IoIosArrowDown
              className={`${
                isOpen ? "rotate-[180deg]" : "rotate-0"
              } transition-all duration-300 text-[1.3rem] absolute top-[50%] transform translate-y-[-50%] right-3 text-gray-500`}
            />
            {isOpen && (
              <div className="absolute left-0 z-20 w-full p-1 mt-1 overflow-auto bg-white border rounded-md shadow-lg max-h-72 top-full">
                <div className="w-full overflow-auto">
                  {filteredItems.map((item) => (
                    <p
                      key={item.slug}
                      onClick={() => toggleSelection(item)}
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
            onClick={handleLocations}
            className="px-4 py-2 ml-2 text-white bg-pink-500 rounded min-w-28 hover:bg-pink-600 focus:outline-none"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default Location;
