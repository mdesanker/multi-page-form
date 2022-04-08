import { render, screen } from "../config/TestUtils";
import "@testing-library/jest-dom";
import Form from "../pages/form";

describe("Form", () => {
  it("renders first page of bounty form", () => {
    render(<Form />);

    const pageHeading = screen.getByRole("heading", {
      name: /Propose a Bounty/i,
    });
    const formHeading = screen.getByRole("heading", {
      name: /Company Details/i,
    });
    const comapanyIdInput = screen.getByLabelText(/Company ID/i);
    const companyNameInput = screen.getByLabelText(/Company Name/i);
    const locationInput = screen.getByLabelText(/Location/i);
    const policyInput = screen.getByLabelText(/Remote Policy/i);
    const sizeInput = screen.getByLabelText(/Company Size/i);
    const stageInput = screen.getByLabelText(/Funding Stage/i);
    const urlInput = screen.getByLabelText(/Company Website/i);
    const adminInput = screen.getByLabelText(/Admin Name/i);
    const emailInput = screen.getByLabelText(/Admin Email/i);

    // screen.debug();
    expect(pageHeading).toBeInTheDocument();
    expect(formHeading).toBeInTheDocument();
    expect(comapanyIdInput).toBeInTheDocument();
    expect(companyNameInput).toBeInTheDocument();
    expect(locationInput).toBeInTheDocument();
    expect(policyInput).toBeInTheDocument();
    expect(sizeInput).toBeInTheDocument();
    expect(stageInput).toBeInTheDocument();
    expect(urlInput).toBeInTheDocument();
    expect(adminInput).toBeInTheDocument();
    expect(emailInput).toBeInTheDocument();
  });
});
