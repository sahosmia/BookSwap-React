import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import InputFiled from "../components/formElement/InputFiled";
import TextAreaFiled from "../components/formElement/TextAreaFiled";
import CategoryFiled from "../components/formElement/CategoryFiled";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const BookUploadForm = () => {
  const navigate = useNavigate();
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
    category: "",
  });
  const { token } = useAuth();

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData({ ...formData, cover_photo: e.target.files[0] });
    }
  };

  const handleChange = (value, name) => {
    setFormData({ ...formData, [name]: value });

    if (errors[name]) {
      setErrors({ ...errors, [name]: null });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrors({});
    setIsLoading(true);

    if (
      !formData.cover_photo ||
      !formData.title ||
      !formData.slug ||
      !formData.author_name ||
      !formData.description ||
      !formData.publication_name ||
      !formData.total_page ||
      !formData.category
    ) {
      toast.error("Please give all input data!");
      setIsLoading(false);
      return;
    }

    const form = new FormData();
    form.append("cover_photo", formData.cover_photo);
    form.append("title", formData.title);
    form.append("slug", formData.slug);
    form.append("total_page", formData.total_page);
    form.append("author_name", formData.author_name);
    form.append("publication_name", formData.publication_name);
    form.append("description", formData.description);
    form.append("user", formData.user);
    form.append("location", formData.location);
    form.append("category", formData.category);

    try {
      const response = await fetch(`http://localhost:5000/api/books`, {
        method: "POST",
        body: form,
        headers: {
          Authorization: "Bearer " + token,
        },
      });

      const result = await response.json();

      if (response.ok) {
        toast.success("Book uploaded successfully!");
        navigate("/profile");
      } else {
        if (result.message) {
          toast.error(result.message);
        } else {
          toast.error(result.error);
        }
        console.log(result);
      }
    } catch (error) {
      console.error("Error uploading avatar:", error);
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <div className="max-w-md p-4 mx-auto my-5 bg-white rounded-lg shadow-md">
      <h1 className="mb-6 text-2xl font-bold text-gray-800">Upload Book</h1>
      {errors.genarel && <p className="text-red-500">{errors.genarel}</p>}
      <form onSubmit={handleSubmit} encType="multipart/form-data">
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
        <div className="py-5">
          <label
            htmlFor="avatar"
            className="block mb-2 text-sm font-medium text-gray-700"
          >
            Choose your book cover photo
          </label>
          <input
            name="cover_photo"
            className="w-full text-gray-500 font-medium text-base bg-gray-100 file:cursor-pointer cursor-pointer file:border-0 file:py-2.5 file:px-4 file:mr-4 file:bg-gray-800 file:hover:bg-gray-700 file:text-white rounded"
            id="file_input"
            type="file"
            onChange={handleFileChange}
          />
          <p className="mt-1 text-sm text-gray-500" id="file_input_help">
            PNG, JPG, or JPGE (max 1mb).
          </p>
        </div>
        {errors.cover_photo && (
          <p className="text-red-500">{errors.cover_photo}</p>
        )}{" "}
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
