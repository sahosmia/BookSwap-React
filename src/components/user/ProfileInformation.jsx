const ProfileInformation = () => {
  return (
    <div className="flex flex-col mb-6">
      <div className="grid grid-cols-2 ">
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
    </div>
  );
};

export default ProfileInformation;
