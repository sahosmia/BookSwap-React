import { useEffect, useState } from "react";
import Banner from "../components/Banner.jsx";
import BookList from "../components/book/BookList.jsx";
import Location from "./Location.jsx";
import Cookies from "js-cookie";

import LoginModel from "../components/LoginModel.jsx";
import SignUpModal from "../components/SignUpModal.jsx";
import { useSignupView } from "../context/SignUpContext.jsx";
import { useLoginView } from "../context/loginContext.jsx";

const Home = () => {
  const [location, setLocation] = useState(localStorage.getItem("location"));
  const signupView = useSignupView();
  const loginView = useLoginView();

  useEffect(() => {
    const storedLocation = localStorage.getItem("location");
    setLocation(storedLocation);
  }, []);

  const handleLocation = (newLocation) => {
    setLocation(newLocation);
  };

  const token = Cookies.get("token");

  if (location === null) {
    return (
      <div className="h-[500px]  w-full mx-auto pt-52 bg-opacity-15 z-10  bg-[url('https://i.pinimg.com/564x/cb/be/72/cbbe720dfad485f4aa2f561959abb7b8.jpg')] relative after:absolute after:w-full after:h-full after:inset-0 after:bg-white  after:-z-10 after:bg-opacity-80">
        <Location handleLocation={handleLocation} />
      </div>
    );
  }

  return (
    <div className=" bg-opacity-15 z-10  bg-[url('https://i.pinimg.com/564x/cb/be/72/cbbe720dfad485f4aa2f561959abb7b8.jpg')] relative after:absolute after:w-full after:h-full after:inset-0 after:bg-white  after:-z-10 after:bg-opacity-80">
      <Banner />
      <BookList />
      {signupView && <SignUpModal />}
      {loginView && <LoginModel />}
    </div>
  );
};

export default Home;
