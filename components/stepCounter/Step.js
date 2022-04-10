import { Box, Circle, Flex, Text } from "@chakra-ui/react";
import { AiOutlineCheck } from "react-icons/ai";

const Step = ({ step, title, active }) => {
  const isSeen = step <= active + 1;
  const isPassed = step <= active;
  const isActive = step === active + 1;

  return (
    <Flex direction="column" alignItems="center">
      <Text fontWeight="semibold" color={isSeen ? "blue.500" : "gray.400"}>
        {title}
      </Text>
      <Circle
        h={12}
        w={12}
        border="4px"
        borderColor={isSeen ? "blue.500" : "gray.200"}
        fontSize="2xl"
        bg={isPassed ? "blue.500" : isActive ? "white" : "gray.200"}
        // bg={isPassed ? "blue.500" : "gray.300"}
      >
        {isPassed && <Box as={AiOutlineCheck} color="white" />}
      </Circle>
    </Flex>
  );
};

export default Step;
