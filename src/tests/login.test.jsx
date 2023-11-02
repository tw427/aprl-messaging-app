import {
  afterAll,
  afterEach,
  beforeEach,
  describe,
  expect,
  it,
  vi,
} from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Router } from "react-router-dom";
import { MemoryRouter } from "react-router-dom";
import UserContextProvider from "../context/userContext";
import AppRouter from "../Router";
import { createMemoryHistory } from "history";

afterAll(() => vi.resetAllMocks());

describe("UI of Login Form component", () => {
  beforeEach(() => {
    render(
      <MemoryRouter>
        <UserContextProvider>
          <AppRouter />
        </UserContextProvider>
      </MemoryRouter>
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

  it.todo("Login success should load Home component", () => {});

  it.todo("Login failure should prevent authorization into Home", () => {});
});

describe("Fetch API", () => {
  let history = createMemoryHistory();

  beforeEach(() => {
    render(
      <Router location={history.location} navigator={history}>
        <UserContextProvider>
          <AppRouter />
        </UserContextProvider>
      </Router>
    );

    vi.spyOn(window, "fetch");
    history.push = vi.fn();
  });

  afterEach(() => {
    vi.resetAllMocks();
  });

  it("Create account success will show success message", async () => {
    window.fetch.mockResolvedValueOnce({
      json: () => {
        return {
          message: "Success account created.",
        };
      },
      status: 200,
    });

    const createFormBtn = screen.getByRole("link", { name: "sign-up-link" });
    await userEvent.click(createFormBtn);
    const createAccount = screen.getByTestId("create-account");
    expect(createAccount).toBeInTheDocument();
    await userEvent.click(createAccount);
    const message = screen.getByLabelText("response-status");
    expect(message).toHaveTextContent("Success account created.");
  });

  it("Create account fail will show fail message", async () => {
    window.fetch.mockResolvedValueOnce({
      json: () => {
        return {
          message: "Something went wrong! Check username and password fields.",
        };
      },
      status: 400,
    });

    const createFormBtn = screen.getByRole("link", { name: "sign-up-link" });
    await userEvent.click(createFormBtn);
    const createAccount = screen.getByTestId("create-account");
    expect(createAccount).toBeInTheDocument();
    await userEvent.click(createAccount);
    const message = screen.getByLabelText("response-status");
    expect(message).toHaveTextContent(
      "Something went wrong! Check username and password fields."
    );
  });

  it("Login success redirects to /home directory", async () => {
    window.fetch.mockResolvedValueOnce({
      json: () => {
        return {
          user: {
            password:
              "$2a$10$vakGt7dsJr4pnDS7D3181OOx5AHEbEvQPENA7WM3/cjSK2NfaUX1K",
            username: "Bug",
          },
        };
      },
      status: 200,
    });

    const username = screen.queryByRole("textbox", { name: "username" });
    const password = screen.queryByLabelText("password");
    const loginBtn = screen.queryByRole("link", { name: "login-button" });

    await userEvent.type(username, "Bug");
    await userEvent.type(password, "testing");

    expect(username.value).toBe("Bug");
    expect(password.value).toBe("testing");

    expect(loginBtn).toBeInTheDocument();
    await userEvent.click(loginBtn);
    expect(history.push).toHaveBeenCalledWith(
      {
        hash: "",
        pathname: "/home",
        search: "",
      },
      undefined,
      {}
    );
  });

  it("Login fail will not redirect our user", async () => {
    window.fetch.mockResolvedValueOnce({
      json: () => {
        return {
          user: {
            password:
              "$2a$10$vakGt7dsJr4pnDS7D3181OOx5AHEbEvQPENA7WM3/cjSK2NfaUX1K",
            username: "Bug",
          },
        };
      },
      status: 400,
    });

    const loginBtn = screen.queryByRole("link", { name: "login-button" });
    expect(loginBtn).toBeInTheDocument();
    await userEvent.click(loginBtn);

    expect(history.push).not.toHaveBeenCalled();
  });
});
