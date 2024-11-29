import { useState } from "react";

import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { useRegisterModal } from "../../context/RegisterModalContext";
import { useLoginModal } from "../../context/LoginModalContext";
import { profileDropdown } from "../../data/dummyData";
import { useAuth } from "../../context/AuthContext";
import AvterImage from "../AvterImage";

const ProfileDropdown = () => {
  const [anchorElUser, setAnchorElUser] = useState(null);
  const { token, user, logout } = useAuth();
  const { setRegisterModal } = useRegisterModal();
  const { setLoginModal } = useLoginModal();
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  const handleLogout = () => {
    logout();
    toast.warn("Opps! You are now logged out");
    setAnchorElUser(null);
  };

  return (
    <>
      <Box sx={{ flexGrow: 0 }}>
        <IconButton
          onClick={handleOpenUserMenu}
          sx={{
            p: 0,
            display: "flex",
            gap: "10px",
            "&:hover": {
              backgroundColor: "transparent",
            },
          }}
        >
          <AvterImage src={user?.avater} />
        </IconButton>
        <Menu
          sx={{ mt: "45px" }}
          className="w-96"
          id="menu-appbar"
          anchorEl={anchorElUser}
          anchorOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
          keepMounted
          transformOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
          open={Boolean(anchorElUser)}
          onClose={handleCloseUserMenu}
        >
          {token
            ? [
                ...profileDropdown.map((item) => (
                  <MenuItem
                    key={item.plink}
                    component={Link}
                    to={item.plink}
                    onClick={handleCloseUserMenu}
                    sx={{
                      width: "100%",
                      display: "block",
                      textDecoration: "none", // Removes underline
                    }}
                  >
                    {item.label}
                  </MenuItem>
                )),
                <MenuItem key="logout" onClick={handleLogout}>
                  <button>Logout</button>
                </MenuItem>,
              ]
            : [
                <MenuItem
                  key="signup"
                  onClick={() => {
                    handleCloseUserMenu();
                    setRegisterModal(true);
                  }}
                >
                  <button>Sign Up</button>
                </MenuItem>,

                <MenuItem
                  key="login"
                  onClick={() => {
                    handleCloseUserMenu();
                    setLoginModal(true);
                  }}
                >
                  <button>Login</button>
                </MenuItem>,
              ]}
        </Menu>
      </Box>
    </>
  );
};

export default ProfileDropdown;
