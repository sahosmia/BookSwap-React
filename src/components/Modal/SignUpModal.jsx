import { useEffect, useRef, useState } from "react";
import PasswordField from "../formElement/PasswordField";
import InputFiled from "../formElement/InputFiled";
import LocationFiled from "../formElement/LocationFiled";
import useRegisterSubmit from "../../hooks/useRegisterSubmit";
import { useRegisterModal } from "../../context/RegisterModalContext";

function SignUpModal() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    location: "",
  });
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false); // Toggle for password visibility

  const { setRegisterModal } = useRegisterModal();
  const closeModalRef = useRef();

  // Close modal when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        closeModalRef.current &&
        !closeModalRef.current.contains(event.target)
      ) {
        setRegisterModal(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [setRegisterModal]);

  // Reset form data when modal closes
  useEffect(() => {
    if (!setRegisterModal) {
      setFormData({
        name: "",
        email: "",
        password: "",
        location: "",
      });
      setErrors({});
    }
  }, [setRegisterModal]);

  // Custom hook for form submission
  const handleRegisterSubmit = useRegisterSubmit(
    formData,
    setFormData,
    setErrors,
    setIsLoading
  );

  // Handle form field changes
  const handleOnChange = (value, name) => {
    setFormData({ ...formData, [name]: value });
    if (errors[name]) {
      setErrors({ ...errors, [name]: null });
    }
  };

  // Toggle password visibility
  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div
        className="relative p-6 bg-white rounded-lg shadow-lg w-96"
        ref={closeModalRef}
      >
        {/* Close button */}
        <button
          onClick={() => setRegisterModal(false)}
          className="absolute text-gray-500 top-4 right-4 hover:text-gray-700 focus:outline-none"
        >
          ✕
        </button>

        {/* Header */}
        <h2 className="text-2xl font-semibold text-gray-800">Welcome!</h2>
        <p className="mt-1 text-gray-600">Sign up or log in to continue</p>
        {errors.general && <p className="text-red-500">{errors.general}</p>}

        {/* Form */}
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
              label="Password"
              name="password"
              placeholder="Enter your password"
              value={formData.password}
              onChange={handleOnChange}
              type={showPassword ? "text" : "password"} // Toggle password visibility
            />
            <button
              type="button"
              onClick={togglePasswordVisibility}
              className="text-sm text-gray-600 hover:text-gray-800"
            >
              {/* {showPassword ? "Hide Password" : "Show Password"} */}
            </button>
            {errors.password && (
              <p className="text-red-500">{errors.password}</p>
            )}

            <LocationFiled
              label="Location"
              name="location"
              placeholder="Enter your location"
              value={formData.location}
              onChange={handleOnChange}
            />
            {errors.location && (
              <p className="text-red-500">{errors.location}</p>
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
              {isLoading ? "Signing Up..." : "Sign Up"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SignUpModal;
