import { Button, Heading, VStack } from "@chakra-ui/react";
import { Formik } from "formik";
import {
  companySizeChoices,
  fundingStageChoices,
  remotePolicyChoices,
} from "../../config/SelectFieldOptions";
import newCompanyValidationSchema from "../../config/Validation";
import SelectField from "./SelectField";
import TextField from "./TextField";

const NewCompanyForm = () => {
  return (
    <Formik
      initialValues={{
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
      onSubmit={(values, actions) => {
        alert(JSON.stringify(values, null, 2));
        // actions.resetForm();
      }}
    >
      {(formik) => (
        <VStack as="form" onSubmit={formik.handleSubmit}>
          <Heading as="h2" fontSize="2xl">
            Company Details
          </Heading>

          <TextField name="name" label="Comapny Name" />

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

          <TextField name="admin" label="Admin Name" />

          <TextField name="email" label="Admin Enail" type="email" />

          <Button type="submit" colorScheme="blue">
            Next Step
          </Button>
        </VStack>
      )}
    </Formik>
  );
};

export default NewCompanyForm;
