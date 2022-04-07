import { Box, Button, Heading, Text, VStack } from "@chakra-ui/react";
import { BsCheck2Circle } from "react-icons/bs";
import NextLink from "next/link";

const Success = ({ next }) => {
  return (
    <VStack>
      <Box as={BsCheck2Circle} size={80} color="green.500" />
      <Heading>Thank you!</Heading>
      <Text>Your form was submitted successfully.</Text>
      <NextLink href="/" passHref>
        <Button onClick={() => next(true)}>Return to Homepage</Button>
      </NextLink>
    </VStack>
  );
};

export default Success;
