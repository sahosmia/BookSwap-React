import ProfileUpdateForm from "../components/user/profileUpdateForm";
import { useAuth } from "../context/AuthContext";
import AvaterUpload from "../components/user/AvaterUpload";
import AvaterCard from "../components/user/AvaterCard";
import ProfileBook from "../components/user/ProfileBook";

const Profile = () => {
  const { user } = useAuth();

  if (!user) return null;
  const { name, avater } = user;

  return (
    <div className="container min-h-screen p-6 mx-auto my-8 bg-gray-100 rounded-lg ">
      <h1 className="mb-8 text-4xl font-bold text-center">My Account</h1>
      <div className="flex flex-col gap-8 lg:flex-row ">
        <AvaterCard name={name} avater={avater} />

        <div className="grid gap-5 lg:w-2/3">
          <ProfileUpdateForm />
          <AvaterUpload name={name} avater={avater} />
        </div>
      </div>

      <ProfileBook />
    </div>
  );
};

export default Profile;
