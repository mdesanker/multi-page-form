import {
  FormControl,
  FormErrorMessage,
  FormHelperText,
  FormLabel,
  Input,
} from "@chakra-ui/react";
import { Field, useField } from "formik";

const TextField = ({ label, helper, ...props }) => {
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
      <FormHelperText>{helper}</FormHelperText>
      <FormErrorMessage>{meta.error}</FormErrorMessage>
    </FormControl>
  );
};

export default TextField;
