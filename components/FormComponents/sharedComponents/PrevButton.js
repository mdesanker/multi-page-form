import { Button } from "@chakra-ui/react";

const PrevButton = ({ type, text, clickHandler }) => {
  return (
    <Button
      type={type}
      colorScheme="blue"
      variant="outline"
      p={6}
      mt={6}
      w={44}
      h={12}
      onClick={clickHandler}
    >
      {text}
    </Button>
  );
};

export default PrevButton;
