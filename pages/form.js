import { Flex, Heading } from "@chakra-ui/react";
import { useState } from "react";
import Card from "../components/Card";
import CompanyDetailForm from "../components/formComponents/CompanyDetailForm";
import Confirmation from "../components/formComponents/Confirmation";
import RoleForm from "../components/formComponents/RoleForm";
import Success from "../components/formComponents/Success";

const Form = () => {
  const [currentStep, setCurrentStep] = useState(0);

  function nextStepHandler(final = false) {
    if (final) {
      console.log("Form submitted");
      return;
    }

    setCurrentStep(currentStep + 1);
  }

  function prevStepHandler() {
    setCurrentStep(currentStep - 1);
  }

  function setStepHandler(step) {
    setCurrentStep(step);
  }

  const steps = [
    <CompanyDetailForm key={0} next={nextStepHandler} />,
    <RoleForm key={1} next={nextStepHandler} prev={prevStepHandler} />,
    <Confirmation
      key={2}
      next={nextStepHandler}
      prev={prevStepHandler}
      set={setStepHandler}
    />,
    <Success key={3} next={nextStepHandler} />,
  ];

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
