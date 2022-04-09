import { render, screen, fireEvent, waitFor } from "../config/TestUtils";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";
import selectEvent from "react-select-event";
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
    userEvent.click(findSubmitBtn());

    await waitFor(() => {
      expect(onSubmit).not.toHaveBeenCalled();
    });
  });

  it("onSubmit called when form completed", async () => {
    userEvent.type(findCompanyId(), "abc12345");

    await waitFor(() => {
      expect(findCompanyId()).toBeInTheDocument();
      expect(findCompanyId()).toHaveValue("abc12345");
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

const selectPolicy = (policy) => {
  const dropdown = findPolicy();
  // Select second option
  // user.selectOptions(
  //   dropdown,
  //   within(dropdown).getByRole("option", { name: policy })
  // );
  selectEvent.select(dropdown, policy);
};

const findSize = () => {
  return screen.getByLabelText(/Company Size/i);
};

const selectSize = (size) => {
  const dropdown = findSize();
  // Select second option
  // user.selectOptions(
  //   dropdown,
  //   within(dropdown).getByRole("option", { name: size })
  // );
  selectEvent.select(dropdown, size);
};

const findStage = () => {
  return screen.getByLabelText(/Funding Stage/i);
};

const selectStage = (stage) => {
  const dropdown = findStage();
  // Select second option
  // user.selectOptions(
  //   dropdown,
  //   within(dropdown).getByRole("option", { name: stage })
  // );
  selectEvent.select(dropdown, stage);
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
