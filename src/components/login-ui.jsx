import "../styles/login.css";
import AccountForm from "./account-form";
import corgi from "../assets/cute-corgi.jpg";
import { createUser } from "../../utils/userCrud";

const LoginUI = () => {
  return (
    <div id="login" aria-label="login-container">
      <div id="login-image">
        <img src={corgi}></img>
      </div>
      <form id="account-form" aria-label="account-form">
        <AccountForm createUser={createUser} />
      </form>
    </div>
  );
};

export default LoginUI;
