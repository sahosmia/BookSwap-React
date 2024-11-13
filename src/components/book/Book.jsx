import p_img from "../assets/abrar.jpg";
import book from "../assets/ten book.jpg";
const Book = () => {
  return (
    // <div className='w-[350px] h-[500px]  '>
    //     <div className='flex items-center rounded-lg'>
    //         <img src={book} className='rounded-lg'  alt="images" />
    //     </div>
    //     <div className='text-center flex-row items-center my-5 py-5'>
    //         <h1 className='text-3xl font-bold p-2'>Listener</h1>
    //         <p className='text-xl p-1'>Author</p>
    //     </div>
    // </div>

    <div className="w-[250px] sm:w-full md:w-[250px] xl:w-[300px] mx-auto drop-shadow bg-white overflow-hidden rounded-xl shadow-md  hover:shadow-lg transform hover:scale-105 transition-all duration-300">
      <img className="w-full h-96 md:h-72 lg:h-96 object-cover" src={book} alt="book" />
      <div className="text-center my-4 relative">
        <div className=" absolute -top-12 left-1/2 -translate-x-1/2 inline-block">
          <img
            className="w-16 h-16 rounded-full object-cover border-2 shadow border-white"
            src={p_img}
            alt="profile-picture"
          />
        </div>
        <h2 className="pt-7 text-xl font-semibold text-gray-900 ">
          Profile Name
        </h2>
        <h3 className="text-gray-600"> Author Name</h3>

        <p className="mt-2 text-sm text-gray-500">Before 5 minutes</p>
      </div>
    </div>
  );
};

export default Book;
