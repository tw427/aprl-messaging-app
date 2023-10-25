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
    const mockResponse = () => {
      return {
        token:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c",
        user: {
          username: "Bug",
        },
        message: "Success! Account created.",
      };
    };
    const createMock = vi.fn(mockResponse);

    render(
      <BrowserRouter>
        <AccountForm createUser={createMock} />
      </BrowserRouter>
    );

    const newAccountBtn = screen.queryByLabelText("sign-up-link");
    expect(newAccountBtn).toBeInTheDocument();
    // Changing the screen to be populated with our Account Creation form
    await userEvent.click(newAccountBtn);
    expect(newAccountBtn).not.toBeInTheDocument();

    const createBtn = screen.getByTestId("create-account");
    expect(createBtn).toBeInTheDocument();

    await userEvent.click(createBtn);
    expect(createMock).toHaveBeenCalled();
    console.log(createMock());
    expect(createMock().token).toBe(
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c"
    );
    expect(createMock().user.username).toBe("Bug");
    expect(createMock().message).toBe("Success! Account created.");
  });
});
