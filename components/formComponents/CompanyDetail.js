import {
  Button,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Select,
  VStack,
} from "@chakra-ui/react";

const CompanyDetail = () => {
  return (
    <VStack>
      <Heading as="h2" fontSize="2xl">
        Company Details
      </Heading>

      <FormControl>
        <FormLabel>Company Name</FormLabel>
        <Input name="name" />
      </FormControl>

      <FormControl>
        <FormLabel>Location</FormLabel>
        <Input name="location" />
      </FormControl>

      <FormControl>
        <FormLabel>Remote policy</FormLabel>
        <Select name="name" placeholder="Select option">
          <option value="remote">Remote</option>
          <option value="hybrid">Hybrid</option>
          <option value="onsite">On-site</option>
        </Select>
      </FormControl>

      <FormControl>
        <FormLabel>Number of employees</FormLabel>
        <Select name="size" placeholder="Select option">
          <option value="xs">{`< 10`}</option>
          <option value="sm">{`11 - 100`}</option>
          <option value="md">{`101 - 500`}</option>
          <option value="lg">{`101 - 500`}</option>
          <option value="xl">{`500+`}</option>
        </Select>
      </FormControl>

      <FormControl>
        <FormLabel>Funding Stage</FormLabel>
        <Select name="name" placeholder="Select option">
          <option value="pre">Pre-seed</option>
          <option value="seed">Seed</option>
          <option value="series">Series A/B/C</option>
        </Select>
      </FormControl>

      <FormControl>
        <FormLabel>Company Website</FormLabel>
        <Input name="url" />
      </FormControl>

      <FormControl>
        <FormLabel>Admin Name</FormLabel>
        <Input name="admin" />
      </FormControl>

      <FormControl>
        <FormLabel>Admin Email</FormLabel>
        <Input name="email" />
      </FormControl>

      <Button type="submit" colorScheme="blue">
        Next Step
      </Button>
    </VStack>
  );
};

export default CompanyDetail;
