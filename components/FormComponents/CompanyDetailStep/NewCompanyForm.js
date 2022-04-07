import { Button, Divider, Flex, HStack } from "@chakra-ui/react";
import { Formik } from "formik";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  companySizeChoices,
  fundingStageChoices,
  remotePolicyChoices,
} from "../../../config/SelectFieldOptions";
import { newCompanyValidationSchema } from "../../../config/Validation";
import { updateDetails } from "../../../store/slices/companySlice";
import SelectField from "../FieldComponents/SelectField";
import TextField from "../FieldComponents/TextField";

const NewCompanyForm = ({ next }) => {
  const dispatch = useDispatch();
  const { details } = useSelector((state) => state.company);

  const [initialValues, setInitialValues] = useState({
    companyId: "",
    name: "",
    location: "",
    policy: "",
    size: "",
    stage: "",
    url: "",
    admin: "",
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
      validationSchema={newCompanyValidationSchema}
      onSubmit={(values) => {
        dispatch(updateDetails(values));
        next(false);
      }}
    >
      {(formik) => (
        <Flex direction="column" as="form" onSubmit={formik.handleSubmit}>
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

export default NewCompanyForm;
