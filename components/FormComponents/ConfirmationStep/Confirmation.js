import { Button, Flex, Heading, Text, VStack } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import CompanyDetailSummary from "./CompanyDetailSummary";
import RoleDetailSummary from "./RoleDetailSummary";
import { v4 as uuidv4 } from "uuid";
import { companyReset } from "../../../store/slices/companySlice";
import { rolesReset } from "../../../store/slices/roleSlice";
import ConfirmationSectionHeader from "./ConfirmationSectionHeader";
import FormHeading from "../sharedComponents/FormHeading";

const Confirmation = ({ next, prev, set }) => {
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
    <Flex direction="column" w="full">
      <FormHeading
        step={3}
        label="Confirmation"
        sublabel="Thank you for completing the form! Review your entry details below."
      />
      <ConfirmationSectionHeader title="Company Details" page={0} set={set} />
      <CompanyDetailSummary data={details} />
      <ConfirmationSectionHeader title="Role Details" page={1} set={set} />
      {roles &&
        roles.map((role, index) => {
          return <RoleDetailSummary key={uuidv4()} data={role} />;
        })}

      <Flex
        justifyContent="space-between"
        alignItems="center"
        mt={8}
        borderTop="1px"
        borderTopColor="gray.300"
      >
        <Button
          type="button"
          colorScheme="blue"
          variant="outline"
          p={6}
          mt={6}
          w={44}
          h={12}
          onClick={prev}
        >
          Edit
        </Button>
        <Button
          type="button"
          colorScheme="blue"
          p={6}
          mt={6}
          w={44}
          h={12}
          onClick={confirmHandler}
        >
          Confirm
        </Button>
      </Flex>
    </Flex>
  );
};

export default Confirmation;
