import { Box, Button, Flex, Heading, VStack } from "@chakra-ui/react";
import { FieldArray, Form, Formik } from "formik";
import { newRoleValidationSchema } from "../../config/Validation";
import TextAreaField from "./fieldComponents/TextAreaField";
import TextField from "./fieldComponents/TextField";

const RoleForm = () => {
  const initialValues = {
    roles: [
      {
        title: "",
        salary: "",
        department: "",
        location: "",
        experience: "",
        description: "",
      },
    ],
  };

  console.log(initialValues.roles.length);

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={newRoleValidationSchema}
      onSubmit={(values, actions) => {
        alert(JSON.stringify(values, null, 2));
        // actions.resetForm();
      }}
    >
      {(formik) => (
        <VStack as={Form} onSubmit={formik.handleSubmit} w="full">
          <FieldArray name="roles">
            {({ remove, push }) => (
              <VStack w="full">
                {formik.values.roles.length > 0 &&
                  formik.values.roles.map((role, index) => (
                    <VStack w="full" direction="column" key={index}>
                      <Heading as="h2" fontSize="2xl">
                        Role Details
                      </Heading>

                      <TextField
                        name={`roles.${index}.title`}
                        label="Job Title"
                      />

                      <TextField
                        name={`roles.${index}.salary`}
                        label="Salary Range"
                      />

                      <TextField
                        name={`roles.${index}.department`}
                        label="Department"
                      />

                      <TextField
                        name={`roles.${index}.location`}
                        label="Location"
                      />

                      <TextField
                        name={`roles.${index}.experience`}
                        label="Desired Experience (years)"
                      />

                      <TextAreaField
                        name={`roles.${index}.description`}
                        label="Job Description"
                      />
                      <Button type="button" onClick={() => remove(index)}>
                        Remove
                      </Button>
                    </VStack>
                  ))}
                <Button
                  type="button"
                  onClick={() =>
                    push({
                      title: "",
                      salary: "",
                      department: "",
                      location: "",
                      experience: "",
                      description: "",
                    })
                  }
                >
                  Add Role
                </Button>
              </VStack>
            )}
          </FieldArray>
          <Button type="submit" colorScheme="blue">
            Next Step
          </Button>
        </VStack>
      )}
    </Formik>
  );
};

export default RoleForm;
