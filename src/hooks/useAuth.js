import Cookies from "js-cookie";

const useAuth = () => {
  const token = Cookies.get("token");
  const location = localStorage.getItem("location");
  return { token, location };
};

export default useAuth;
