import { useContext } from "react";
import "../../styles/home/home.css";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { UserContext } from "../../context/userContext";
import Profile from "./profile";
import UserList from "./userlist";
import ChatWindow from "./chat-window";
import MessageWindow from "./message-window";
// import Settings from "./settings";

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
        {/* {user.user && (
          <Link to={"/"} onClick={() => console.log(user)}>
            APR3L Messaging App
          </Link>
        )} */}
        {user.user && (
          <>
            <Profile />
            <UserList />
            <ChatWindow />
            {/* <Settings /> */}
            <MessageWindow />
          </>
        )}
        {!user.user && (
          <Link to={"/"}>ERROR 404 - Please proceed to login.</Link>
        )}
      </motion.div>
    </>
  );
};

export default Home;
