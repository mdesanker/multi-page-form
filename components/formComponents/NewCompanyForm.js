import {
  Button,
  Divider,
  Heading,
  StackDivider,
  VStack,
} from "@chakra-ui/react";
import { Formik } from "formik";
import { useDispatch } from "react-redux";
import {
  companySizeChoices,
  fundingStageChoices,
  remotePolicyChoices,
} from "../../config/SelectFieldOptions";
import { newCompanyValidationSchema } from "../../config/Validation";
import { updateDetails } from "../../store/slices/companySlice";
import SelectField from "./fieldComponents/SelectField";
import TextField from "./fieldComponents/TextField";

const NewCompanyForm = ({ next }) => {
  const dispatch = useDispatch();

  return (
    <Formik
      initialValues={{
        companyId: "",
        name: "",
        location: "",
        policy: "",
        size: "",
        stage: "",
        url: "",
        admin: "",
        email: "",
      }}
      validationSchema={newCompanyValidationSchema}
      onSubmit={(values) => {
        dispatch(updateDetails(values));
        next(false);
      }}
    >
      {(formik) => (
        <VStack as="form" onSubmit={formik.handleSubmit}>
          <Heading as="h2" fontSize="2xl">
            New Company Details
          </Heading>

          <TextField name="companyId" label="Company ID" />

          <TextField name="name" label="Company Name" />

          <TextField name="location" label="Location" />

          <SelectField
            name="policy"
            label="Remote Policy"
            placeholder="Choose option"
            options={remotePolicyChoices}
          />

          <SelectField
            name="size"
            label="Company Size"
            placeholder="Choose option"
            options={companySizeChoices}
          />

          <SelectField
            name="stage"
            label="Funding Stage"
            placeholder="Choose option"
            options={fundingStageChoices}
          />

          <TextField name="url" label="Company Website" />

          <Divider borderColor="gray.300" py={2} />

          <TextField name="admin" label="Admin Name" />

          <TextField name="email" label="Admin Email" type="email" />

          <Button type="submit" colorScheme="blue">
            Next Step
          </Button>
        </VStack>
      )}
    </Formik>
  );
};

export default NewCompanyForm;
