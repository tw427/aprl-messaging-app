import { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/account-form.css";
import { createUser } from "../../utils/userCrud";

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
        aria-label="username"
      ></input>
      <label htmlFor="password"></label>
      <input
        type="password"
        id="password"
        name="password"
        placeholder="Password"
        aria-label="password"
      ></input>
      {newUser && (
        <>
          <label htmlFor="confirmPassword"></label>
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            placeholder="Confirm password"
            aria-label="confirm-password"
          ></input>
        </>
      )}
      <div id="form-buttons">
        {!newUser && (
          <>
            <Link
              id="login-btn"
              to={"home"}
              onClick={() => {
                console.log("Hello!");
              }}
              aria-label="login-button"
            >
              Login
            </Link>
            <a
              href="/"
              id="sign-up"
              onClick={(e) => {
                e.preventDefault();
                setNewUser(true);
              }}
              aria-label="sign-up-link"
            >
              Create new account
            </a>
          </>
        )}
        {newUser && (
          <>
            <button
              id="create-account-btn"
              type="submit"
              onClick={(e) => {
                createUser(e);
              }}
            >
              Create Account
            </button>
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
