import { beforeEach, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import App from "../App";

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
