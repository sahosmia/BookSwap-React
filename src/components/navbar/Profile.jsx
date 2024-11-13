import { useState } from "react";
import momin from "../../assets/Mominul.jpg";
import { Link } from "react-router-dom";

const Profile = () => {
  const [name, setName] = useState("Mominul");
  const [surname, setSurname] = useState("Islam");
  const [email, setEmail] = useState("pottoy.2017@gmail.com");

  return (
    // <div className="container mx-auto">
    //   <BookOwnerInfo owner={ownerInfo} />
    // </div>

    <div className="container p-6 mx-auto my-8 bg-gray-100 rounded-lg shadow-md">
      <h1 className="mb-8 text-4xl font-bold text-center">My Account</h1>
      <div className="flex flex-col gap-8 lg:flex-row">
        {/* Profile Information */}
        <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-md lg:w-1/3">
          <div className="flex items-center justify-center w-24 h-24 mb-4 text-sm font-semibold text-gray-500 bg-teal-200 rounded-full">
            <img src={momin} alt="profile picture" />
          </div>
          <h2 className="mb-1 text-xl font-semibold text-teal-700">
            Mominul Islam
          </h2>
          <p className="mb-4 text-gray-500">There is no rating</p>

          {/* //Upload books */}
          <Link
            to="/BookUploadForm"
            className="px-6 py-2 mt-6 text-white bg-teal-500 rounded-md hover:bg-teal-600"
          >
            Add Your Book
          </Link>
        </div>

        {/* Account Details */}
        <div className="flex flex-col p-6 bg-white rounded-lg shadow-md lg:w-2/3">
          <div className="grid grid-cols-2 gap-4 mb-6">
            <div>
              <p className="text-gray-500">Member since:</p>
              <p className="text-teal-600">2024-09-18</p>
            </div>
            <div>
              <p className="text-gray-500">Suggested books:</p>
              <p className="text-teal-600">0</p>
            </div>
            <div>
              <p className="text-gray-500">Books received:</p>
              <p className="text-teal-600">0</p>
            </div>
            <div>
              <p className="text-gray-500">Books sent:</p>
              <p className="text-teal-600">0</p>
            </div>
            <div>
              <p className="text-gray-500">Wanted books:</p>
              <p className="text-teal-600">4</p>
            </div>
          </div>

          {/* Editable Fields */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="text-gray-500">Name</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full p-2 mt-1 border rounded-md"
              />
            </div>
            <div>
              <label className="text-gray-500">Surname</label>
              <input
                type="text"
                value={surname}
                onChange={(e) => setSurname(e.target.value)}
                className="w-full p-2 mt-1 border rounded-md"
              />
            </div>
            <div className="col-span-2">
              <label className="text-gray-500">Email Post Office</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full p-2 mt-1 border rounded-md"
              />
            </div>
          </div>

          {/* Save Button */}
          <button className="px-6 py-2 mt-6 text-white bg-teal-500 rounded-md hover:bg-teal-600">
            Save
          </button>
        </div>
      </div>
      <h1 className="my-8 text-4xl font-bold text-center">Your Book</h1>
      <div className="p-5 rounded-lg shadow-lg"> No Books</div>
    </div>
  );
};

export default Profile;
