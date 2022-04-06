import { Flex, Heading } from "@chakra-ui/react";
import Card from "../components/Card";
import CompanyDetail from "../components/formComponents/CompanyDetail";

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
        <CompanyDetail />
      </Card>
    </Flex>
  );
};

export default Form;
