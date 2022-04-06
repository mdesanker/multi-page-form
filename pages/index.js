import { Button, Flex } from "@chakra-ui/react";
import NextLink from "next/link";

const Home = () => {
  return (
    <Flex justifyContent="center" alignItems="center" h="50vh">
      <NextLink href="/form" passHref>
        <Button size="lg" colorScheme="blue" variant="outline">
          Create a Bounty
        </Button>
      </NextLink>
    </Flex>
  );
};

export default Home;
