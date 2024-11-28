import useFetchApi from "../../hooks/useFetchApi";

const CategoryNavigation = ({ setSelectedCategory, selectedCategory }) => {
  const { data, loading } = useFetchApi("categories");

  if (loading) {
    return <div>Loading...</div>;
  }
  return (
    <div className="flex flex-col space-y-4 md:flex-row md:justify-between md:items-center md:space-y-0">
      <div className="text-center md:text-left">
        <h2 className="text-3xl font-bold text-black">
          Discover the best books for you
        </h2>
      </div>
      <div className="flex flex-wrap justify-center gap-2 md:justify-start">
        <button
          key="all"
          onClick={() => setSelectedCategory("")}
          className={`px-4 py-2 rounded transition-colors duration-300 ${
            selectedCategory === ""
              ? "bg-blue-500 text-white"
              : "bg-gray-200 text-gray-700"
          }`}
        >
          All
        </button>
        {data.data.length > 0 &&
          data.data.map((category) => (
            <button
              key={category._id}
              onClick={() => setSelectedCategory(category._id)}
              className={`px-4 py-2 rounded transition-colors duration-300 ${
                selectedCategory === category._id
                  ? "bg-blue-500 text-white"
                  : "bg-gray-200 text-gray-700"
              }`}
            >
              {category.title}
            </button>
          ))}
      </div>
    </div>
  );
};

export default CategoryNavigation;
