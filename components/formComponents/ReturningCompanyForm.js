import { Button, Flex, Heading, HStack, VStack } from "@chakra-ui/react";
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
        <Flex direction="column" as="form" onSubmit={formik.handleSubmit}>
          <TextField name="companyId" label="Comapny ID" />

          <TextField name="email" label="Admin Email" type="email" />

          <HStack
            justifyContent="flex-end"
            mt={8}
            borderTop="1px"
            borderTopColor="gray.300"
          >
            <Button type="submit" colorScheme="blue" p={6} mt={6}>
              Next Step
            </Button>
          </HStack>
        </Flex>
      )}
    </Formik>
  );
};

export default ReturningCompanyForm;
