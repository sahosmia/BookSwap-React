import { useState } from "react";

import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";

import { Popover } from "@mui/material";
import { IoMdNotificationsOutline } from "react-icons/io";

const notifications = [
  {
    id: 1,
    username: "DIm",
    user_picture: "https://randomuser.me/api/portraits/women/25.jpg",
  },
  {
    id: 2,
    username: "Zayan",
    user_picture: "https://randomuser.me/api/portraits/women/25.jpg",
  },
  {
    id: 3,
    username: "Abrar",
    user_picture: "https://randomuser.me/api/portraits/women/25.jpg",
  },
  {
    id: 4,
    username: "Nazim",
    user_picture: "https://randomuser.me/api/portraits/women/25.jpg",
  },
  {
    id: 5,
    username: "Ramim",
    user_picture: "https://randomuser.me/api/portraits/women/25.jpg",
  },
  {
    id: 6,
    username: "Fahim",
    user_picture: "https://randomuser.me/api/portraits/man/25.jpg",
  },
  {
    id: 7,
    username: "Nothing",
    user_picture: "https://randomuser.me/api/portraits/man/25.jpg",
  },
  {
    id: 8,
    username: "Rose",
    user_picture: "https://randomuser.me/api/portraits/women/25.jpg",
  },
];

const NotificationBox = () => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <Box sx={{ flexGrow: 0 }}>
        <IconButton
          onClick={handleOpen}
          sx={{
            p: 0,
          }}
        >
          <IoMdNotificationsOutline className="w-8 h-10" />
        </IconButton>

        <Popover
          id="menu-appbar"
          open={Boolean(anchorEl)}
          anchorEl={anchorEl}
          onClose={handleClose}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "right",
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
          sx={{ minWidth: "250px", height: "500px" }}
        >
          {notifications.map((notification) => (
            <Box key={notification.id} sx={{ p: 2, width: "300px" }}>
              <div className="flex items-center p-4 hover:bg-gray-300 hover:shadow-md hover:rounded-lg">
                <img
                  src={notification.user_picture}
                  alt="Profile"
                  className="w-10 h-10 rounded-full"
                />
                <div className="flex-grow ml-4">
                  <p className="text-sm">
                    <strong>{notification.username}</strong> Follow you.
                  </p>
                </div>
              </div>
              {/* <Typography>{notification.username}</Typography> */}
            </Box>
          ))}
        </Popover>
      </Box>
    </>
  );
};

export default NotificationBox;
