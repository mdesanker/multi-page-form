import { Button, Flex, Heading, HStack, Text, VStack } from "@chakra-ui/react";
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
      <HStack justifyContent="space-around" mb={6}>
        <CustomButton clickHander={newHandler} active={isNew}>
          New
        </CustomButton>
        <CustomButton clickHander={returningHandler} active={!isNew}>
          Returning
        </CustomButton>
      </HStack>

      <Text color="gray.500" py={2}>
        Step 1/3
      </Text>
      <Heading as="h2" fontSize="2xl" pb={6}>
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
