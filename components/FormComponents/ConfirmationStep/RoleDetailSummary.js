import { Flex, Heading, Text, VStack } from "@chakra-ui/react";
import TextOutput from "./TextOutput";

const RoleDetailSummary = ({ data }) => {
  return (
    <Flex
      direction="column"
      w="full"
      alignItems="flex-start"
      bg="gray.100"
      gap={1}
      p={2}
      mt={2}
    >
      <TextOutput label="Title" value={data.title} />
      <TextOutput label="Salary" value={data.salary} />
      <TextOutput label="Department" value={data.department} />
      <TextOutput label="Location" value={data.location} />
      <TextOutput label="Required Experience" value={data.experience} />
      <TextOutput label="Description" value={data.description} />
    </Flex>
  );
};

export default RoleDetailSummary;
