import { useEffect, useRef, useState } from "react";
import { useLoginModal } from "../../context/LoginModalContext";
import InputFiled from "../formElement/InputFiled";
import PasswordField from "../formElement/PasswordField";
import useLoginSubmit from "../../hooks/useLoginSubmit";

function LoginModal() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false); // For password visibility toggle
  const { setLoginModal } = useLoginModal();
  const closeModalRef = useRef();

  // Close modal by clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        closeModalRef.current &&
        !closeModalRef.current.contains(event.target)
      ) {
        setLoginModal(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [setLoginModal]);

  // Reset form data and errors when modal is closed
  useEffect(() => {
    if (!setLoginModal) {
      setFormData({
        email: "",
        password: "",
      });
      setErrors({});
    }
  }, [setLoginModal]);

  // Custom hook for form submission logic
  const handleLoginSubmit = useLoginSubmit(
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
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
      role="dialog"
      aria-labelledby="login-modal-title"
      aria-modal="true"
    >
      <div
        className="relative p-6 bg-white rounded-lg shadow-lg w-96"
        ref={closeModalRef}
      >
        {/* Close button */}
        <button
          onClick={() => setLoginModal(false)}
          className="absolute text-gray-500 top-4 right-4 hover:text-gray-700 focus:outline-none"
          aria-label="Close Login Modal"
        >
          ✕
        </button>

        {/* Header */}
        <h2
          id="login-modal-title"
          className="text-2xl font-semibold text-gray-800"
        >
          Welcome Back!
        </h2>
        <p className="mt-1 text-gray-600">Log in to access your account</p>
        {errors.general && <p className="text-red-500">{errors.general}</p>}

        {/* Form */}
        <form onSubmit={handleLoginSubmit}>
          <div>
            <InputFiled
              label="Email"
              name="email"
              type="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleOnChange}
              required
            />
            {errors.email && <p className="text-red-500">{errors.email}</p>}

            <PasswordField
              label="Password"
              name="password"
              placeholder="Enter your password"
              value={formData.password}
              onChange={handleOnChange}
              required
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

            <button
              type="submit"
              disabled={isLoading}
              className={`w-full py-2 my-3 text-white rounded-lg ${
                isLoading
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-pink-500 hover:bg-pink-600"
              }`}
            >
              {isLoading ? "Logging in..." : "Log in"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default LoginModal;
