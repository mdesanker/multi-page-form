import { Flex, Heading } from "@chakra-ui/react";
import { useState } from "react";
import Card from "../components/Card";
import CompanyDetailForm from "../components/formComponents/CompanyDetailForm";
import RoleForm from "../components/formComponents/RoleForm";

const Form = () => {
  const [currentStep, setCurrentStep] = useState(0);

  const steps = [<CompanyDetailForm key={0} />, <RoleForm key={2} />];

  const nextStepHandler = (final = false) => {
    if (final) {
      console.log("Form submitted");
      return;
    }

    setCurrentStep((prev) => prev++);
  };

  const prevStepHandler = () => {
    setCurrentStep((prev) => prev--);
  };

  return (
    <Flex
      direction="column"
      as="main"
      mx="auto"
      w="full"
      alignItems="center"
      justifyContent="center"
    >
      <Heading>Propose a Bounty</Heading>
      <Card>{steps[currentStep]}</Card>
    </Flex>
  );
};

export default Form;
