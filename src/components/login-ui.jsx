import "../styles/login.css";
import AccountForm from "./account-form";

const LoginUI = () => {
  return (
    <div id="login">
      <div id="login-image"></div>
      <form id="account-form">
        <AccountForm />
      </form>
    </div>
  );
};

export default LoginUI;
