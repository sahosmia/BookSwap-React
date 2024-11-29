import { Link } from "react-router-dom";
import ProfileInformation from "./ProfileInformation";
import AvterImage from "../AvterImage";

const AvaterCard = ({ name, avater }) => {

  return (
    <div className="p-6 pb-10 bg-white rounded-lg shadow-md lg:w-1/3 lg:max-h-fit">
      <AvterImage alt={name} src={avater} size={100} className="mx-auto flex" />

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
