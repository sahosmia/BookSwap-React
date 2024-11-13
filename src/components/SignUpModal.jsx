import { useState } from "react";
import PasswordField from "./loginform/PasswordField";
import InputFiled from "./loginform/InputFiled";
import LocationFiled from "./loginform/LocationFiled";
import api from "../api/api";
import { toast } from "react-toastify";
import Cookies from "js-cookie";
import { useSignupViewDispatch } from "../context/SignUpContext";

function SignUpModal() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    location: "64b5b1f1b6e09b1c2a1f1e17",
  });
  const [errors, setErrors] = useState({});
  const signupDispatch = useSignupViewDispatch();

  const handleRegisterSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await api.post("register", formData, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.status === 200) {
        // Clear form data
        setFormData({ name: "", email: "", location: "", password: "" });
        setErrors({}); // Clear errors if the request is successful

        // Set location in local storage
        localStorage.setItem(
          "location",
          JSON.stringify(response.data.data.locationItem)
        );
        const { name, email, username, avater } = response.data.data.user;

        localStorage.setItem(
          "user",
          JSON.stringify({ name, email, username, avater })
        );
        console.log(response.data.data.token);
        console.log(response.data.data.user);

        Cookies.set("token", response.data.data.token, {
          expires: 7,
          path: "/",
        });

        // Redirect to dashboard or close login view
        signupDispatch({
          type: "sign_up_false",
        });
        toast.success("Signup Successfully!"); // Show success toast
      }
    } catch (error) {
      const errorData = error.response?.data.error || [];
      const formattedErrors = errorData.reduce((acc, err) => {
        acc[err.path] = err.msg;
        return acc;
      }, {});
      setErrors(formattedErrors); // Set errors state for display
      console.log("Error:", formattedErrors);
    }
  };

  const handleOnChange = (value, name) => {
    setFormData({ ...formData, [name]: value });
    if (errors[name]) {
      setErrors({ ...errors, [name]: null });
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="relative p-6 bg-white rounded-lg shadow-lg w-96">
        {/* Close button */}
        <button
          onClick={() =>
            signupDispatch({
              type: "sign_up_false",
            })
          }
          className="absolute text-gray-500 top-4 right-4 hover:text-gray-700 focus:outline-none"
        >
          ✕
        </button>

        {/* Header */}
        <h2 className="text-2xl font-semibold text-gray-800">Welcome!</h2>
        <p className="mt-1 text-gray-600">Sign up or log in to continue</p>

        <form onSubmit={handleRegisterSubmit}>
          <div>
            <InputFiled
              label="Name"
              name="name"
              type="text"
              placeholder="Enter your name"
              value={formData.name}
              onChange={handleOnChange}
            />
            {errors.name && <p className="text-red-500">{errors.name}</p>}

            <InputFiled
              label="Email"
              name="email"
              type="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleOnChange}
            />
            {errors.email && <p className="text-red-500">{errors.email}</p>}

            <PasswordField
              onChange={handleOnChange}
              value={formData.password}
            />
            {errors.password && (
              <p className="text-red-500">{errors.password}</p>
            )}

            <LocationFiled
              onChange={handleOnChange}
              value={formData.location}
            />
            {errors.location && (
              <p className="text-red-500">{errors.location}</p>
            )}

            <button
              type="submit"
              className="w-full py-2 my-3 text-pink-500 border border-pink-500 rounded-lg hover:bg-pink-100"
            >
              Sign up
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SignUpModal;
