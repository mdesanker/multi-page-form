import { render, screen, fireEvent, waitFor } from "../config/TestUtils";
import "@testing-library/jest-dom";
import Form from "../pages/form";

describe("Form", () => {
  it("renders new company version of first page", () => {
    render(<Form />);

    const newBtn = screen.getByRole("button", { name: /new/i });

    expect(newBtn).toBeInTheDocument();

    fireEvent.click(newBtn);

    expect(screen.getAllByRole("textbox")).toHaveLength(6);
    expect(screen.getAllByRole("combobox")).toHaveLength(3);
  });

  it("renders returning company page version of first page", async () => {
    render(<Form />);

    const returningBtn = screen.getByRole("button", { name: /returning/i });

    expect(returningBtn).toBeInTheDocument();

    fireEvent.click(returningBtn);

    expect(screen.getAllByRole("textbox")).toHaveLength(2);
  });
});

// const pageHeading = screen.getByRole("heading", {
//   name: /Propose a Bounty/i,
// });
// const formHeading = screen.getByRole("heading", {
//   name: /Company Details/i,
// });
// const comapanyIdInput = screen.getByLabelText(/Company ID/i);
// const companyNameInput = screen.getByLabelText(/Company Name/i);
// const locationInput = screen.getByLabelText(/Location/i);
// const policyInput = screen.getByLabelText(/Remote Policy/i);
// const sizeInput = screen.getByLabelText(/Company Size/i);
// const stageInput = screen.getByLabelText(/Funding Stage/i);
// const urlInput = screen.getByLabelText(/Company Website/i);
// const adminInput = screen.getByLabelText(/Admin Name/i);
// const emailInput = screen.getByLabelText(/Admin Email/i);

// // screen.debug();
// expect(pageHeading).toBeInTheDocument();
// expect(formHeading).toBeInTheDocument();
// expect(comapanyIdInput).toBeInTheDocument();
// expect(companyNameInput).toBeInTheDocument();
// expect(locationInput).toBeInTheDocument();
// expect(policyInput).toBeInTheDocument();
// expect(sizeInput).toBeInTheDocument();
// expect(stageInput).toBeInTheDocument();
// expect(urlInput).toBeInTheDocument();
// expect(adminInput).toBeInTheDocument();
// expect(emailInput).toBeInTheDocument();
