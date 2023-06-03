import { useContext } from "react";
import { Context } from "../main";
import Loader from "../components/Loader";
import "../styles/profile.scss"; // Import the SCSS file

const Profile = () => {
  // eslint-disable-next-line no-unused-vars
  const { isAuthenticated, loading, user } = useContext(Context);

  return loading ? (
    <Loader />
  ) : (
    <div className="profile">
      <h1>{user?.name}</h1>
      <p>{user?.email}</p>
    </div>
  );
};

export default Profile;
