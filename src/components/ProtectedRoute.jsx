import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { useLoginModal } from "../context/LoginModalContext";

const ProtectedRoute = ({ children }) => {
  const { user } = useAuth();
  const { setLoginModal } = useLoginModal();

  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      setLoginModal(true); // Show login modal

      navigate("/");
    }
  }, [user, navigate]);

  return children;
};

export default ProtectedRoute;
