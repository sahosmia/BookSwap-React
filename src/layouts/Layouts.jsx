import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Navbar from "./Navbar";
import Location from "../components/Modal/Location";
import { useAuth } from "../context/AuthContext";

const Layouts = () => {
  const { location } = useAuth();

  return (
    <>
      <Navbar />
      {!location ? <Location /> : <Outlet />}
      <Footer />
    </>
  );
};

export default Layouts;
