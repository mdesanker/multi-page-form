import {
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Input,
  Select,
  VStack,
} from "@chakra-ui/react";
import { Field, Formik, useFormik } from "formik";
import * as Yup from "yup";

const CompanyDetail = () => {
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

          <FormControl isInvalid={formik.errors.name && formik.touched.name}>
            <FormLabel>Company Name</FormLabel>
            <Field as={Input} name="name" {...formik.getFieldProps("name")} />
            <FormErrorMessage>{formik.errors.name}</FormErrorMessage>
          </FormControl>

          <FormControl
            isInvalid={formik.errors.location && formik.touched.location}
          >
            <FormLabel>Location</FormLabel>
            <Field
              as={Input}
              name="location"
              {...formik.getFieldProps("location")}
            />
            <FormErrorMessage>{formik.errors.location}</FormErrorMessage>
          </FormControl>

          <FormControl
            isInvalid={formik.errors.policy && formik.touched.policy}
          >
            <FormLabel>Remote policy</FormLabel>
            <Field
              as={Select}
              name="policy"
              placeholder="Select option"
              {...formik.getFieldProps("policy")}
            >
              <option value="remote">Remote</option>
              <option value="hybrid">Hybrid</option>
              <option value="onsite">On-site</option>
            </Field>
            <FormErrorMessage>{formik.errors.policy}</FormErrorMessage>
          </FormControl>

          <FormControl isInvalid={formik.errors.size && formik.touched.size}>
            <FormLabel>Number of employees</FormLabel>
            <Field
              as={Select}
              name="size"
              placeholder="Select option"
              {...formik.getFieldProps("size")}
            >
              <option value="xs">{`< 10`}</option>
              <option value="sm">{`11 - 100`}</option>
              <option value="md">{`101 - 500`}</option>
              <option value="lg">{`101 - 500`}</option>
              <option value="xl">{`500+`}</option>
            </Field>
            <FormErrorMessage>{formik.errors.size}</FormErrorMessage>
          </FormControl>

          <FormControl isInvalid={formik.errors.stage && formik.touched.stage}>
            <FormLabel>Funding Stage</FormLabel>
            <Field
              as={Select}
              name="stage"
              placeholder="Select option"
              {...formik.getFieldProps("stage")}
            >
              <option value="pre">Pre-seed</option>
              <option value="seed">Seed</option>
              <option value="series">Series A/B/C</option>
            </Field>
            <FormErrorMessage>{formik.errors.stage}</FormErrorMessage>
          </FormControl>

          <FormControl isInvalid={formik.errors.url && formik.touched.url}>
            <FormLabel>Company Website</FormLabel>
            <Field as={Input} name="url" {...formik.getFieldProps("url")} />
          </FormControl>

          <FormControl isInvalid={formik.errors.admin && formik.touched.admin}>
            <FormLabel>Admin Name</FormLabel>
            <Input name="admin" {...formik.getFieldProps("admin")} />
            <FormErrorMessage>{formik.errors.admin}</FormErrorMessage>
          </FormControl>

          <FormControl isInvalid={formik.errors.email && formik.touched.email}>
            <FormLabel>Admin Email</FormLabel>
            <Field as={Input} name="email" {...formik.getFieldProps("email")} />
            <FormErrorMessage>{formik.errors.email}</FormErrorMessage>
          </FormControl>

          <Button type="submit" colorScheme="blue">
            Next Step
          </Button>
        </VStack>
      )}
    </Formik>
  );
};

export default CompanyDetail;
