import { render, screen, fireEvent, waitFor } from "../config/TestUtils";
import { act } from "react-dom/test-utils";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";
import RoleDetailForm from "../components/roleDetailForm/RoleDetailForm";

describe("New company form", () => {
  const onSubmit = jest.fn();

  beforeEach(() => {
    onSubmit.mockClear();
    render(<RoleDetailForm onSubmit={onSubmit} />);
  });

  it("check expected fields are in form", () => {
    expect(findTitle()).toBeInTheDocument();
    expect(findSalary()).toBeInTheDocument();
    expect(findDeparment()).toBeInTheDocument();
    expect(findLocation()).toBeInTheDocument();
    expect(findExperience()).toBeInTheDocument();
    expect(findDescription()).toBeInTheDocument();

    expect(screen.getAllByRole("textbox")).toHaveLength(6);
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
      fireEvent.change(findTitle(), { target: { value: "title" } });
      fireEvent.change(findSalary(), { target: { value: "100 - 150" } });
      fireEvent.change(findDeparment(), { target: { value: "department" } });
      fireEvent.change(findLocation(), { target: { value: "location" } });
      fireEvent.change(findExperience(), { target: { value: "experience" } });
      fireEvent.change(findDescription(), { target: { value: "description" } });

      userEvent.click(findSubmitBtn());
    });

    await waitFor(() => {
      expect(findTitle()).toHaveValue("title");
      expect(findDescription()).toHaveValue("description");

      expect(onSubmit).toHaveBeenCalled();
      expect(onSubmit).toHaveBeenCalledTimes(1);
    });
  });

  it("add more input fields for additional role", async () => {
    act(() => {
      userEvent.click(findAddBtn());
    });

    await waitFor(() => {
      expect(screen.getAllByRole("textbox")).toHaveLength(12);
    });
  });
});

// Helper functions
const findSubmitBtn = () => {
  return screen.getByRole("button", { name: /Next/i });
};

const findAddBtn = () => {
  return screen.getByRole("button", { name: /Add Role/i });
};

const findTitle = () => {
  return screen.getByLabelText(/Job Title/i);
};

const findSalary = () => {
  return screen.getByLabelText(/Salary Range/i);
};

const findDeparment = () => {
  return screen.getByLabelText(/Department/i);
};

const findLocation = () => {
  return screen.getByLabelText(/Location/i);
};

const findExperience = () => {
  return screen.getByLabelText(/Required Experience/i);
};

const findDescription = () => {
  return screen.getByLabelText(/Job Description/i);
};
