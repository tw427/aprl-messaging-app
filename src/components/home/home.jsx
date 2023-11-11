import "../../styles/home/home.css";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { UserList, ChatWindow, MessageWindow, Profile } from "./modules.js";
// import { storageAvailable } from "../../../utils/sessionStorage";
// import Settings from "./settings";

const Home = () => {
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
            <UserList />
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
