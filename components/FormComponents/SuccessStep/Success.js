import { Box, Button, Flex, Heading, Text } from "@chakra-ui/react";
import { BsCheck2Circle } from "react-icons/bs";
import NextLink from "next/link";

const Success = ({ next }) => {
  return (
    <Flex direction="column" alignItems="center" gap={3}>
      <Box as={BsCheck2Circle} size={80} color="green.500" />
      <Heading>Thank you!</Heading>
      <Text>Your form was submitted successfully.</Text>
      <NextLink href="/" passHref>
        <Button
          p={6}
          mt={6}
          w={44}
          h={12}
          colorScheme="blue"
          onClick={() => next(true)}
        >
          Return Home
        </Button>
      </NextLink>
    </Flex>
  );
};

export default Success;
