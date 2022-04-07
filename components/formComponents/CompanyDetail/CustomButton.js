import { Box, Square } from "@chakra-ui/react";

const CustomButton = ({ children, clickHander, active }) => {
  return (
    <Square
      as="button"
      borderBottom="4px"
      borderBottomColor={active ? "blue.500" : "gray.400"}
      color={active ? "gray.700" : "gray.400"}
      h={12}
      w={32}
      fontSize="lg"
      fontWeight="semibold"
      ml="0"
      _hover={{ color: "gray.700" }}
      onClick={clickHander}
    >
      {children}
    </Square>
  );
};

export default CustomButton;
