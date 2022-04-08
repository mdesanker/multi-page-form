import { HStack, Text } from "@chakra-ui/react";

const TextOutput = ({ label, value }) => {
  return (
    <HStack w="full">
      <Text fontWeight="bold" fontSize="md" minW="180px">
        {label}:
      </Text>
      <Text fontSize="md" isTruncated>
        {value}
      </Text>
    </HStack>
  );
};

export default TextOutput;
