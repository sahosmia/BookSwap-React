import { useState } from "react";
import InputFiled from "../components/formElement/InputFiled";
import CategoryFiled from "../components/formElement/CategoryFiled";
import TextAreaFiled from "../components/formElement/TextAreaFiled";
import api from "../api/api";
import { toast } from "react-toastify";
import { useAuth } from "../context/AuthContext";

const BookUploadForm = () => {
  const { token } = useAuth();
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    title: "",
    slug: "",
    total_page: "",
    cover_photo: "",
    author_name: "",
    publication_name: "",
    description: "",
    user: "6742c4e9106b305f75331a2a",
    location: "64b5b1f1b6e09b1c2a1f1e19",
    category: "",
  });

  const handleChange = (value, name) => {
    if (name === "cover_photo" && value.target?.files) {
      setFormData({ ...formData, [name]: value.target.files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
    if (errors[name]) {
      setErrors({ ...errors, [name]: null });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    console.log(formData);

    try {
      const response = await api.post("books", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          // Authorization: "Bearer " + token,
        },
      });

      console.log(formData);

      if (response.status === 201) {
        setFormData({
          title: "",
          slug: "",
          total_page: "",
          cover_photo: "",
          author_name: "",
          publication_name: "",
          description: "",
          user: "6742c4e9106b305f75331a2a",
          location: "64b5b1f1b6e09b1c2a1f1e19",
          category: "",
        });
        setErrors({});
        toast.success("Book uploaded successfully!");
      }
    } catch (error) {
      const errorData = error.response?.data || {};
      console.log(error.response);
      const errorMessages = errorData.error || null;

      if (Array.isArray(errorMessages)) {
        // If `error` is an array, map to specific fields
        const fieldErrors = errorMessages.reduce((acc, msg) => {
          const match = msg.match(/"(.+?)"/);
          if (match) {
            const field = match[1];
            acc[field] = msg;
          }
          return acc;
        }, {});
        setErrors(fieldErrors);
      } else if (typeof errorMessages === "string") {
        // If `error` is a string, set as a general error
        setErrors({ general: errorMessages });
      } else {
        // Fallback for unexpected error formats
        setErrors({
          general: "An unexpected error occurred. Please try again.",
        });
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="max-w-md p-4 mx-auto my-5 bg-white rounded-lg shadow-md">
      <h2 className="mb-6 text-2xl font-semibold text-center">Upload a Book</h2>

      {errors.general && (
        <div className="mb-4 text-red-500">{errors.general}</div>
      )}

      <form onSubmit={handleSubmit}>
        <InputFiled
          label="Title"
          type="text"
          name="title"
          value={formData.title}
          onChange={handleChange}
          placeholder="Enter book title"
        />
        {errors.title && <p className="text-red-500">{errors.title}</p>}

        <InputFiled
          label="Slug"
          type="text"
          name="slug"
          value={formData.slug}
          onChange={handleChange}
          placeholder="Enter book slug"
        />
        {errors.slug && <p className="text-red-500">{errors.slug}</p>}

        <InputFiled
          label="Total Page"
          type="number"
          name="total_page"
          value={formData.total_page}
          onChange={handleChange}
          placeholder="Enter book total page"
        />
        {errors.total_page && (
          <p className="text-red-500">{errors.total_page}</p>
        )}

        <InputFiled
          label="Cover Photo"
          type="file"
          name="cover_photo"
          onChange={(e) => handleChange(e, "cover_photo")}
        />
        {errors.cover_photo && (
          <p className="text-red-500">{errors.cover_photo}</p>
        )}

        <InputFiled
          label="Author Name"
          type="text"
          name="author_name"
          value={formData.author_name}
          onChange={handleChange}
          placeholder="Enter book author name"
        />
        {errors.author_name && (
          <p className="text-red-500">{errors.author_name}</p>
        )}

        <InputFiled
          label="Publication Name"
          type="text"
          name="publication_name"
          value={formData.publication_name}
          onChange={handleChange}
          placeholder="Enter book publication name"
        />
        {errors.publication_name && (
          <p className="text-red-500">{errors.publication_name}</p>
        )}

        <CategoryFiled onChange={handleChange} value={formData.category} />
        {errors.category && <p className="text-red-500">{errors.category}</p>}

        <InputFiled
          label="Cover Photo"
          type="file"
          name="cover_photo"
          onChange={(e) => handleChange(e, "cover_photo")}
        />
        {errors.cover_photo && (
          <p className="text-red-500">{errors.cover_photo}</p>
        )}

        <TextAreaFiled
          label="Description"
          name="description"
          value={formData.description}
          onChange={handleChange}
          placeholder="Enter book description"
        />
        {errors.description && (
          <p className="text-red-500">{errors.description}</p>
        )}

        <button
          type="submit"
          disabled={isLoading}
          className={`w-full py-2 my-3 text-white rounded-lg ${
            isLoading
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-pink-500 hover:bg-pink-600"
          }`}
        >
          {isLoading ? "Uploading Book..." : "Upload Book"}
        </button>
      </form>
    </div>
  );
};

export default BookUploadForm;
