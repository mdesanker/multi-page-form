import { HStack } from "@chakra-ui/react";
import Step from "./Step";

const StepCounter = ({ active }) => {
  return (
    <>
      <HStack
        w="full"
        pb={4}
        mb={4}
        justifyContent={["space-between", "space-around"]}
        borderBottom="1px"
        borderBottomColor="gray.300"
      >
        <Step step={1} title="Company" active={active} />
        <Step step={2} title="Roles" active={active} />
        <Step step={3} title="Confirm" active={active} />
      </HStack>
    </>
  );
};

export default StepCounter;
