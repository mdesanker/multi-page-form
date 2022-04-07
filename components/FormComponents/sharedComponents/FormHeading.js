import { Flex, Heading, Text } from "@chakra-ui/react";

const FormHeading = ({ step, label }) => {
  return (
    <Flex direction="column">
      <Text color="gray.500" py={2}>
        Step {step}/3
      </Text>
      <Heading as="h2" fontSize="2xl" pb={6}>
        {label}
      </Heading>
    </Flex>
  );
};

export default FormHeading;
