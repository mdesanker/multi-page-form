import { Flex, HStack } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { setNew, setReturning } from "../../../store/slices/companySlice";
import FormHeading from "../sharedComponents/FormHeading";
import CompanyTypeBtn from "./CompanyTypeBtn";
import NewCompanyForm from "./NewCompanyForm";
import ReturningCompanyForm from "./ReturningCompanyForm";

const CompanyDetailForm = ({ next }) => {
  const dispatch = useDispatch();

  const { isNew } = useSelector((state) => state.company);

  const newHandler = () => {
    dispatch(setNew());
  };

  const returningHandler = () => {
    dispatch(setReturning());
  };

  return (
    <Flex direction="column" justifyContent="center" w="full">
      <HStack justifyContent="space-around" mb={6}>
        <CompanyTypeBtn clickHander={newHandler} active={isNew}>
          New
        </CompanyTypeBtn>
        <CompanyTypeBtn clickHander={returningHandler} active={!isNew}>
          Returning
        </CompanyTypeBtn>
      </HStack>

      <FormHeading step={1} label="Company Details" />

      <Flex mt={5} direction="column">
        {isNew ? (
          <NewCompanyForm next={next} />
        ) : (
          <ReturningCompanyForm next={next} />
        )}
      </Flex>
    </Flex>
  );
};

export default CompanyDetailForm;
