import { Heading, Text } from "@chakra-ui/react";

const FormHeader = () => {
  return (
    <>
      <Heading mt={4} textAlign="center">
        Propose a Bounty
      </Heading>
      <Text mb={4} textAlign="center">
        Talentdrop reviews and approves new bounty companies on a rolling basis.{" "}
        <Text as="span" fontWeight="semibold" color="blue.500" cursor="pointer">
          Learn more.
        </Text>
      </Text>
    </>
  );
};

export default FormHeader;
