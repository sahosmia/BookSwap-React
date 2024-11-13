import { useState } from "react";

import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";

import { Popover } from "@mui/material";
import { BiConversation } from "react-icons/bi";

const messagesData = [
  {
    id: 1,
    username: "DIm",
    user_picture: "https://randomuser.me/api/portraits/women/25.jpg",
    message: "Hi, I'm looking for a book about aviation!",
  },
  {
    id: 2,
    username: "Zayan",
    user_picture: "https://randomuser.me/api/portraits/women/25.jpg",
    message: "I've read it! It's fascinating!",
  },
  {
    id: 3,
    username: "Abrar",
    user_picture: "https://randomuser.me/api/portraits/women/25.jpg",
    message: "I'd love to read it with you!",
  },
  {
    id: 4,
    username: "Nazim",
    user_picture: "https://randomuser.me/api/portraits/women/25.jpg",
    message: "I've heard it's a great book!",
  },
  {
    id: 5,
    username: "Ramim",
    user_picture: "https://randomuser.me/api/portraits/women/25.jpg",
    message: "I'd love to read it with you too!",
  },
  {
    id: 6,
    username: "Fahim",
    user_picture: "https://randomuser.me/api/portraits/man/25.jpg",
    message: "I've read it! It's fascinating!",
  },
  {
    id: 7,
    username: "Nothing",
    user_picture: "https://randomuser.me/api/portraits/man/25.jpg",
    message: "I'd love to read it with you!",
  },
  {
    id: 8,
    username: "Rose",
    user_picture: "https://randomuser.me/api/portraits/women/25.jpg",
    message: "I've heard it's a great book!",
  },
];

const MessageBox = () => {
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
          <BiConversation className="h-10 w-8" />{" "}
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
          {messagesData.map((messages) => (
            <Box key={messages.id} sx={{ p: 2, width: "300px" }}>
              {/* <Typography>{messages.title}</Typography>
              <Typography>{messages.content}</Typography> */}
              <div className="flex items-center p-2 hover:bg-gray-300 hover:rounded-lg hover:shadow-md">
                <img
                  src={messages.user_picture}
                  alt="Profile"
                  className="w-10 h-10 rounded-full"
                />
                <div className="ml-3">
                  <p className=" text-md flex items-center">
                    <span className="font-semibold">{messages.username}</span>
                  </p>
                  <div className="text-md text-gray-400 flex">
                    <span>You: {messages.message}</span>
                  </div>
                </div>
              </div>
            </Box>
          ))}
        </Popover>
      </Box>
    </>
  );
};

export default MessageBox;
