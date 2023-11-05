import { useContext, useEffect } from "react";
import "../../styles/home/home.css";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { UserContext } from "../../context/userContext";
import { UserList, ChatWindow, MessageWindow, Profile } from "./modules.js";
// import { storageAvailable } from "../../../utils/sessionStorage";
// import Settings from "./settings";

const Home = () => {
  const { user } = useContext(UserContext);

  useEffect(() => {
    console.log(user);
    // Session Storage availability check
    // if (storageAvailable("sessionStorage")) {
    //   console.log("Horray! Session Storage is available.");
    // } else {
    //   console.log("Uh oh something went wrong!");
    // }
  }, [user]);
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
        {user && (
          <>
            <Profile />
            <UserList />
            <ChatWindow />
            {/* <Settings /> */}
            <MessageWindow />
          </>
        )}
        {!user && <Link to={"/"}>ERROR 404 - Please proceed to login.</Link>}
      </motion.div>
    </>
  );
};

export default Home;
