import { useState } from "react";
import { Avatar } from "@mui/material";
import { useAuth } from "../../context/AuthContext";
import { toast } from "react-toastify";

const AvaterUpload = ({ name, avater }) => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [preview, setPreview] = useState(
    `http://localhost:5000/uploads/books/453214180_1671417273673147_7808907609316499759_n-1732802687450.jpeg`
  );
  const { user, updateUser } = useAuth();

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setSelectedFile(file);

      // Generate a preview URL
      const reader = new FileReader();
      reader.onloadend = () => setPreview(reader.result);
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!selectedFile) {
      alert("Please select a file first!");
      return;
    }

    const formData = new FormData();
    formData.append("avater", selectedFile);

    try {
      const response = await fetch(
        `http://localhost:5000/api/users/upload_avater/${user._id}`, // Replace with the correct user ID
        {
          method: "POST",
          body: formData,
        }
      );

      const result = await response.json();

      if (response.ok) {
        updateUser(result.data.user);

        toast.success("Avatar uploaded successfully!");
      } else {
        alert(`Error: ${result.message}`);
      }
    } catch (error) {
      console.error("Error uploading avatar:", error);
      alert("Something went wrong. Please try again.");
      alert(error.message);
    }
  };

  return (
    <div className="flex flex-col p-6 bg-white rounded-lg shadow">
      <h1 className="mb-6 text-2xl font-bold text-gray-800">Upload Avatar</h1>
      <Avatar src={preview} alt={name} sx={{ width: 90, height: 90 }} />
      <form onSubmit={handleSubmit} encType="multipart/form-data">
        <div className="py-5">
          <label
            htmlFor="avatar"
            className="block mb-2 text-sm font-medium text-gray-700"
          >
            Choose File
          </label>
          <input
            name="avater"
            className="w-full text-gray-500 font-medium text-base bg-gray-100 file:cursor-pointer cursor-pointer file:border-0 file:py-2.5 file:px-4 file:mr-4 file:bg-gray-800 file:hover:bg-gray-700 file:text-white rounded"
            id="file_input"
            type="file"
            onChange={handleFileChange}
          />
          <p className="mt-1 text-sm text-gray-500" id="file_input_help">
            PNG, JPG, or JPGE (MAX. 800x400px).
          </p>
        </div>
        <button className="px-6 py-2 font-semibold text-white bg-teal-500 rounded-md hover:bg-teal-600">
          Update Avatar
        </button>
      </form>
    </div>
  );
};

export default AvaterUpload;
