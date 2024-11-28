import { toast } from "react-toastify";
import api from "../api/api";
import { useLoginModal } from "../context/LoginModalContext";
import { useAuth } from "../context/AuthContext";

const useLoginSubmit = (formData, setFormData, setErrors, setIsLoading) => {
  const { setLoginModal } = useLoginModal();
  const { login } = useAuth();

  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true); // Set loading state to true

    try {
      const response = await api.post("login", formData, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.status === 200) {
        const { token, locationItem, user } = response.data.data;
        const { _id, name, email, username, avater } = user;
        const newUser = { _id, name, email, username, avater };
        login(token, newUser, locationItem);
        setLoginModal(false);

        // Reset form data and errors
        setFormData({ email: "", password: "" });
        setErrors({});
        toast.success("Login Successfully!"); // Show success toast
      }
    } catch (error) {
      const errorData = error.response?.data?.error || null;

      if (errorData && Array.isArray(errorData)) {
        // If errorData is an array, format the errors
        const formattedErrors = errorData.reduce((acc, err) => {
          acc[err.path] = err.msg; // Map errors by field
          return acc;
        }, {});
        setErrors(formattedErrors);
      } else {
        setErrors({
          general:
            errorData || "An unexpected error occurred. Please try again.",
        });
      }

      toast.error("Login failed. Please check your credentials."); // Show error toast
      console.error("Login Error:", errorData);
    } finally {
      setIsLoading(false); // Set loading state back to false
    }
  };

  return handleLoginSubmit;
};

export default useLoginSubmit;
