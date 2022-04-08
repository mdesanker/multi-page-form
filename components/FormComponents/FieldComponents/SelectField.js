import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  Select,
} from "@chakra-ui/react";
import { Field, useField } from "formik";

const SelectField = ({ label, options, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <FormControl
      isInvalid={meta.error && meta.touched}
      mb={4}
      isRequired
      role="group"
    >
      <FormLabel color="gray.600" _groupFocusWithin={{ color: "blue.500" }}>
        {label}
      </FormLabel>
      <Field
        as={Select}
        name="size"
        {...field}
        {...props}
        placeholder="Select one"
      >
        {options.map((option) => {
          return (
            <option key={option.key} value={option.value}>
              {option.key}
            </option>
          );
        })}
      </Field>
      <FormErrorMessage>{meta.error}</FormErrorMessage>
    </FormControl>
  );
};

export default SelectField;
