import { Flex, Heading, Text } from "@chakra-ui/react";
import { useState } from "react";
import Card from "../components/general/Card";
import CompanyDetailForm from "../components/companyDetailForm/CompanyDetailForm";
import RoleDetailForm from "../components/roleDetailForm/RoleDetailForm";
import StepCounter from "../components/stepCounter/StepCounter";
import Success from "../components/successPage/Success";
import { v4 as uuidv4 } from "uuid";
import Confirmation from "../components/confirmationForm/Confirmation";
import PageHeader from "../components/general/PageHeader";

const Form = () => {
  const [currentStep, setCurrentStep] = useState(0);

  function submitHandler() {
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
    <CompanyDetailForm key={uuidv4()} onSubmit={submitHandler} />,
    <RoleDetailForm
      key={uuidv4()}
      onSubmit={submitHandler}
      prev={prevStepHandler}
    />,
    <Confirmation
      key={uuidv4()}
      onSubmit={submitHandler}
      prev={prevStepHandler}
      set={setStepHandler}
    />,
    <Success key={uuidv4()} onSubmit={submitHandler} />,
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
      <PageHeader />
      <Card>
        {currentStep < steps.length - 1 && <StepCounter active={currentStep} />}
        {steps[currentStep]}
      </Card>
    </Flex>
  );
};

export default Form;
