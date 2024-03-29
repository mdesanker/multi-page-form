import { Flex } from "@chakra-ui/react";
import { Formik } from "formik";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  remotePolicyChoices,
  fundingStageChoices,
} from "../../config/SelectFieldOptions";
import { newCompanyValidationSchema } from "../../config/Validation";
import { updateDetails } from "../../store/slices/companySlice";
import TextField from "../fieldComponents/TextField";
import SelectField from "../fieldComponents/SelectField";
import NextButton from "../general/NextButton";

const NewCompanyForm = ({ onSubmit }) => {
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

          <TextField name="name" label="Company Name" />

          <TextField name="location" label="Location" />

          <SelectField
            name="policy"
            label="Remote Policy"
            options={remotePolicyChoices}
          />

          <TextField name="size" label="Company Size" type="number" />

          <SelectField
            name="stage"
            label="Funding Stage"
            options={fundingStageChoices}
          />

          <TextField
            name="url"
            label="Company Website"
            helper="Format should be: http://"
          />

          <TextField name="admin" label="Admin Name" />

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

export default NewCompanyForm;
