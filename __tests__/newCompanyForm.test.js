import { render, screen, fireEvent, within } from "../config/TestUtils";
import "@testing-library/jest-dom";
import user from "@testing-library/user-event";
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
    const companyId = findCompanyId();
    const submitBtn = findSubmitBtn();

    fireEvent.change(companyId, { target: { value: "aa9999" } });

    fireEvent.click(submitBtn);

    expect(onSubmit).not.toHaveBeenCalled();
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
  user.selectOptions(
    dropdown,
    within(dropdown).getByRole("option", { name: policy })
  );
};

const findSize = () => {
  return screen.getByLabelText(/Company Size/i);
};

const selectSize = (size) => {
  const dropdown = findSize();
  // Select second option
  user.selectOptions(
    dropdown,
    within(dropdown).getByRole("option", { name: size })
  );
};

const findStage = () => {
  return screen.getByLabelText(/Funding Stage/i);
};

const selectStage = (stage) => {
  const dropdown = findStage();
  // Select second option
  user.selectOptions(
    dropdown,
    within(dropdown).getByRole("option", { name: stage })
  );
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
