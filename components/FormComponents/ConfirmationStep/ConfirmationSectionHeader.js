import { Box, Button, Divider, Flex, Heading, Square } from "@chakra-ui/react";
import NextLink from "next/link";
import { RiPencilFill } from "react-icons/ri";

const ConfirmationSectionHeader = ({ title, page, set }) => {
  return (
    <Flex
      w="full"
      justifyContent="space-between"
      alignItems="center"
      py={1}
      borderBottom="1px"
      borderColor="gray.200"
    >
      <Heading as="h3" fontSize="lg">
        {title}
      </Heading>
      <Button variant="ghost" role="group" onClick={() => set(page)}>
        <Box
          as={RiPencilFill}
          h={5}
          w={5}
          color="gray.400"
          _groupHover={{ color: "blue.500" }}
        />
      </Button>
    </Flex>
  );
};

export default ConfirmationSectionHeader;
