import { useEffect, useState } from "react";
import { useAuth } from "../context/AuthContext";
import InputFiled from "../components/formElement/InputFiled";
import TextAreaFiled from "../components/formElement/TextAreaFiled";
import CategoryFiled from "../components/formElement/CategoryFiled";
import { toast } from "react-toastify";
import { useNavigate, useParams } from "react-router-dom";
import api from "../api/api";

const BookUpdatePage = () => {
  const { slug } = useParams(); // Assume book ID is passed via route params
  const navigate = useNavigate();
  const [id, setId] = useState();
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [isFetching, setIsFetching] = useState(true);
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

  // Fetch existing book data
  useEffect(() => {
    const fetchBook = async () => {
      try {
        const response = await api.get(
          `http://localhost:5000/api/books/${slug}`
        );

        if (response.status === 200) {
          const data = await response.data.data;
          setFormData({
            title: data.title || "",
            slug: data.slug || "",
            total_page: data.total_page || "",
            cover_photo: "", // Reset file input
            author_name: data.author_name || "",
            publication_name: data.publication_name || "",
            description: data.description || "",
            category: data.category._id || "",
          });
          setId(data._id);
        } else {
          toast.error("Failed to fetch book details.");
        }
      } catch (error) {
        console.error("Error fetching book details:", error);
        toast.error("Something went wrong!");
      } finally {
        setIsFetching(false);
      }
    };

    fetchBook();
  }, [slug, token]);

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
      !formData.title ||
      !formData.slug ||
      !formData.author_name ||
      !formData.description ||
      !formData.publication_name ||
      !formData.total_page ||
      !formData.category
    ) {
      toast.error("Please provide all required fields!");
      setIsLoading(false);
      return;
    }

    const form = new FormData();
    if (formData.cover_photo) {
      form.append("cover_photo", formData.cover_photo); // Only include file if updated
    }
    form.append("title", formData.title);
    form.append("slug", formData.slug);
    form.append("total_page", formData.total_page);
    form.append("author_name", formData.author_name);
    form.append("publication_name", formData.publication_name);
    form.append("description", formData.description);
    form.append("category", formData.category);

    try {
      const response = await fetch(`http://localhost:5000/api/books/${id}`, {
        method: "PUT", // Use PUT for updates
        body: form,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const result = await response.json();

      if (response.ok) {
        toast.success("Book updated successfully!");
        navigate("/profile");
      } else {
        if (result.message) {
          toast.error(result.message);
        } else {
          toast.error(result.error);
        }
      }
    } catch (error) {
      console.error("Error uploading avatar:", error);
    } finally {
      setIsLoading(false);
    }
  };

  if (isFetching) {
    return <p>Loading book details...</p>;
  }

  return (
    <div className="max-w-md p-4 mx-auto my-5 bg-white rounded-lg shadow-md">
      <h1 className="mb-6 text-2xl font-bold text-gray-800">Update Book</h1>
      <form onSubmit={handleSubmit} encType="multipart/form-data">
        <InputFiled
          label="Title"
          type="text"
          name="title"
          value={formData.title}
          onChange={handleChange}
          placeholder="Enter book title"
        />
        <InputFiled
          label="Slug"
          type="text"
          name="slug"
          value={formData.slug}
          onChange={handleChange}
          placeholder="Enter book slug"
        />
        <InputFiled
          label="Total Page"
          type="number"
          name="total_page"
          value={formData.total_page}
          onChange={handleChange}
          placeholder="Enter book total page"
        />
        <div className="py-5">
          <label
            htmlFor="avatar"
            className="block mb-2 text-sm font-medium text-gray-700"
          >
            Update book cover photo
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
        <InputFiled
          label="Author Name"
          type="text"
          name="author_name"
          value={formData.author_name}
          onChange={handleChange}
          placeholder="Enter book author name"
        />
        <InputFiled
          label="Publication Name"
          type="text"
          name="publication_name"
          value={formData.publication_name}
          onChange={handleChange}
          placeholder="Enter book publication name"
        />
        <CategoryFiled onChange={handleChange} value={formData.category} />
        <TextAreaFiled
          label="Description"
          name="description"
          value={formData.description}
          onChange={handleChange}
          placeholder="Enter book description"
        />
        <button
          type="submit"
          disabled={isLoading}
          className={`w-full py-2 my-3 text-white rounded-lg ${
            isLoading
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-pink-500 hover:bg-pink-600"
          }`}
        >
          {isLoading ? "Updating Book..." : "Update Book"}
        </button>
      </form>
    </div>
  );
};

export default BookUpdatePage;
