import { Button, Flex } from "@chakra-ui/react";
import Head from "next/head";
import NextLink from "next/link";

const Home = () => {
  return (
    <Flex justifyContent="center" alignItems="center" h="50vh">
      <Head>
        <title>Multi-Page Form</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <NextLink href="#" passHref>
        <Button size="lg" colorScheme="blue" variant="outline">
          Create a Bounty
        </Button>
      </NextLink>
    </Flex>
  );
};

export default Home;
