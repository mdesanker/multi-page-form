import { Heading, Text, VStack } from "@chakra-ui/react";
import TextOutput from "./TextOutput";

const RoleDetailSummary = ({ data }) => {
  return (
    <VStack w="full" alignItems="flex-start" bg="gray.100" p={2}>
      <TextOutput label="Title" value={data.title} />
      <TextOutput label="Salary" value={data.salary} />
      <TextOutput label="Department" value={data.department} />
      <TextOutput label="Location" value={data.location} />
      <TextOutput label="Desired Experience" value={data.experience} />
      <TextOutput label="Description" value={data.description} />
    </VStack>
  );
};

export default RoleDetailSummary;
