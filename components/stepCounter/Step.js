import { Box, HStack, Square, Text } from "@chakra-ui/react";
import { AiOutlineCheck } from "react-icons/ai";

const Step = ({ step, title, active }) => {
  const isActive = step === active + 1;

  return (
    <HStack>
      <Square
        bg={isActive ? "blue.500" : "gray.100"}
        h={12}
        w={12}
        rounded="md"
        fontSize="2xl"
        fontWeight="bold"
        color={isActive ? "white" : "gray.500"}
      >
        {step > active ? step : <Box as={AiOutlineCheck} />}
      </Square>
      <Text
        color={isActive ? "gray.800" : "gray.600"}
        fontWeight="semibold"
        display={["none", "block"]}
      >
        {title}
      </Text>
    </HStack>
  );
};

export default Step;
