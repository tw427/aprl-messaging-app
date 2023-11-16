import { useContext } from "react";
import { UserContext } from "../../context/userContext";
import "../../styles/home/home.css";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ChatWindow, MessageWindow, Profile } from "./modules.js";
import { leftViewController } from "../componentTemplates/leftViewController";
// import { storageAvailable } from "../../../utils/sessionStorage";
// import Settings from "./settings";

const Home = () => {
  const { leftView, setLeftView } = useContext(UserContext);

  return (
    <>
      <motion.div
        id="home"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        {sessionStorage.username && (
          <>
            <Profile />
            {leftViewController(leftView, setLeftView)}
            <ChatWindow />
            {/* <Settings /> */}
            <MessageWindow />
          </>
        )}
        {!sessionStorage.username && (
          <Link to={"/"}>ERROR 404 - Please proceed to login.</Link>
        )}
      </motion.div>
    </>
  );
};

export default Home;
