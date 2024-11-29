import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import api from "../api/api";
import AvterImage from "../components/AvterImage";
import moment from "moment";

const Messages = () => {
  // get conversationId from search params
  const { user } = useAuth();
  const { conversationId } = useParams();
  const [sender, setSender] = useState({});
  const [participant, setParticipant] = useState({});
  const [lastTime, setLastTime] = useState("");
  const [newMessage, setNewMessage] = useState("");
  const [triger, setTriger] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await api.get(`conversations/${conversationId}`);
        if (response.status === 200) {
          const data = response.data;
          setLastTime(data?.conversation?.last_updated);
          if (data?.conversation?.creator._id !== user.id) {
            setSender(data?.conversation?.creator);
            setParticipant(data?.conversation?.participant);
          } else {
            setSender(data?.conversation?.participant);
            setParticipant(data?.conversation?.creator);
          }
          setMessages(data?.messages);
          console.log(triger);
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
  }, [conversationId, user, triger]);

  // get inbox data by api call (/api/convertaion)
  const [messages, setMessages] = useState([]);

  const handleSendMessage = async () => {
    if (newMessage.trim() === "") {
      setNewMessage("");
      return null;
    }
    setTriger((prev) => !prev);
    try {
      const formdata = {
        text: newMessage,
        sender: sender._id,
        receiver: participant._id,
        conversation_id: conversationId,
      };
      const response = await api.post(`/message`, formdata, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.status === 200) {
        setMessages([...messages, response.data]);
      } else {
        console.error("Error sending message:", response.data.error);
      }

      setNewMessage("");
    } catch (error) {
      console.error("Error sending message a:", error);
    }

  };

  const relative = moment(lastTime).fromNow();

  return (
    <div className="flex w-[600px] h-[600px] mx-auto  shadow my-6 ">
      <div className="flex flex-col flex-1">
        <div className="flex items-center p-4 bg-white border-b border-gray-300">
          <AvterImage src={participant.avater} className="mr-1" />
          <div>
            <h3 className="text-lg font-semibold">{participant.name}</h3>
            <h3 className="text-xs text-gray-700">{relative}</h3>
          </div>
        </div>

        {/* Chat Messages */}
        <div className="flex flex-col flex-1 p-4 space-y-3 overflow-y-auto">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`flex ${
                message.sender === sender._id ? "justify-end" : "justify-start"
              }`}
            >
              <div
                className={`p-3 rounded-lg max-w-xs ${
                  message.sender === sender._id
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
