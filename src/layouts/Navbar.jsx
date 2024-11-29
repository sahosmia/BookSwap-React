import { useState } from "react";
import { IoIosMenu } from "react-icons/io";
import { MdFavorite } from "react-icons/md";

import { NavLink } from "react-router-dom";
import MessageBox from "../components/navbar/MessagesBox";
import NotificationBox from "../components/navbar/NotificationBox";
import ProfileDropdown from "../components/navbar/ProfileDropdown";
import { useRegisterModal } from "../context/RegisterModalContext";
import { useLoginModal } from "../context/LoginModalContext";
import SignUpModal from "../components/Modal/SignUpModal";
import LoginModal from "../components/Modal/LoginModal";
import Search from "../components/navbar/Search";
import NavLogo from "../components/navbar/NavLogo";
import MobileMenu from "../components/navbar/MobileMenu";
import { useAuth } from "../context/AuthContext";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { registerModal } = useRegisterModal();
  const { loginModal } = useLoginModal();
  const { user } = useAuth();

  return (
    <>
      <nav className="container relative flex items-center justify-between px-8 py-4 bg-white shadow-md">
        <NavLogo />

        {/* Navbar Icons */}
        <div className="items-center hidden space-x-6 text-gray-500 lg:flex">
          <Search />
          <NavLink
            to="/wishlists"
            className={({ isActive }) => (isActive ? "text-teal-500" : "")}
          >
            <MdFavorite className="w-8 h-10 hover:text-teal-500 " />
          </NavLink>
          {user && <MessageBox />}
          {/* <NotificationBox /> */}
          <ProfileDropdown />
        </div>

        {/*MOBILE MENU Icons */}
        {isOpen && <MobileMenu />}

        <div className="block lg:hidden" onClick={() => setIsOpen(!isOpen)}>
          <IoIosMenu className="w-10 h-10" />
        </div>
      </nav>
      {registerModal && <SignUpModal />}
      {loginModal && <LoginModal />}
    </>
  );
};

export default Navbar;
