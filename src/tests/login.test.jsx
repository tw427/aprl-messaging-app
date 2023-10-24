import { beforeEach, describe, expect, it, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { BrowserRouter } from "react-router-dom";
import App from "../App";
import AccountForm from "../components/account-form";

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

  it.todo(
    "Create new account link should render account creation form elements",
    () => {}
  );

  it.todo(
    "Login should interact with our API to check user authorization",
    () => {}
  );

  it.todo("Login success should load Home component", () => {});

  it.todo("Login failure should prevent authorization into Home", () => {});
});

describe("Create Account component", () => {
  it("Creating an account successfully sends back the correct API response", async () => {
    const createMock = vi.fn();

    render(
      <BrowserRouter>
        <AccountForm createUser={createMock} />
      </BrowserRouter>
    );

    // Mock function works after being passed as a prop to our AccountForm component
    // Now we need our mocked function to return specific data for our mock HTTP req
    const newAccountBtn = screen.queryByLabelText("sign-up-link");
    expect(newAccountBtn).toBeInTheDocument();
    await userEvent.click(newAccountBtn);
    const createBtn = screen.getByTestId("create-account");
    screen.debug();

    await userEvent.click(createBtn);
    expect(createMock).toHaveBeenCalled();
    expect(createBtn).toBeInTheDocument();
    expect(newAccountBtn).not.toBeInTheDocument();
  });
});
