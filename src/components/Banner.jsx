import bookswapbanner from "../assets/BookSwap.png";
import { useRegisterModal } from "../context/RegisterModalContext";
const Banner = () => {
  const { setRegisterModal } = useRegisterModal();

  return (
    <section className="container py-12 bg-gray-100 ">
      <div className="flex flex-col items-center justify-between px-6 md:flex-row md:px-12">
        {/* Left side - Text content */}
        <div className="w-full mx-auto md:w-1/2">
          <h1 className="mb-8 text-4xl font-bold text-gray-900 ">
            <span className="text-center text-yellow-400">Welcome to</span>{" "}
            <br />
            <span className="mx-5 text-6xl text-red-600"> BookSwap</span>
          </h1>
          <p className="mt-6 mb-6 text-2xl text-gray-600">
            Discover, Share, and Swap Books with fellow readers.
          </p>
          <div className="mt-5 space-x-4">
            <button
              onClick={() => setRegisterModal(true)}
              className="px-6 py-2 font-semibold text-white bg-blue-600 rounded-lg shadow-md hover:bg-blue-700"
            >
              Sign Up
            </button>
            <button className="px-6 py-2 font-semibold text-blue-600 bg-transparent border border-blue-600 rounded-lg hover:bg-blue-50">
              Learn More
            </button>
          </div>
        </div>

        {/* Right side - Image */}
        <div className="w-full md:block md:w-1/2">
          <img src={bookswapbanner} alt="Book swapping" className="w-full" />
        </div>
      </div>
    </section>
  );
};

export default Banner;
