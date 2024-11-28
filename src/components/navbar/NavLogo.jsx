import { NavLink } from "react-router-dom";

const NavLogo = () => {
  return (
    <div className="flex items-center">
      <NavLink to="/">
        <span className="text-2xl font-bold text-teal-500 ">BOOKSWAP</span>
      </NavLink>
    </div>
  );
};

export default NavLogo;
