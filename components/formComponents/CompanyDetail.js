import {
  Button,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Select,
  VStack,
} from "@chakra-ui/react";
import { useFormik } from "formik";

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

      <FormControl>
        <FormLabel>Company Name</FormLabel>
        <Input
          name="name"
          value={formik.values.name}
          onChange={formik.handleChange}
        />
      </FormControl>

      <FormControl>
        <FormLabel>Location</FormLabel>
        <Input
          name="location"
          value={formik.values.location}
          onChange={formik.handleChange}
        />
      </FormControl>

      <FormControl>
        <FormLabel>Remote policy</FormLabel>
        <Select
          name="policy"
          placeholder="Select option"
          value={formik.values.policy}
          onChange={formik.handleChange}
        >
          <option value="remote">Remote</option>
          <option value="hybrid">Hybrid</option>
          <option value="onsite">On-site</option>
        </Select>
      </FormControl>

      <FormControl>
        <FormLabel>Number of employees</FormLabel>
        <Select
          name="size"
          placeholder="Select option"
          value={formik.values.size}
          onChange={formik.handleChange}
        >
          <option value="xs">{`< 10`}</option>
          <option value="sm">{`11 - 100`}</option>
          <option value="md">{`101 - 500`}</option>
          <option value="lg">{`101 - 500`}</option>
          <option value="xl">{`500+`}</option>
        </Select>
      </FormControl>

      <FormControl>
        <FormLabel>Funding Stage</FormLabel>
        <Select
          name="stage"
          placeholder="Select option"
          value={formik.values.stage}
          onChange={formik.handleChange}
        >
          <option value="pre">Pre-seed</option>
          <option value="seed">Seed</option>
          <option value="series">Series A/B/C</option>
        </Select>
      </FormControl>

      <FormControl>
        <FormLabel>Company Website</FormLabel>
        <Input
          name="url"
          value={formik.values.url}
          onChange={formik.handleChange}
        />
      </FormControl>

      <FormControl>
        <FormLabel>Admin Name</FormLabel>
        <Input
          name="admin"
          value={formik.values.admin}
          onChange={formik.handleChange}
        />
      </FormControl>

      <FormControl>
        <FormLabel>Admin Email</FormLabel>
        <Input
          name="email"
          value={formik.values.email}
          onChange={formik.handleChange}
        />
      </FormControl>

      <Button type="submit" colorScheme="blue">
        Next Step
      </Button>
    </VStack>
  );
};

export default CompanyDetail;
