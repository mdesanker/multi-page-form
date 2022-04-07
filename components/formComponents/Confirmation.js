import { Button, Heading, Text, VStack } from "@chakra-ui/react";
import { useSelector } from "react-redux";
import CompanyDetailSummary from "./confirmationComponents/CompanyDetailSummary";

const Confirmation = ({ next, prev }) => {
  const { details } = useSelector((state) => state.company);
  const { roles } = useSelector((state) => state.role);

  return (
    <VStack w="full">
      <Heading>Confirmation</Heading>
      <Text>
        Thank you for completing the form! Review your entry details below.
      </Text>
      <CompanyDetailSummary data={details} />
      <Button onClick={prev}>Previous</Button>
      <Button onClick={() => next(true)}>Confirm</Button>
    </VStack>
  );
};

export default Confirmation;
