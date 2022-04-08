import { render, screen } from "../config/TestUtils";
import "@testing-library/jest-dom";
import Form from "../pages/form";

describe("Form", () => {
  it("renders the bounty creation form", () => {
    render(<Form />);

    const heading = screen.getByRole("heading", {
      name: /Propose a Bounty/i,
    });

    expect(heading).toBeInTheDocument();
  });
});
