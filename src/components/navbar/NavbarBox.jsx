import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import { useState } from "react";

const NavbarBox = () => {
  const [anchorElUser, setAnchorElUser] = useState(null);
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
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
        ></IconButton>
        <div
          className=""
          open={Boolean(anchorElUser)}
          onClose={handleCloseUserMenu}
        >
          <p>dfdf</p>
        </div>
      </Box>
    </>
  );
};

export default NavbarBox;
