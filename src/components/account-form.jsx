import "../styles/account-form.css";

const AccountForm = () => {
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
      {/* {newUser && (
        <>
          <label htmlFor="confirmPassword">
          </label>
          <input
          type="password"
          id="confirmPassword"
          name="confirmPassword"
          placeholder="Confirm password"
          ></input>
          <button id="create-account-btn">Create Account</button>
        </>
      )} */}
      <div id="form-buttons">
        <button type="submit" id="login-btn">
          Login
        </button>
        <a href="/" id="sign-up">
          Create new account
        </a>
      </div>
    </>
  );
};

export default AccountForm;
