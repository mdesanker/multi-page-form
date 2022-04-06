import { Box } from "@chakra-ui/react";

const Card = ({ children }) => {
  return (
    <Box
      p={8}
      my={6}
      maxW={"600px"}
      w="full"
      bg="white"
      boxShadow="lg"
      rounded="lg"
      position="relative"
    >
      {children}
    </Box>
  );
};

export default Card;
