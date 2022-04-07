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
      <Heading as="h2" fontSize="2xl" textAlign="center">
        Company Details
      </Heading>
      <HStack justifyContent="space-around" px={16}>
        <CustomButton clickHander={newHandler}>New</CustomButton>
        <CustomButton clickHander={returningHandler}>Returning</CustomButton>
      </HStack>
      {isNew ? (
        <NewCompanyForm next={next} />
      ) : (
        <ReturningCompanyForm next={next} />
      )}
    </Flex>
  );
};

export default CompanyDetailForm;
