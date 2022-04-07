import { Button, Flex, Heading, HStack, VStack } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { setNew, setReturning } from "../../store/slices/companySlice";
import CustomButton from "./CompanyDetail/CustomButton";
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
      <HStack justifyContent="center" px={16} mb={6}>
        <CustomButton clickHander={newHandler} active={isNew}>
          New
        </CustomButton>
        <CustomButton clickHander={returningHandler} active={!isNew}>
          Returning
        </CustomButton>
      </HStack>

      <Heading as="h2" fontSize="2xl">
        Company Details
      </Heading>

      {isNew ? (
        <NewCompanyForm next={next} />
      ) : (
        <ReturningCompanyForm next={next} />
      )}
    </Flex>
  );
};

export default CompanyDetailForm;
