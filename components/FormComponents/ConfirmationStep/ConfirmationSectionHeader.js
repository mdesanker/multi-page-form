import { Box, Button, Divider, Flex, Heading, Square } from "@chakra-ui/react";
import NextLink from "next/link";
import { AiFillEdit } from "react-icons/ai";

const ConfirmationSectionHeader = ({ title, page, set }) => {
  return (
    <Flex
      w="full"
      justifyContent="space-between"
      alignItems="center"
      py={2}
      borderBottom="1px"
      borderColor="gray.300"
    >
      <Heading as="h3" fontSize="2xl">
        {title}
      </Heading>
      <Button variant="ghost" role="group" onClick={() => set(page)}>
        <Box
          as={AiFillEdit}
          h={6}
          w={6}
          color="gray.400"
          _groupHover={{ color: "blue.500" }}
        />
      </Button>
    </Flex>
  );
};

export default ConfirmationSectionHeader;
