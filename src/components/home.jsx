import { useContext } from "react";
import "../styles/home.css";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { UserContext } from "../context/userContext";

const Home = () => {
  const { user } = useContext(UserContext);
  return (
    <>
      <motion.div
        id="home"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        {user.user && (
          <Link to={"/"} onClick={() => console.log(user)}>
            APR3L Messaging App
          </Link>
        )}
        {!user.user && (
          <Link to={"/"}>ERROR 404 - Please proceed to login.</Link>
        )}
      </motion.div>
    </>
  );
};

export default Home;
