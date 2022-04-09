import { Avatar, Box, Flex, Heading, Button } from "@chakra-ui/react";
import NextLink from "next/link";
import { AiOutlineForm } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { companyReset } from "../../store/slices/companySlice";
import { rolesReset } from "../../store/slices/roleSlice";

const Header = () => {
  const dispatch = useDispatch();

  const navHomeHandler = () => {
    dispatch(companyReset());
    dispatch(rolesReset());
  };

  return (
    <Box as="header" w={"full"} h={20} bg="white" p={5}>
      <Flex justifyContent={"space-between"} alignItems="center" h="full">
        <NextLink href="/" passHref>
          <Flex
            alignItems={"center"}
            gap={2}
            cursor="pointer"
            onClick={navHomeHandler}
          >
            <Box as={AiOutlineForm} h={8} w={8} color="blue.600" />
            <Heading as="h1" size={"md"} fontWeight="bold">
              Multi-Page Form
            </Heading>
          </Flex>
        </NextLink>
        <Flex alignItems="center" gap={3}>
          <Button colorScheme="blue" display={["none", "block"]}>
            General Referral
          </Button>
          <Avatar bg="gray.400" boxSize="32px" cursor="pointer" />
        </Flex>
      </Flex>
    </Box>
  );
};

export default Header;
