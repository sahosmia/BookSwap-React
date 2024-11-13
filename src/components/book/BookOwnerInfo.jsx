import { Link } from "react-router-dom";

const BookOwnerInfo = ({ owner }) => {
  console.log(owner);

  const {
    profileImage,
    name,
    location,
    suggestedBooks,
    wantedBooks,
    booksReceived,
    booksSent,
  } = owner;
  return (
    <div className="max-w-4xl p-4 border rounded-md shadow-md bg-blue-50">
      <h1 className="text-xl font-semibold text-center">
        Book Owner Information
      </h1>

      <div className="flex flex-col items-center justify-between mt-6 md:flex-row">
        {/* Profile Section */}
        <div className="flex flex-col items-center mb-4 md:items-start md:w-1/3 md:mb-0">
          <div className="flex items-center gap-4">
            <img
              className="w-24 h-24 rounded-full shadow"
              src={profileImage}
              alt="owner"
            />
            <div className="flex flex-col">
              <h4 className="text-lg font-semibold">{name}</h4>
              <p className="text-blue-400 text-md">{location}</p>
            </div>
          </div>
          <Link to="/messages" className="px-4 py-2 mt-4 text-white bg-teal-500 rounded-lg hover:bg-teal-600">
            Write a message
          </Link>
        </div>

        {/* Divider for larger screens */}
        <div className="hidden h-20 mx-6 border-l border-gray-300 md:block"></div>

        {/* Information Section */}
        <div className="flex flex-col items-center gap-6 md:flex-row md:w-2/3 md:gap-12">
          <div className="flex flex-col items-center md:items-start">
            <p className="text-xl text-gray-600">
              Suggested books:{" "}
              <span className="text-blue-600">{suggestedBooks}</span>
            </p>
            <p className="text-xl text-gray-600">
              Wanted books: <span className="text-blue-600">{wantedBooks}</span>
            </p>
          </div>
          <div className="hidden h-16 border-l border-gray-300 md:block"></div>
          <div className="flex flex-col items-center md:items-start">
            <p className="text-xl text-gray-600">
              Books received:{" "}
              <span className="text-blue-600">{booksReceived}</span>
            </p>
            <p className="text-xl text-gray-600">
              Books sent: <span className="text-blue-600">{booksSent}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookOwnerInfo;
