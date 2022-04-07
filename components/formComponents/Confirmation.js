import { Button, Heading, VStack } from "@chakra-ui/react";

const Confirmation = ({ next, prev }) => {
  return (
    <VStack>
      <Heading>Confirmation</Heading>
      <Button onClick={prev}>Previous</Button>
      <Button onClick={() => next(true)}>Confirm</Button>
    </VStack>
  );
};

export default Confirmation;
