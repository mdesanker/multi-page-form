import { Flex, SelectField } from "@chakra-ui/react";
import { Formik } from "formik";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  companySizeChoices,
  fundingStageChoices,
  remotePolicyChoices,
} from "../../config/SelectFieldOptions";
import { newCompanyValidationSchema } from "../../config/Validation";
import { updateDetails } from "../../store/slices/companySlice";
import TextField from "../fieldComponents/TextField";
import NextButton from "../general/NextButton";

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
          <TextField
            name="companyId"
            label="Company ID"
            helper="Min. 6 alphanumeric chars, starting with at least 2 letters"
          />

          <TextField name="name" label="Company Name" />

          <TextField name="location" label="Location" />

          <SelectField
            name="policy"
            label="Remote Policy"
            options={remotePolicyChoices}
          />

          <SelectField
            name="size"
            label="Company Size"
            options={companySizeChoices}
          />

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
