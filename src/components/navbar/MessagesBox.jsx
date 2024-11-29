import { useEffect, useState } from "react";

import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";

import { Popover } from "@mui/material";
import { BiConversation } from "react-icons/bi";
import api from "../../api/api";
import { useAuth } from "../../context/AuthContext";
import moment from "moment";

import AvaterImage from "./../AvterImage";
import { useNavigate } from "react-router-dom";

const MessageBox = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [conversations, setConversations] = useState([]);
  const navigator = useNavigate();
  const { user } = useAuth();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await api.get(`conversations/user/${user._id}`);
        if (response.status === 200) {
          const data = response.data;
          console.log(response.data);

          setConversations(data || []);
        }
      } catch (error) {
        // Handle error
        console.error(error);
      }
    };

    const timeoutId = setTimeout(() => {
      fetchData();
    }, 100);
    return () => clearTimeout(timeoutId);
  }, [user]);

  const handleOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleClick = (conversationId) => {
    handleClose();
    navigator(`/messages/${conversationId}`);
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
          <BiConversation className="w-8 h-10" />{" "}
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
          {conversations.length > 0 ? (
            conversations.map((messages) => (
              <Box
                key={messages._id}
                sx={{ p: 2, width: "300px" }}
                onClick={() => handleClick(messages._id)}
              >
                <div className="flex items-center p-2 hover:bg-gray-300 hover:rounded-lg hover:shadow-md">
                  <AvaterImage
                    src={
                      messages.creator._id === user._id
                        ? messages.participant.avater
                        : messages.creator.avater
                    }
                  />
                  <div className="ml-3">
                    <p className="flex items-center  text-md">
                      <span className="font-semibold">
                        {messages.creator._id === user._id
                          ? messages.participant.name
                          : messages.creator.name}
                      </span>
                    </p>
                    <div className="flex text-gray-400 text-md">
                      <span>{messages.lastMessage.text}</span>
                    </div>
                    <div className="flex text-gray-400 text-md">
                      <span>{moment(messages.last_updated).fromNow()}</span>
                    </div>
                  </div>
                </div>
              </Box>
            ))
          ) : (
            <Box sx={{ p: 2, textAlign: "center" }}>
              <p className="text-gray-500">No conversations found</p>
            </Box>
          )}
        </Popover>
      </Box>
    </>
  );
};

export default MessageBox;
