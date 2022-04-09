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
    expect(findCompanyId()).toBeInTheDocument();
    expect(findCompanyName()).toBeInTheDocument();
    expect(findLocation()).toBeInTheDocument();
    expect(findPolicy()).toBeInTheDocument();
    expect(findSize()).toBeInTheDocument();
    expect(findStage()).toBeInTheDocument();
    expect(findWebsite()).toBeInTheDocument();
    expect(findAdmin()).toBeInTheDocument();
    expect(findEmail()).toBeInTheDocument();
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
