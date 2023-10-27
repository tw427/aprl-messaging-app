import { afterAll, beforeEach, describe, expect, it, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { BrowserRouter } from "react-router-dom";
import App from "../App";
import { createUser } from "../../utils/userCrud";

afterAll(() => vi.resetAllMocks());

describe("Login Form component", () => {
  beforeEach(() => {
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );
  });

  it("Should render login component and our account form", () => {
    const loginContainer = screen.queryByLabelText("login-container");
    const accountForm = screen.queryByRole("form", { name: "account-form" });
    expect(loginContainer).toBeInTheDocument();
    expect(accountForm).toBeInTheDocument();
  });

  it("Account form should start in user login state", () => {
    const username = screen.queryByRole("textbox", { name: "username" });
    const password = screen.queryByLabelText("password");
    const confirm = screen.queryByRole("textbox", { name: "confirm-password" });
    const loginBtn = screen.queryByRole("link", { name: "login-button" });

    expect(username).toBeInTheDocument();
    expect(password).toBeInTheDocument();
    expect(confirm).toBe(null);
    expect(loginBtn).toBeInTheDocument();
  });

  it("Create new account link should render account creation form elements", async () => {
    const newAccountBtn = screen.queryByLabelText("sign-up-link");
    expect(newAccountBtn).toBeInTheDocument();
    await userEvent.click(newAccountBtn);
    expect(newAccountBtn).not.toBeInTheDocument();

    const createBtn = screen.getByTestId("create-account");
    expect(createBtn).toBeInTheDocument();

    const confirmPassword = screen.queryByLabelText("confirm-password");
    expect(confirmPassword).toBeInTheDocument();
  });

  it.todo(
    "Login should interact with our API to check user authorization",
    () => {}
  );

  it.todo("Login success should load Home component", () => {});

  it.todo("Login failure should prevent authorization into Home", () => {});
});

describe("Create Account component", () => {
  it("Creating an account successfully sends back the correct API response", async () => {
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );

    vi.spyOn(window, "fetch");

    window.fetch.mockResolvedValueOnce({
      token:
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c",
      user: {
        username: "Bug",
      },
      message: "Success! Account created.",
    });

    const results = await createUser();

    expect(results.user.username).toBe("Bug");
    expect(window.fetch).toHaveBeenCalledWith(
      "http://localhost:3001/user/signup",
      expect.objectContaining({
        method: "POST",
        mode: "cors",
        body: new URLSearchParams(),
      })
    );
    expect(window.fetch).toHaveBeenCalledTimes(1);
  });

  // Will we need an afterEach to reset mocks for this describe block?

  it.todo(
    "Creating account with duplicate username returns an error",
    async () => {}
  );
  it.todo(
    "Creating account with mismatching passwords returns an error",
    async () => {}
  );
  it.todo(
    "Successful login sends back correct data from our backend API",
    async () => {}
  );
  it.todo(
    "Failing login will return an error and status of 400 or 401",
    async () => {}
  );
});
