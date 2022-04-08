import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import Home from "../pages/index";

it("renders homepage unchanged", () => {
  const { container } = render(<Home />);
  expect(container).toMatchSnapshot();
});
