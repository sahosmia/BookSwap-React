import React, { useState } from "react";

const BookUploadForm = () => {
  const [bookDetails, setBookDetails] = useState({
    title: "",
    author: "",
    page: "",
    publisher: "",
    category: "",
    cover: "",
    description: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBookDetails({
      ...bookDetails,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic, e.g., sending data to the server
    console.log("Book Details Submitted:", bookDetails);
  };

  return (
    <div className="max-w-md p-4 mx-auto my-5 bg-white rounded-lg shadow-md">
      <h2 className="mb-6 text-2xl font-semibold text-center">Upload a Book</h2>
      <form onSubmit={handleSubmit}>
        <label className="block mb-2">
          <span className="text-gray-700">Title</span>
          <input
            type="text"
            name="title"
            value={bookDetails.title}
            onChange={handleChange}
            className="block w-full px-3 py-2 mt-1 border rounded-lg"
            placeholder="Enter book title"
            required
          />
        </label>

        <label className="block mb-2">
          <span className="text-gray-700">Author</span>
          <input
            type="text"
            name="author"
            value={bookDetails.author}
            onChange={handleChange}
            className="block w-full px-3 py-2 mt-1 border rounded-lg"
            placeholder="Enter author name"
            required
          />
        </label>

        <label className="block mb-2">
          <span className="text-gray-700">Page Count</span>
          <input
            type="number"
            name="page"
            value={bookDetails.page}
            onChange={handleChange}
            className="block w-full px-3 py-2 mt-1 border rounded-lg"
            placeholder="Enter page count"
          />
        </label>

        <label className="block mb-2">
          <span className="text-gray-700">Publisher</span>
          <input
            type="text"
            name="publisher"
            value={bookDetails.publisher}
            onChange={handleChange}
            className="block w-full px-3 py-2 mt-1 border rounded-lg"
            placeholder="Enter publisher name"
          />
        </label>

        <label className="block mb-2">
          <span className="text-gray-700">Category</span>
          <input
            type="text"
            name="category"
            value={bookDetails.category}
            onChange={handleChange}
            className="block w-full px-3 py-2 mt-1 border rounded-lg"
            placeholder="Enter book category"
          />
        </label>

        <label className="block mb-2">
          <span className="text-gray-700">Cover Image URL</span>
          <input
            type="url"
            name="cover"
            value={bookDetails.cover}
            onChange={handleChange}
            className="block w-full px-3 py-2 mt-1 border rounded-lg"
            placeholder="Enter cover image URL"
            required
          />
        </label>

        <label className="block mb-4">
          <span className="text-gray-700">Description</span>
          <textarea
            name="description"
            value={bookDetails.description}
            onChange={handleChange}
            className="block w-full px-3 py-2 mt-1 border rounded-lg"
            placeholder="Enter book description"
            rows="3"
          ></textarea>
        </label>

        <button
          type="submit"
          className="w-full py-2 text-white bg-blue-500 rounded-lg hover:bg-blue-600"
        >
          Upload Book
        </button>
      </form>
    </div>
  );
};

export default BookUploadForm;
