import { Flex, Heading, Text } from "@chakra-ui/react";
import { useState } from "react";
import Card from "../components/Card";
import CompanyDetailForm from "../components/FormComponents/CompanyDetailStep/CompanyDetailForm";
import Confirmation from "../components/FormComponents/ConfirmationStep/Confirmation";
import RoleForm from "../components/FormComponents/RoleDetailStep/RoleForm";
import StepCounter from "../components/FormComponents/StepCounter/StepCounter";
import Success from "../components/FormComponents/SuccessStep/Success";

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
      <Heading mt={4} textAlign="center">
        Propose a Bounty
      </Heading>
      <Text mb={4} textAlign="center">
        Talentdrop reviews and approves new bounty companies on a rolling basis.{" "}
        <Text as="span" fontWeight="semibold" color="blue.500" cursor="pointer">
          Learn more.
        </Text>
      </Text>
      <Card>
        {currentStep < steps.length - 1 && <StepCounter active={currentStep} />}
        {steps[currentStep]}
      </Card>
    </Flex>
  );
};

export default Form;
