import "../styles/home.css";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <>
      <motion.div
        id="home"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <Link to={"/"}>Hello World !</Link>
      </motion.div>
    </>
  );
};

export default Home;
