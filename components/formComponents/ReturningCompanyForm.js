import { Button, Heading, VStack } from "@chakra-ui/react";
import { Formik } from "formik";
import next from "next";
import { returningCompanyValidationSchema } from "../../config/Validation";
import TextField from "./fieldComponents/TextField";

const ReturningCompanyForm = ({ next }) => {
  return (
    <Formik
      initialValues={{
        companyId: "",
        email: "",
      }}
      validationSchema={returningCompanyValidationSchema}
      onSubmit={(values) => {
        alert(JSON.stringify(values, null, 2));
        next(false);
      }}
    >
      {(formik) => (
        <VStack as="form" onSubmit={formik.handleSubmit}>
          <Heading as="h2" fontSize="2xl">
            Returning Company Details
          </Heading>

          <TextField name="companyId" label="Comapny ID" />

          <TextField name="email" label="Admin Email" type="email" />

          <Button type="submit" colorScheme="blue">
            Next Step
          </Button>
        </VStack>
      )}
    </Formik>
  );
};

export default ReturningCompanyForm;
