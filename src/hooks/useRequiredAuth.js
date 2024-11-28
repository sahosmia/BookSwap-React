import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { useEffect } from "react";

const useRequireAuth = () => {
  const { user } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate("/"); // Redirect to the home page
    }
  }, [user, navigate]);

  return !!user; // Return true if the user is authenticated
};

export default useRequireAuth;
