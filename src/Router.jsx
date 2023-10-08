import { Route, Routes, useLocation } from "react-router-dom";
import App from "./App";
import Home from "./components/home";

const Router = () => {
  const location = useLocation();

  return (
    <Routes location={location} key={location.pathname}>
      <Route path="/" element={<App />} />
      <Route path="/home" element={<Home />} />
    </Routes>
  );
};

export default Router;
