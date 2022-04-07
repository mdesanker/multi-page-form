import { Button, Flex, HStack } from "@chakra-ui/react";
import { Formik } from "formik";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { returningCompanyValidationSchema } from "../../../config/Validation";
import { updateDetails } from "../../../store/slices/companySlice";
import TextField from "../FieldComponents/TextField";

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
          <TextField name="companyId" label="Comapny ID" />

          <TextField name="email" label="Admin Email" type="email" />

          <Flex
            justifyContent="flex-end"
            alignItems="center"
            mt={8}
            borderTop="1px"
            borderTopColor="gray.300"
          >
            <Button type="submit" colorScheme="blue" p={6} mt={6} w={44} h={12}>
              Next Step
            </Button>
          </Flex>
        </Flex>
      )}
    </Formik>
  );
};

export default ReturningCompanyForm;
