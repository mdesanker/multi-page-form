import { HStack } from "@chakra-ui/react";
import Step from "./Step";

const StepCounter = ({ step }) => {
  return (
    <HStack w="full" mb={4} justifyContent="space-between">
      <Step step="1" title="Company Details" />
      <Step step="2" title="Role Details" />
      <Step step="3" title="Confirmation" />
    </HStack>
  );
};

export default StepCounter;
