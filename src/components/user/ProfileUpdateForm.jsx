import { useState } from "react";
import InputFiled from "../formElement/InputFiled";
import LocationFiled from "../formElement/LocationFiled";
import api from "../../api/api";
import { toast } from "react-toastify";
import { useAuth } from "../../context/AuthContext";

const ProfileUpdateForm = () => {
  const { user, location, login } = useAuth();

  const [userFormData, setUserFormData] = useState({
    name: user.name,
    email: user.email,
    username: user.username,
    avatar: user.avater,
    location: location._id,
  });
  const [errors, setErrors] = useState({});
  const handleOnChange = (value, name) => {
    setUserFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: null }));
    }
  };

  const handleUpdateSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await api.put(`users/${user._id}`, userFormData, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.status === 200) {
        setErrors({});

        const { _id, name, email, username, avater } = response.data.data.user;

        login(
          response.data.data.token,
          { _id, name, email, username, avater },
          response.data.data.locationItem
        );

        toast.success("Update Successfully!");
      }
    } catch (error) {

      const errorData = error.response?.data?.error || null;

      if (errorData && Array.isArray(errorData)) {
        // If errorData is an array, format the errors
        const formattedErrors = errorData.reduce((acc, err) => {
          acc[err.path] = err.msg;
          return acc;
        }, {});
        setErrors(formattedErrors);
      } else {
        setErrors({
          general: errorData,
        });
      }

    }
  };
  return (
    <div className="flex flex-col p-6 bg-white rounded-lg shadow ">
      <form onSubmit={handleUpdateSubmit}>
        {errors.general && <p className="text-red-500">{errors.general}</p>}

        {/* Editable Fields */}
        <div className="grid grid-cols-2 gap-x-4">
          <div>
            <InputFiled
              label="Name"
              name="name"
              type="text"
              placeholder="Enter your name"
              value={userFormData.name}
              onChange={handleOnChange}
            />
            {errors.name && <p className="text-red-500">{errors.name}</p>}
          </div>

          <div>
            <InputFiled
              label="User Name"
              name="username"
              type="text"
              placeholder="Enter your email"
              value={userFormData.username}
              onChange={handleOnChange}
            />
            {errors.username && (
              <p className="text-red-500">{errors.username}</p>
            )}
          </div>

          <div className="col-span-2">
            <InputFiled
              label="Email"
              name="email"
              type="email"
              placeholder="Enter your email"
              value={userFormData.email}
              onChange={handleOnChange}
            />
            {errors.email && <p className="text-red-500">{errors.email}</p>}
          </div>
          <div className="col-span-2">
            <LocationFiled
              onChange={handleOnChange}
              value={userFormData.location}
            />
            {errors.location && (
              <p className="text-red-500">{errors.location}</p>
            )}
          </div>
        </div>

        {/* Save Button */}
        <button className="px-6 py-2 mt-6 font-semibold text-white bg-teal-500 rounded-md hover:bg-teal-600">
          Update Profile
        </button>
      </form>
    </div>
  );
};

export default ProfileUpdateForm;
