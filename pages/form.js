import { Flex, Heading } from "@chakra-ui/react";
import Card from "../components/Card";

const Form = () => {
  return (
    <Flex
      direction="column"
      as="main"
      mx="auto"
      w="full"
      alignItems="center"
      justifyContent="center"
    >
      <Heading>Propose a Bounty</Heading>
      <Card>
        <h2>Form</h2>
      </Card>
    </Flex>
  );
};

export default Form;
