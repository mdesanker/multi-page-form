import { Flex, Heading, Text } from "@chakra-ui/react";

const FormHeader = ({ step, label, sublabel }) => {
  return (
    <Flex direction="column" mb={3}>
      <Text color="gray.500" py={2}>
        Step {step}/3
      </Text>
      <Heading as="h2" fontSize="2xl" pb={1}>
        {label}
      </Heading>
      {sublabel && <Text>{sublabel}</Text>}
    </Flex>
  );
};

export default FormHeader;
