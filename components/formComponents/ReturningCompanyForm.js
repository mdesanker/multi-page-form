import { Button, Heading, VStack } from "@chakra-ui/react";
import { Formik } from "formik";
import next from "next";
import { useDispatch } from "react-redux";
import { returningCompanyValidationSchema } from "../../config/Validation";
import { updateDetails } from "../../store/slices/companySlice";
import TextField from "./fieldComponents/TextField";

const ReturningCompanyForm = ({ next }) => {
  const dispatch = useDispatch();

  return (
    <Formik
      initialValues={{
        companyId: "",
        email: "",
      }}
      validationSchema={returningCompanyValidationSchema}
      onSubmit={(values) => {
        dispatch(updateDetails(values));
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
