import { useState, useEffect, useContext } from "react";
import { UserContext } from "../context/userContext";
import PropTypes from "prop-types";
import "../styles/account-form.css";
import { Link, useNavigate } from "react-router-dom";
import { createUser, login } from "../../utils/userCrud";

const AccountForm = () => {
  const { setUser } = useContext(UserContext);
  const [newUser, setNewUser] = useState(false);
  const [status, setStatus] = useState("");
  const navigate = useNavigate();

  AccountForm.propTypes = {
    createUser: PropTypes.func,
  };

  useEffect(() => {
    function handleStatus(result) {
      const statusEl = document.getElementById("account-form-status");
      if (result === 200) {
        statusEl.setAttribute("class", "");
        statusEl.classList.add("account-success");
      } else if (result !== 200) {
        statusEl.classList.add("account-fail");
      } else {
        console.log(status);
      }
    }
    if (status) {
      handleStatus(status.status);
    }
  }, [status]);

  function delayRedirect(to, status) {
    if (status !== 200) {
      console.log("HELLO");
    } else {
      navigate(to);
    }
  }

  function clearForms() {
    const username = document.getElementById("username");
    const password = document.getElementById("password");

    username.value = "";
    password.value = "";
  }

  return (
    <>
      {status.message && <span id="account-form-status">{status.message}</span>}
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
              onClick={async (e) => {
                e.preventDefault();
                const res = await login(e);
                delayRedirect("/home", res.status);
                setUser(await res.json());
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
                clearForms();
                setStatus("");
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
              data-testid="create-account"
              onClick={async (e) => {
                const res = await createUser(e);
                if (res.status === 200) {
                  const message = await res.json();
                  setNewUser(false);
                  clearForms();
                  setStatus({ message: message.message, status: res.status });
                }

                if (res.status !== 200) {
                  const message = await res.json();
                  setStatus({ message: message.message, status: res.status });
                }
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
                clearForms();
                setStatus("");
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
