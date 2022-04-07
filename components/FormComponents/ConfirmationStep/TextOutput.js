import { HStack, Text } from "@chakra-ui/react";

const TextOutput = ({ label, value }) => {
  return (
    <HStack w="full">
      <Text fontWeight="bold" fontSize="lg" w="200px">
        {label}:
      </Text>
      <Text fontSize="lg">{value}</Text>
    </HStack>
  );
};

export default TextOutput;
