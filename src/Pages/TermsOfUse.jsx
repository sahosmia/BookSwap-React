import { useState } from "react";

const TermsOfUse = () => {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent the default form submission behavior

    if (!selectedFile) {
      alert("Please select a file first!");
      return;
    }

    const formData = new FormData();
    formData.append("avater", selectedFile);

    try {
      const response = await fetch(
        "http://localhost:5000/api/users/upload_avater/6736e4b084f2ecab73434fe2", // Replace with the correct user ID
        {
          method: "POST",
          body: formData,
        }
      );

      const result = await response.json();

      if (response.ok) {
        alert("Avatar uploaded successfully!");
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
    <div>
      <h1>Upload Avatar</h1>
      <form onSubmit={handleSubmit} encType="multipart/form-data">
        <input type="file" name="avater" onChange={handleFileChange} />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default TermsOfUse;
