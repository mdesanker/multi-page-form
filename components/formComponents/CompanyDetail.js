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
import { useFormik } from "formik";
import * as Yup from "yup";

const CompanyDetail = () => {
  const formik = useFormik({
    initialValues: {
      name: "",
      location: "",
      policy: "",
      size: "",
      stage: "",
      url: "",
      admin: "",
      email: "",
    },
    validationSchema: Yup.object({
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
    }),
    onSubmit: (values, actions) => {
      alert(JSON.stringify(values, null, 2));
      // actions.resetForm();
    },
  });

  return (
    <VStack as="form" onSubmit={formik.handleSubmit}>
      <Heading as="h2" fontSize="2xl">
        Company Details
      </Heading>

      <FormControl isInvalid={formik.errors.name && formik.touched.name}>
        <FormLabel>Company Name</FormLabel>
        <Input
          name="name"
          value={formik.values.name}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        <FormErrorMessage>{formik.errors.name}</FormErrorMessage>
      </FormControl>

      <FormControl
        isInvalid={formik.errors.location && formik.touched.location}
      >
        <FormLabel>Location</FormLabel>
        <Input
          name="location"
          value={formik.values.location}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        <FormErrorMessage>{formik.errors.location}</FormErrorMessage>
      </FormControl>

      <FormControl isInvalid={formik.errors.policy && formik.touched.policy}>
        <FormLabel>Remote policy</FormLabel>
        <Select
          name="policy"
          placeholder="Select option"
          value={formik.values.policy}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        >
          <option value="remote">Remote</option>
          <option value="hybrid">Hybrid</option>
          <option value="onsite">On-site</option>
        </Select>
        <FormErrorMessage>{formik.errors.policy}</FormErrorMessage>
      </FormControl>

      <FormControl isInvalid={formik.errors.size && formik.touched.size}>
        <FormLabel>Number of employees</FormLabel>
        <Select
          name="size"
          placeholder="Select option"
          value={formik.values.size}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        >
          <option value="xs">{`< 10`}</option>
          <option value="sm">{`11 - 100`}</option>
          <option value="md">{`101 - 500`}</option>
          <option value="lg">{`101 - 500`}</option>
          <option value="xl">{`500+`}</option>
        </Select>
        <FormErrorMessage>{formik.errors.size}</FormErrorMessage>
      </FormControl>

      <FormControl isInvalid={formik.errors.stage && formik.touched.stage}>
        <FormLabel>Funding Stage</FormLabel>
        <Select
          name="stage"
          placeholder="Select option"
          value={formik.values.stage}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        >
          <option value="pre">Pre-seed</option>
          <option value="seed">Seed</option>
          <option value="series">Series A/B/C</option>
        </Select>
        <FormErrorMessage>{formik.errors.stage}</FormErrorMessage>
      </FormControl>

      <FormControl isInvalid={formik.errors.url && formik.touched.url}>
        <FormLabel>Company Website</FormLabel>
        <Input
          name="url"
          value={formik.values.url}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
      </FormControl>

      <FormControl isInvalid={formik.errors.admin && formik.touched.admin}>
        <FormLabel>Admin Name</FormLabel>
        <Input
          name="admin"
          value={formik.values.admin}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        <FormErrorMessage>{formik.errors.admin}</FormErrorMessage>
      </FormControl>

      <FormControl isInvalid={formik.errors.email && formik.touched.email}>
        <FormLabel>Admin Email</FormLabel>
        <Input
          name="email"
          value={formik.values.email}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        <FormErrorMessage>{formik.errors.email}</FormErrorMessage>
      </FormControl>

      <Button type="submit" colorScheme="blue">
        Next Step
      </Button>
    </VStack>
  );
};

export default CompanyDetail;
