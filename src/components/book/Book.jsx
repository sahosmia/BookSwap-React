import p_img from "../assets/abrar.jpg";
import book from "../assets/ten book.jpg";
const Book = () => {
  return (
    // <div className='w-[350px] h-[500px]  '>
    //     <div className='flex items-center rounded-lg'>
    //         <img src={book} className='rounded-lg'  alt="images" />
    //     </div>
    //     <div className='flex-row items-center py-5 my-5 text-center'>
    //         <h1 className='p-2 text-3xl font-bold'>Listener</h1>
    //         <p className='p-1 text-xl'>Author</p>
    //     </div>
    // </div>

    <div className="w-[250px] sm:w-full md:w-[250px] xl:w-[300px] mx-auto drop-shadow bg-white overflow-hidden rounded-xl shadow-md  hover:shadow-lg transform hover:scale-105 transition-all duration-300">
      <img
        className="object-cover w-full h-96 md:h-72 lg:h-96"
        src={book}
        alt="book"
      />
      <div className="relative my-4 text-center">
        <div className="absolute inline-block -translate-x-1/2 -top-12 left-1/2">
          <img
            className="object-cover w-16 h-16 border-2 border-white rounded-full shadow"
            src={p_img}
            alt="profile-picture"
          />
        </div>
        <h2 className="text-xl font-semibold text-gray-900 pt-7 ">
          Profile Name
        </h2>
        <h3 className="text-gray-600"> Author Name</h3>

        <p className="mt-2 text-sm text-gray-500">Before 5 minutes</p>
      </div>
    </div>
  );
};

export default Book;
