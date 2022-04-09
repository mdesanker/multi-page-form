import { render, screen, fireEvent, waitFor } from "../config/TestUtils";
import { act } from "react-dom/test-utils";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";
import NewCompanyForm from "../components/companyDetailForm/NewCompanyForm";

describe("New company form", () => {
  const onSubmit = jest.fn();

  beforeEach(() => {
    onSubmit.mockClear();
    render(<NewCompanyForm onSubmit={onSubmit} />);
  });

  it("check expected fields are in form", () => {
    const companyId = findCompanyId();
    const companyName = findCompanyName();
    const location = findLocation();
    const policy = findPolicy();
    const size = findSize();
    const stage = findStage();
    const website = findWebsite();
    const admin = findAdmin();
    const email = findEmail();

    expect(companyId).toBeInTheDocument();
    expect(companyName).toBeInTheDocument();
    expect(location).toBeInTheDocument();
    expect(policy).toBeInTheDocument();
    expect(size).toBeInTheDocument();
    expect(stage).toBeInTheDocument();
    expect(website).toBeInTheDocument();
    expect(admin).toBeInTheDocument();
    expect(email).toBeInTheDocument();
  });

  it("onSubmit not called when fields incomplete", async () => {
    act(() => {
      userEvent.click(findSubmitBtn());
    });

    await waitFor(() => {
      expect(onSubmit).not.toHaveBeenCalled();
    });
  });

  it("onSubmit called when form completed", async () => {
    act(() => {
      // userEvent.type(findCompanyId(), "abc1234");
      fireEvent.change(findCompanyId(), { target: { value: "abc1234" } });
      fireEvent.change(findCompanyName(), { target: { value: "Talentdrop" } });
      fireEvent.change(findLocation(), { target: { value: "USA" } });
      userEvent.selectOptions(findPolicy(), ["hybrid"]);
      userEvent.selectOptions(findSize(), ["sm"]);
      userEvent.selectOptions(findStage(), ["seed"]);
      fireEvent.change(findWebsite(), {
        target: { value: "http://google.com" },
      });
      fireEvent.change(findAdmin(), { target: { value: "admin" } });
      fireEvent.change(findEmail(), { target: { value: "admin@email.com" } });

      userEvent.click(findSubmitBtn());
    });

    await waitFor(() => {
      // Test inputs for a couple fields work
      expect(findCompanyId()).toHaveValue("abc1234");
      expect(
        screen.getByRole("option", { name: "Hybrid" }).selected
      ).toBeTruthy();

      expect(onSubmit).toHaveBeenCalled();
      expect(onSubmit).toHaveBeenCalledTimes(1);
    });
  });
});

// Helper functions
const findSubmitBtn = () => {
  return screen.getByRole("button", { name: /Next/i });
};

const findCompanyId = () => {
  return screen.getByLabelText(/Company ID/i);
};

const findCompanyName = () => {
  return screen.getByLabelText(/Company Name/i);
};

const findLocation = () => {
  return screen.getByLabelText(/Location/i);
};

const findPolicy = () => {
  return screen.getByLabelText(/Remote Policy/i);
};

const findSize = () => {
  return screen.getByLabelText(/Company Size/i);
};

const findStage = () => {
  return screen.getByLabelText(/Funding Stage/i);
};

const findWebsite = () => {
  return screen.getByLabelText(/Company Website/i);
};

const findAdmin = () => {
  return screen.getByLabelText(/Admin Name/i);
};

const findEmail = () => {
  return screen.getByLabelText(/Admin Email/i);
};
