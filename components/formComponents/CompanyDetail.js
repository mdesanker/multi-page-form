import { Button, Heading, VStack } from "@chakra-ui/react";
import { Formik } from "formik";
import * as Yup from "yup";
import SelectField from "./SelectField";
import TextField from "./TextField";

const CompanyDetail = () => {
  const policyChoices = [
    { key: "Remote", value: "remote" },
    { key: "Hybrid", value: "hybrid" },
    { key: "On-Site", value: "onsite" },
  ];

  const sizeChoices = [
    { key: "< 10", value: "xs" },
    { key: "11 - 100", value: "sm" },
    { key: "101 - 500", value: "md" },
    { key: "501 - 2500", value: "lg" },
    { key: "2500+", value: "xl" },
  ];

  const stageChoices = [
    { key: "Pre-Seed", value: "pre" },
    { key: "Seed", value: "seed" },
    { key: "Series A/B/C", value: "series" },
  ];

  return (
    <Formik
      initialValues={{
        name: "",
        location: "",
        policy: "",
        size: "",
        stage: "",
        url: "",
        admin: "",
        email: "",
      }}
      validationSchema={Yup.object({
        name: Yup.string().required("Company name is required"),
        location: Yup.string().required("Location is required"),
        policy: Yup.string().required("Remote policy is required"),
        size: Yup.string().required("Company size is required"),
        stage: Yup.string().required("Funding stage is required"),
        url: Yup.string().required("Company URL is required"),
        admin: Yup.string().required("Admin name is required"),
        email: Yup.string()
          .email("Invalid eail address")
          .required("Admin email address is required"),
      })}
      onSubmit={(values, actions) => {
        alert(JSON.stringify(values, null, 2));
        // actions.resetForm();
      }}
    >
      {(formik) => (
        <VStack as="form" onSubmit={formik.handleSubmit}>
          <Heading as="h2" fontSize="2xl">
            Company Details
          </Heading>

          <TextField name="name" label="Comapny Name" />

          <TextField name="location" label="Location" />

          <SelectField
            name="policy"
            label="Remote Policy"
            placeholder="Choose option"
            options={policyChoices}
          />

          <SelectField
            name="size"
            label="Company Size"
            placeholder="Choose option"
            options={sizeChoices}
          />

          <SelectField
            name="stage"
            label="Funding Stage"
            placeholder="Choose option"
            options={stageChoices}
          />

          <TextField name="url" label="Company Website" />

          <TextField name="admin" label="Admin Name" />

          <TextField name="email" label="Admin Enail" type="email" />

          <Button type="submit" colorScheme="blue">
            Next Step
          </Button>
        </VStack>
      )}
    </Formik>
  );
};

export default CompanyDetail;
