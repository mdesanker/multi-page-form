import { HStack, Square, Text } from "@chakra-ui/react";

const Step = ({ step, title }) => {
  return (
    <HStack>
      <Square
        bg="gray.100"
        h={12}
        w={12}
        rounded="md"
        fontSize="2xl"
        fontWeight="bold"
        color="gray.500"
      >
        {step}
      </Square>
      <Text>{title}</Text>
    </HStack>
  );
};

export default Step;
