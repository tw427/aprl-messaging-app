import "../styles/login.css";
import AccountForm from "./account-form";
import corgi from "../assets/cute-corgi.jpg";

const LoginUI = () => {
  return (
    <div id="login">
      <div id="login-image">
        <img src={corgi}></img>
      </div>
      <form id="account-form">
        <AccountForm />
      </form>
    </div>
  );
};

export default LoginUI;
