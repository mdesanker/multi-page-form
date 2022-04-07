import { Button, Heading, VStack } from "@chakra-ui/react";
import { Formik } from "formik";
import next from "next";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { returningCompanyValidationSchema } from "../../config/Validation";
import { updateDetails } from "../../store/slices/companySlice";
import TextField from "./fieldComponents/TextField";

const ReturningCompanyForm = ({ next }) => {
  const dispatch = useDispatch();
  const { details } = useSelector((state) => state.company);

  const [initialValues, setInitialValues] = useState({
    companyId: "",
    email: "",
  });

  useEffect(() => {
    if (details) {
      setInitialValues(details);
    }
  }, []);

  return (
    <Formik
      enableReinitialize="true"
      initialValues={initialValues}
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
