import { Avatar, Box, Flex, Heading, Image, Button } from "@chakra-ui/react";
import NextLink from "next/link";

const Header = () => {
  return (
    <Box as="header" w={"full"} h={20} bg="white" p={5}>
      <Flex justifyContent={"space-between"} alignItems="center" h="full">
        <Flex alignItems={"center"} gap={2}>
          <Image
            src="/images/talentdrop_logo.png"
            alt="Talentdrop logo"
            boxSize="24px"
            objectFit="cover"
          />
          <NextLink href="/" passHref>
            <Heading as="h1" size={"md"} fontWeight="bold" cursor="pointer">
              Talentdrop
            </Heading>
          </NextLink>
        </Flex>
        <Flex alignItems="center" gap={3}>
          <Button colorScheme="blue">General Referral</Button>
          <Avatar bg="gray.400" boxSize="32px" cursor="pointer" />
        </Flex>
      </Flex>
    </Box>
  );
};

export default Header;
