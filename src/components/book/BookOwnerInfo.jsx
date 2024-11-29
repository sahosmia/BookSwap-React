import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import { toast } from "react-toastify";
import api from "../../api/api";
import useFetchApi from "../../hooks/useFetchApi";
import AvatarImage from "./../AvterImage";

const BookOwnerInfo = ({ owner }) => {
  const { _id: participantId, name, username, location, avater } = owner;
  const navigate = useNavigate();
  const { user } = useAuth();
  const handleMessage = async () => {

    try {
      const response = await api.post(
        "conversations",
        { userId: user._id, participantId },
        {
          headers: {
            Authorization: "Bearer " + user.token,
          },
        }
      );

      if (response.status === 200) {
        navigate(`/messages/${response.data.conversationId}`);
      } else {
        toast.error("Failed to retrieve conversation");
      }
    } catch (error) {
      console.error("Error:", error.message);
      toast.error(error.message);
    }
  };

  const { data } = useFetchApi(`users/${participantId}`);

  return (
    <div className="max-w-4xl p-4 border rounded-md shadow-md bg-blue-50">
      <h1 className="text-xl font-semibold text-center">
        Book Owner Information
      </h1>

      <div className="flex flex-col items-center justify-between mt-6 md:flex-row">
        {/* Profile Section */}
        <div className="flex flex-col items-center mb-4 md:items-start md:w-1/3 md:mb-0">
          <div className="flex items-center gap-4">
            <AvatarImage src={`${avater}`} alt={username} size={60} />

            <div className="flex flex-col">
              <h4 className="text-lg font-semibold">{name}</h4>
              <p className="text-blue-400 text-md">{location.name}</p>
            </div>
          </div>
          {participantId !== user._id && (
            <button
              onClick={handleMessage}
              className="px-4 py-2 mt-4 text-white bg-teal-500 rounded-lg hover:bg-teal-600"
            >
              Write a message
            </button>
          )}
        </div>

        <div className="hidden h-20 mx-6 border-l border-gray-300 md:block"></div>

        {/* Information Section */}
        <div className="flex flex-col items-center gap-6 md:flex-row md:w-1/2 md:gap-12">
          <div className="flex flex-col items-center md:items-start">
            <p className="text-xl text-gray-600">
              Total Book:{" "}
              <span className="text-blue-600">{data?.data?.books.length}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookOwnerInfo;
