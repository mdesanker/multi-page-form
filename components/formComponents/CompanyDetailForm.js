import NewCompanyForm from "./NewCompanyForm";
import ReturningCompanyForm from "./ReturningCompanyForm";

const CompanyDetailForm = () => {
  const isNew = true;
  return <>{isNew ? <NewCompanyForm /> : <ReturningCompanyForm />}</>;
};

export default CompanyDetailForm;
