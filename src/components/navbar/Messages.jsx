import React, { useState } from "react";

const Messages = () => {
  const [messages, setMessages] = useState([
    { id: 1, text: "Hello! How are you?", sender: "me" },
    { id: 2, text: "I am good, thanks! What about you?", sender: "friend" },
    {
      id: 3,
      text: "Doing great, I need a book from your  booklist.",
      sender: "me",
    },
  ]);

  const [newMessage, setNewMessage] = useState("");

  const friendInfo = {
    name: "Arif",
    profilePic: "https://randomuser.me/api/portraits/men/7.jpg", // URL of the friend's profile picture
  };

  const handleSendMessage = () => {
    if (newMessage.trim() !== "") {
      setMessages([
        ...messages,
        { id: messages.length + 1, text: newMessage, sender: "me" },
      ]);
      setNewMessage("");
    }
  };

  return (
    <div className="flex w-[600px] h-[600px] mx-auto  shadow my-6 ">
      {/* Chat Area */}
      <div className="flex flex-col flex-1">
        {/* Chat Header with Friend's Info */}
        <div className="flex items-center p-4 bg-white border-b border-gray-300">
          <img
            src={friendInfo.profilePic}
            alt="Profile"
            className="w-12 h-12 mr-4 rounded-full"
          />
          <h3 className="text-lg font-semibold">{friendInfo.name}</h3>
        </div>

        {/* Chat Messages */}
        <div className="flex flex-col flex-1 p-4 space-y-3 overflow-y-auto">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`flex ${
                message.sender === "me" ? "justify-end" : "justify-start"
              }`}
            >
              <div
                className={`p-3 rounded-lg max-w-xs ${
                  message.sender === "me"
                    ? "bg-blue-500 text-white"
                    : "bg-gray-200 text-gray-800"
                }`}
              >
                {message.text}
              </div>
            </div>
          ))}
        </div>

        {/* Message Input */}
        <div className="flex items-center p-4 bg-white border-t border-gray-300">
          <input
            type="text"
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            placeholder="Type a message..."
            className="flex-1 p-2 border border-gray-300 rounded-lg outline-none focus:border-blue-500"
          />
          <button
            onClick={handleSendMessage}
            className="px-4 py-2 ml-2 text-white bg-blue-500 rounded-lg hover:bg-blue-600"
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default Messages;
