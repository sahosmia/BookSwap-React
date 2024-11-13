const CategoryNavigation = ({
  categories,
  selectedCategory,
  onSelectCategory,
}) => {
  return (
    <div className="flex flex-col md:flex-row md:justify-between md:items-center space-y-4 md:space-y-0">
      <div className="text-center md:text-left">
        <h2 className="text-3xl font-bold text-black">
          Discover the best books for you
        </h2>
        <hr className="my-4" />
      </div>
      <div className="flex flex-wrap justify-center md:justify-start gap-2">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => onSelectCategory(category)}
            className={`px-4 py-2 rounded transition-colors duration-300 ${
              selectedCategory === category
                ? "bg-blue-500 text-white"
                : "bg-gray-200 text-gray-700"
            }`}
          >
            {category.charAt(0).toUpperCase() + category.slice(1)}
          </button>
        ))}
      </div>
    </div>
  );
};

export default CategoryNavigation;
