import { useState } from "react";

import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { Link } from "react-router-dom";
import Cookies from "js-cookie";
import { toast } from "react-toastify";
import useAuth from "../../hooks/useAuth";
import { useSignupViewDispatch } from "../../context/SignUpContext";
import { useLoginViewDispatch } from "../../context/loginContext";

const ProfileDropdown = () => {
  const [anchorElUser, setAnchorElUser] = useState(null);
  const { token } = useAuth();
  const signupDispatch = useSignupViewDispatch();
  const loginDispatch = useLoginViewDispatch();

  const settings = [
    {
      label: "Profile",
      plink: "/profile",
    },
    {
      label: "Account",
      plink: "/account",
    },
    {
      label: "Dashboard",
      plink: "/dashboard",
    },
  ];

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  const handleLogout = () => {
    console.log("logout");

    Cookies.remove("token", { path: "/" });
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
          <Avatar alt="" src="/static/images/avatar/2.jpg" />
          {/* <span className="text-sm font-bold ">Account</span> */}
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
          {token !== undefined
            ? [
                ...settings.map((setting) => (
                  <MenuItem
                    key={setting.plink}
                    className="w-96"
                    onClick={handleCloseUserMenu}
                  >
                    <Link to={setting.plink} sx={{ textAlign: "center" }}>
                      {setting.label}
                    </Link>
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
                    signupDispatch({
                      type: "sign_up_true",
                    });
                  }}
                >
                  <button>Sign Up</button>
                </MenuItem>,

                <MenuItem
                  key="login"
                  onClick={() => {
                    handleCloseUserMenu();
                    loginDispatch({
                      type: "login_true",
                    });
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
