import { useContext } from "react";
import { useNavigate, Link } from "react-router-dom";
import "../../styles/home/profile.css";
import { UserContext } from "../../context/userContext";

const Profile = () => {
  const { setUser } = useContext(UserContext);
  const navigate = useNavigate();

  function logout() {
    sessionStorage.clear();
    setUser({});
    navigate("/");
  }

  return (
    <>
      <section id="profile-card">
        <div id="profile-avatar">Avatar area</div>
        <div id="profile-details">Profile Details</div>
        <Link
          id="logout"
          to={"/"}
          onClick={(e) => {
            e.preventDefault();
            logout();
          }}
        >
          Logout
        </Link>
      </section>
    </>
  );
};

export default Profile;
