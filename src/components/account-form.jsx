import { useState } from "react";
import "../styles/account-form.css";

const AccountForm = () => {
  const [newUser, setNewUser] = useState(false);

  return (
    <>
      <label htmlFor="username"></label>
      <input
        type="text"
        id="username"
        name="username"
        placeholder="Username"
      ></input>
      <label htmlFor="password"></label>
      <input
        type="password"
        id="password"
        name="password"
        placeholder="Password"
      ></input>
      {newUser && (
        <>
          <label htmlFor="confirmPassword"></label>
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            placeholder="Confirm password"
          ></input>
        </>
      )}
      <div id="form-buttons">
        {!newUser && (
          <>
            <button type="submit" id="login-btn">
              Login
            </button>
            <a
              href="/"
              id="sign-up"
              onClick={(e) => {
                e.preventDefault();
                setNewUser(true);
              }}
            >
              Create new account
            </a>
          </>
        )}
        {newUser && (
          <>
            <button id="create-account-btn">Create Account</button>
            <a
              href="/"
              id="sign-in"
              onClick={(e) => {
                e.preventDefault();
                setNewUser(false);
              }}
            >
              Sign in
            </a>
          </>
        )}
      </div>
    </>
  );
};

export default AccountForm;
