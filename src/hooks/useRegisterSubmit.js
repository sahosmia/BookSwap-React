import { toast } from "react-toastify";
import { useRegisterModal } from "../context/RegisterModalContext"; // Assuming you have a signup context
import api from "../api/api";
import { useAuth } from "../context/AuthContext";

const useRegisterSubmit = (formData, setFormData, setErrors, setIsLoading) => {
  const { setRegisterModal } = useRegisterModal();
  const { login } = useAuth();

  const handleRegisterSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const response = await api.post("register", formData, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.status === 201) {
        const { token, locationItem, user } = response.data.data;
        const { _id, name, email, username, avater } = user;
        const newUser = { _id, name, email, username, avater };

        login(token, newUser, locationItem);

        // Clear form data
        setFormData({ name: "", email: "", location: "", password: "" });
        setErrors({});
        setRegisterModal(false);
        toast.success("Signup Successfully!");
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
          general:
            errorData || "An unexpected error occurred. Please try again.",
        });
      }
      console.log("Error:", errorData);
    } finally {
      setIsLoading(false); // Set loading state back to false
    }
  };

  return handleRegisterSubmit;
};

export default useRegisterSubmit;
