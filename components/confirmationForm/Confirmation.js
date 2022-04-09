import { Flex } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import CompanyDetailSummary from "./CompanyDetailSummary";
import { v4 as uuidv4 } from "uuid";
import { companyReset } from "../../store/slices/companySlice";
import { rolesReset } from "../../store/slices/roleSlice";
import ConfirmationSectionHeader from "./ConfirmationSectionHeader";
import FormHeader from "../general/FormHeader";
import RoleDetailSummary from "./RoleDetailSummary";
import NextButton from "../general/NextButton";
import PrevButton from "../general/PrevButton";

const Confirmation = ({ onSubmit, prev, set }) => {
  const dispatch = useDispatch();

  const { details } = useSelector((state) => state.company);
  const { roles } = useSelector((state) => state.role);

  const confirmHandler = () => {
    // Submission to database would occur here
    console.log("Form data submitted successfully");

    dispatch(companyReset());
    dispatch(rolesReset());
    onSubmit();
  };

  return (
    <Flex direction="column" w="full">
      <FormHeader
        step={3}
        label="Confirmation"
        sublabel="Thank you for completing the form! Review your entry details below."
      />
      <ConfirmationSectionHeader title="Company Details" page={0} set={set} />
      <CompanyDetailSummary data={details} />
      <ConfirmationSectionHeader title="Role Details" page={1} set={set} />
      {roles &&
        roles.map((role) => {
          return <RoleDetailSummary key={uuidv4()} data={role} />;
        })}

      <Flex
        justifyContent="space-between"
        alignItems="center"
        mt={8}
        borderTop="1px"
        borderTopColor="gray.300"
      >
        <PrevButton text="Previous" clickHandler={prev} />
        <NextButton text="Submit" clickHandler={confirmHandler} />
      </Flex>
    </Flex>
  );
};

export default Confirmation;
