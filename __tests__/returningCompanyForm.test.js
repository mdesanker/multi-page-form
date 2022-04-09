import { render, screen, fireEvent, waitFor } from "../config/TestUtils";
import { act } from "react-dom/test-utils";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";
import ReturningCompanyForm from "../components/companyDetailForm/ReturningCompanyForm";

describe("New company form", () => {
  const onSubmit = jest.fn();

  beforeEach(() => {
    onSubmit.mockClear();
    render(<ReturningCompanyForm onSubmit={onSubmit} />);
  });

  it("check expected fields are in form", () => {
    expect(findCompanyId()).toBeInTheDocument();
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
      fireEvent.change(findCompanyId(), { target: { value: "abc1234" } });
      fireEvent.change(findEmail(), { target: { value: "admin@email.com" } });

      userEvent.click(findSubmitBtn());
    });

    await waitFor(() => {
      expect(findCompanyId()).toHaveValue("abc1234");
      expect(findEmail()).toHaveValue("admin@email.com");

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

const findEmail = () => {
  return screen.getByLabelText(/Admin Email/i);
};
