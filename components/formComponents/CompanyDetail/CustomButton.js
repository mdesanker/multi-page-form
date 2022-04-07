import { Box, Square } from "@chakra-ui/react";

const CustomButton = ({ children, clickHander }) => {
  return (
    <Square
      as="button"
      borderBottom="4px"
      borderBottomColor="gray.400"
      color="gray.400"
      h={12}
      w={32}
      fontSize="lg"
      fontWeight="semibold"
      ml="0"
      _hover={{ color: "gray.700", borderBottomColor: "gray.700" }}
      onClick={clickHander}
    >
      {children}
    </Square>
  );
};

export default CustomButton;
