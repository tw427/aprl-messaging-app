// import { useState } from 'react'
import "./App.css";
import LoginUI from "./components/login-ui";
import { motion } from "framer-motion";

function App() {
  return (
    <motion.main
      id="app"
      className="login-prompt"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <LoginUI />
    </motion.main>
  );
}

export default App;
