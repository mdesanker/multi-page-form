import { Button, Heading, Text, VStack } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import CompanyDetailSummary from "./confirmationComponents/CompanyDetailSummary";
import RoleDetailSummary from "./confirmationComponents/RoleDetailSummary";
import { v4 as uuidv4 } from "uuid";
import { companyReset } from "../../store/slices/companySlice";
import { rolesReset } from "../../store/slices/roleSlice";
import ConfirmationSectionHeader from "./confirmationComponents/ConfirmationSectionHeader";

const Confirmation = ({ next, prev }) => {
  const dispatch = useDispatch();

  const { details } = useSelector((state) => state.company);
  const { roles } = useSelector((state) => state.role);

  const confirmHandler = () => {
    // Submission to database would occur here
    console.log("Form data submitted successfully");
    console.log(details);
    console.log(roles);

    dispatch(companyReset());
    dispatch(rolesReset());
    next(false);
  };

  return (
    <VStack w="full">
      <Heading>Confirmation</Heading>
      <Text>
        Thank you for completing the form! Review your entry details below.
      </Text>
      <ConfirmationSectionHeader title="Company Details" page={0} />
      <CompanyDetailSummary data={details} />
      <ConfirmationSectionHeader title="Role Details" page={1} />
      {roles &&
        roles.map((role, index) => {
          return <RoleDetailSummary key={uuidv4()} data={role} />;
        })}
      <Button onClick={prev}>Previous</Button>
      <Button onClick={confirmHandler}>Confirm</Button>
    </VStack>
  );
};

export default Confirmation;
