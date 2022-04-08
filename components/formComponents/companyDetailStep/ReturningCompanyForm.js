import { Button, Flex, HStack } from "@chakra-ui/react";
import { Formik } from "formik";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { returningCompanyValidationSchema } from "../../../config/Validation";
import { updateDetails } from "../../../store/slices/companySlice";
import TextField from "../fieldComponents/TextField";
import NextButton from "../sharedComponents/NextButton";

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
        <Flex direction="column" as="form" onSubmit={formik.handleSubmit}>
          <TextField
            name="companyId"
            label="Company ID"
            helper="Min. 6 alphanumeric chars, starting with at least 2 letters"
          />

          <TextField name="email" label="Admin Email" type="email" />

          <Flex
            justifyContent="flex-end"
            alignItems="center"
            mt={8}
            borderTop="1px"
            borderTopColor="gray.300"
          >
            <NextButton type="submit" text="Next" />
          </Flex>
        </Flex>
      )}
    </Formik>
  );
};

export default ReturningCompanyForm;
