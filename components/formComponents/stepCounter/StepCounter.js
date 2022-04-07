import { HStack } from "@chakra-ui/react";
import Step from "./Step";

const StepCounter = ({ active }) => {
  return (
    <HStack w="full" mb={4} justifyContent="space-between">
      <Step step={1} title="Company Details" active={active} />
      <Step step={2} title="Role Details" active={active} />
      <Step step={3} title="Confirmation" active={active} />
    </HStack>
  );
};

export default StepCounter;
