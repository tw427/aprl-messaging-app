import { expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import App from "../App";

it("Should render login component", () => {
  render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
  const loginContainer = screen.queryByLabelText("login-container");
  expect(loginContainer).toBeInTheDocument();
});
