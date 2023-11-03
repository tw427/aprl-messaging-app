import { Route, Routes, useLocation } from "react-router-dom";
import App from "./App";
import Home from "./components/home/home";
import { AnimatePresence } from "framer-motion";

const Router = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<App />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </AnimatePresence>
  );
};

export default Router;
