import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Home from "../pages/index";

describe("Home", () => {
  it("renders a button to form", () => {
    render(<Home />);

    const button = screen.getByRole("button", {
      name: /Create a Bounty/i,
    });

    expect(button).toBeInTheDocument();
  });
});
