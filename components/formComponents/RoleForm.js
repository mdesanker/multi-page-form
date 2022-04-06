import { Button, Heading, VStack } from "@chakra-ui/react";
import { Formik } from "formik";
import { newRoleValidationSchema } from "../../config/Validation";
import TextAreaField from "./fieldComponents/TextAreaField";
import TextField from "./fieldComponents/TextField";

const RoleForm = () => {
  return (
    <Formik
      initialValues={{
        title: "",
        salary: "",
        department: "",
        location: "",
        experience: "",
        description: "",
      }}
      validationSchema={newRoleValidationSchema}
      onSubmit={(values, actions) => {
        alert(JSON.stringify(values, null, 2));
        // actions.resetForm();
      }}
    >
      {(formik) => (
        <VStack as="form" onSubmit={formik.handleSubmit}>
          <Heading as="h2" fontSize="2xl">
            Role Details
          </Heading>

          <TextField name="title" label="Job Title" />

          <TextField name="salary" label="Salary Range" />

          <TextField name="department" label="Department" />

          <TextField name="location" label="Location" />

          <TextField name="experience" label="Desired Experience (years)" />

          <TextAreaField name="description" label="Job Description" />

          <Button type="submit" colorScheme="blue">
            Next Step
          </Button>
        </VStack>
      )}
    </Formik>
  );
};

export default RoleForm;
