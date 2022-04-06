import { Flex, Heading } from "@chakra-ui/react";
import Card from "../components/Card";
import NewCompanyForm from "../components/formComponents/NewCompanyForm";

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
        <NewCompanyForm />
      </Card>
    </Flex>
  );
};

export default Form;
