import { useSelector } from "react-redux";
import NewCompanyForm from "./NewCompanyForm";
import ReturningCompanyForm from "./ReturningCompanyForm";

const CompanyDetailForm = ({ next }) => {
  const { isNew } = useSelector((state) => state.company);

  return (
    <>
      {isNew ? (
        <NewCompanyForm next={next} />
      ) : (
        <ReturningCompanyForm next={next} />
      )}
    </>
  );
};

export default CompanyDetailForm;
