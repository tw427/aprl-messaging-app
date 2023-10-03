import "../styles/account-form.css";

const AccountForm = () => {
  return (
    <>
      <label htmlFor="username">
        <input
          type="text"
          id="username"
          name="username"
          placeholder="Username"
        ></input>
      </label>
      <label htmlFor="password">
        <input
          type="password"
          id="password"
          name="password"
          placeholder="Password"
        ></input>
      </label>
      {/* {newUser && (
        <>
          <label htmlFor="confirmPassword">
          <input
          type="password"
          id="confirmPassword"
          name="confirmPassword"
          placeholder="Confirm password"
          ></input>
          </label>
          <button id="create-account-btn">Create Account</button>
        </>
      )} */}
      <button type="submit" id="login-btn">
        Login
      </button>
    </>
  );
};

export default AccountForm;
