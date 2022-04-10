import { Flex, Text } from "@chakra-ui/react";

const TextOutput = ({ label, value }) => {
  return (
    <Flex direction={["column", "row"]} w="full">
      <Text fontWeight="bold" fontSize="md" minW="160px">
        {label}:
      </Text>
      <Text fontSize="md" pl={["10px", 0]} isTruncated>
        {value}
      </Text>
    </Flex>
  );
};

export default TextOutput;
