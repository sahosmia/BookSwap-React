import { Avatar } from "@mui/material";
import { Link } from "react-router-dom";
import ProfileInformation from "./ProfileInformation";

const AvaterCard = ({ name, avater }) => {
  const url = `http://localhost:5000/uploads/avater/${avater}`;
  console.log(url);

  return (
    <div className="p-6 pb-10 bg-white rounded-lg shadow-md lg:w-1/3 lg:max-h-fit">
      <Avatar
        alt={name}
        src={url}
        sx={{ width: 90, height: 90 }}
        className="mx-auto mb-2"
      />

      <h2 className="mb-2 text-xl font-semibold text-center text-teal-700">
        {name}
      </h2>
      <p className="mb-6 text-center text-gray-500">There is no rating</p>

      <ProfileInformation />

      <div className="flex justify-center mt-6">
        <Link
          to="/BookUploadForm"
          className="px-6 py-2 text-white bg-teal-500 rounded-md hover:bg-teal-600"
        >
          Add Your Book
        </Link>
      </div>
    </div>
  );
};

export default AvaterCard;
