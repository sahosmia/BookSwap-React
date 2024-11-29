import Banner from "../components/Banner.jsx";
import CategoryBookList from "../components/book/CategoryBookList.jsx";

const Home = () => {
  return (
    <div className=" bg-opacity-15 z-10  bg-[url('https://i.pinimg.com/564x/cb/be/72/cbbe720dfad485f4aa2f561959abb7b8.jpg')] relative after:absolute after:w-full after:h-full after:inset-0 after:bg-white  after:-z-10 after:bg-opacity-80">
      <Banner />
      <CategoryBookList />
    </div>
  );
};

export default Home;
