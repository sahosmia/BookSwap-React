import { NavLink } from "react-router-dom";
import { BiConversation } from "react-icons/bi";
import { CiShoppingCart } from "react-icons/ci";
import { IoMdNotificationsOutline } from "react-icons/io";
import { RxAvatar } from "react-icons/rx";

const MobileMenu = () => {
  return (
    <div className="flex flex-col lg:hidden items-center space-x-6 p-5 text-gray-500 bg-white drop-shadow absolute top-[100%] left-0 w-full  divide-y divide-dashed">
      <NavLink to={"/cart"} className="flex items-center">
        <CiShoppingCart className="w-8 h-10 hover:fill-blue-500 " />{" "}
        <span className="mx-2">Cart</span>
      </NavLink>
      <NavLink to="/messages" className="flex items-center">
        <BiConversation className="w-8 h-10" />
        <span className="mx-2">Messages</span>
      </NavLink>
      <NavLink to="/notifications" className="flex items-center">
        <IoMdNotificationsOutline className="w-8 h-10" />{" "}
        <span className="mx-2">Notification</span>
      </NavLink>
      {/* Profile */}

      <NavLink to="/profile">
        <div className="flex items-center space-x-2">
          <button>
            <RxAvatar className="w-8 h-10" />
          </button>
          <span className="mx-2 font-medium text-md">Mominul</span>
        </div>
      </NavLink>
    </div>
  );
};

export default MobileMenu;
