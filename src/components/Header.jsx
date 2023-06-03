import { useContext } from "react";
import { Link } from "react-router-dom";
import { Context, server } from "../main";
import { toast } from "react-hot-toast";
import axios from "axios";

const Header = () => {
  const { isAuthenticated, setIsAuthenticated, loading, setLoading } = useContext(Context);

  const logoutHandler = async () => {
    setLoading(true);
    try {
      await axios.get(`${server}/users/logout`, {
        withCredentials: true,
      });
      toast.success("Logged out successfully");
      setLoading(false);
      setIsAuthenticated(false);
    } catch (error) {
      toast.error("Some error occurred while logging out");
      setLoading(false);
      setIsAuthenticated(true);
    }
  };

  return (
    <nav className="header">
      <div>
        <h2>TODO App</h2>
      </div>
      <article>
        <Link to="/">Home</Link>
        <Link to="/profile">Profile</Link>
        {isAuthenticated ? (
          <button disabled={loading} className="btn" onClick={logoutHandler}>
            Logout
          </button>
        ) : (
          <Link to="/login">Login</Link>
        )}
      </article>
    </nav>
  );
};

export default Header;
