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

  it("typing into text inputs udpates them", () => {
    render(<Form />);

    const comapanyIdInput = screen.getByLabelText(/Company ID/i);
    const companyNameInput = screen.getByLabelText(/Company Name/i);
    const locationInput = screen.getByLabelText(/Location/i);
    const policyInput = screen.getByLabelText(/Remote Policy/i);
    const sizeInput = screen.getByLabelText(/Company Size/i);
    const stageInput = screen.getByLabelText(/Funding Stage/i);
    const urlInput = screen.getByLabelText(/Company Website/i);
    const adminInput = screen.getByLabelText(/Admin Name/i);
    const emailInput = screen.getByLabelText(/Admin Email/i);

    expect(comapanyIdInput).toBeInTheDocument();
    expect(companyNameInput).toBeInTheDocument();
    expect(locationInput).toBeInTheDocument();
    expect(policyInput).toBeInTheDocument();
    expect(sizeInput).toBeInTheDocument();
    expect(stageInput).toBeInTheDocument();
    expect(urlInput).toBeInTheDocument();
    expect(adminInput).toBeInTheDocument();
    expect(emailInput).toBeInTheDocument();

    // Update a text field and a select dropdown
    fireEvent.change(comapanyIdInput, { target: { value: "aa9999" } });
    fireEvent.change(policyInput, { target: { value: 0 } });

    expect(comapanyIdInput).toHaveValue("aa9999");
    expect(policyInput[0].selected).toBeTruthy();
    expect(policyInput[1].selected).toBeFalsy();
  });

  it("renders returning company page version of first page", async () => {
    render(<Form />);

    const returningBtn = screen.getByRole("button", { name: /returning/i });

    expect(returningBtn).toBeInTheDocument();

    fireEvent.click(returningBtn);

    expect(screen.getAllByRole("textbox")).toHaveLength(2);
  });
});
