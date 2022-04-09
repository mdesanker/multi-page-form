import { Flex } from "@chakra-ui/react";
import { Formik } from "formik";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { returningCompanyValidationSchema } from "../../config/Validation";
import { updateDetails } from "../../store/slices/companySlice";
import TextField from "../fieldComponents/TextField";
import NextButton from "../general/NextButton";

const ReturningCompanyForm = ({ onSubmit }) => {
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
        onSubmit();
      }}
    >
      {(formik) => (
        <Flex direction="column" as="form" onSubmit={formik.handleSubmit}>
          <TextField
            name="companyId"
            label="Company ID"
            helper="Min. 6 characters, alphanumeric, -, _, no spaces"
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
