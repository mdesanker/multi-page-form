import { Flex, Heading, Text } from "@chakra-ui/react";
import { useState } from "react";
import Card from "../components/Card";
import CompanyDetailForm from "../components/formComponents/companyDetailStep/CompanyDetailForm";
import RoleForm from "../components/formComponents/roleDetailStep/RoleForm";
import StepCounter from "../components/formComponents/stepCounter/StepCounter";
import Success from "../components/formComponents/successStep/Success";
import { v4 as uuidv4 } from "uuid";
import Confirmation from "../components/formComponents/confirmationStep/Confirmation";
import FormHeader from "../components/FormHeader";

const Form = () => {
  const [currentStep, setCurrentStep] = useState(0);

  function nextStepHandler() {
    window.scrollTo(0, 0);
    setCurrentStep(currentStep + 1);
  }

  function prevStepHandler() {
    window.scrollTo(0, 0);
    setCurrentStep(currentStep - 1);
  }

  function setStepHandler(step) {
    window.scrollTo(0, 0);
    setCurrentStep(step);
  }

  const steps = [
    <CompanyDetailForm key={uuidv4()} next={nextStepHandler} />,
    <RoleForm key={uuidv4()} next={nextStepHandler} prev={prevStepHandler} />,
    <Confirmation
      key={uuidv4()}
      next={nextStepHandler}
      prev={prevStepHandler}
      set={setStepHandler}
    />,
    <Success key={uuidv4()} next={nextStepHandler} />,
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
      <FormHeader />
      <Card>
        {currentStep < steps.length - 1 && <StepCounter active={currentStep} />}
        {steps[currentStep]}
      </Card>
    </Flex>
  );
};

export default Form;
