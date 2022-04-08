import { Button, Flex, Heading, Text, VStack } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import CompanyDetailSummary from "./CompanyDetailSummary";
import RoleDetailSummary from "./RoleDetailSummary";
import { v4 as uuidv4 } from "uuid";
import { companyReset } from "../../../store/slices/companySlice";
import { rolesReset } from "../../../store/slices/roleSlice";
import ConfirmationSectionHeader from "./ConfirmationSectionHeader";
import FormHeading from "../sharedComponents/FormHeading";
import NextButton from "../sharedComponents/NextButton";
import PrevButton from "../sharedComponents/PrevButton";

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
    next();
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
        <PrevButton type="button" text="Previous" clickHandler={prev} />
        <NextButton type="submit" text="Submit" clickHandler={confirmHandler} />
      </Flex>
    </Flex>
  );
};

export default Confirmation;
