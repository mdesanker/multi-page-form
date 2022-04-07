import { Button, Heading, Text, VStack } from "@chakra-ui/react";
import { useSelector } from "react-redux";
import CompanyDetailSummary from "./confirmationComponents/CompanyDetailSummary";
import RoleDetailSummary from "./confirmationComponents/RoleDetailSummary";
import { v4 as uuidv4 } from "uuid";

const Confirmation = ({ next, prev }) => {
  const { details } = useSelector((state) => state.company);
  const { roles } = useSelector((state) => state.role);

  return (
    <VStack w="full">
      <Heading>Confirmation</Heading>
      <Text>
        Thank you for completing the form! Review your entry details below.
      </Text>
      <Heading as="h3" fontSize="2xl" w="full" textAlign="center">
        Company Details
      </Heading>
      <CompanyDetailSummary data={details} />
      <Heading as="h3" fontSize="2xl" w="full" textAlign="center">
        Role Details
      </Heading>
      {roles &&
        roles.map((role, index) => {
          return <RoleDetailSummary key={uuidv4()} data={role} />;
        })}
      <Button onClick={prev}>Previous</Button>
      <Button onClick={() => next(false)}>Confirm</Button>
    </VStack>
  );
};

export default Confirmation;
