import { Button } from "@chakra-ui/react";

const NextButton = ({ type, text, clickHandler }) => {
  return (
    <Button
      type={type}
      colorScheme="blue"
      p={6}
      mt={6}
      w={28}
      h={12}
      border="1px"
      borderColor="blue.500"
      onClick={clickHandler}
    >
      {text}
    </Button>
  );
};

export default NextButton;
