import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
} from "@chakra-ui/react";
import { Field, useField } from "formik";

const TextField = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <FormControl
      isInvalid={meta.error && meta.touched}
      mb={6}
      variant="floating"
      isRequired
      role="group"
    >
      <Field as={Input} {...field} {...props} placeholder=" " />
      <FormLabel color="gray.600" _groupFocusWithin={{ color: "blue.500" }}>
        {label}
      </FormLabel>
      <FormErrorMessage>{meta.error}</FormErrorMessage>
    </FormControl>
  );
};

export default TextField;
