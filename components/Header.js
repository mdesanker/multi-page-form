import { Box, Flex, Heading, Image } from "@chakra-ui/react";

const Header = () => {
  return (
    <Box as="header" w={"full"} h={20} bg={"gray.100"} p={5}>
      <Flex justifyContent={"space-between"} alignItems="center" h="full">
        <Flex alignItems={"center"} gap={2}>
          <Image
            src="/images/talentdrop_logo.png"
            alt="Talentdrop logo"
            boxSize="24px"
            objectFit="cover"
          />
          <Heading as="h1" size={"md"} fontWeight="bold">
            Talentdrop
          </Heading>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Header;
