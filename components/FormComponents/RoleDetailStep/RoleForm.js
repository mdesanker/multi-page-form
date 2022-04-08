import { Button, Flex, Heading, HStack, VStack } from "@chakra-ui/react";
import { FieldArray, Form, Formik } from "formik";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { newRoleValidationSchema } from "../../../config/Validation";
import { updateRoles } from "../../../store/slices/roleSlice";
import TextAreaField from "../FieldComponents/TextAreaField";
import TextField from "../FieldComponents/TextField";
import FormHeading from "../sharedComponents/FormHeading";
import NextButton from "../sharedComponents/NextButton";

const RoleForm = ({ next, prev }) => {
  const dispatch = useDispatch();
  const { roles } = useSelector((state) => state.role);

  const [initialValues, setInitialValues] = useState({
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
  });

  useEffect(() => {
    if (roles) {
      setInitialValues({ roles: roles });
    }
  }, []);

  return (
    <Formik
      enableReinitialize="true"
      initialValues={initialValues}
      validationSchema={newRoleValidationSchema}
      onSubmit={(values) => {
        dispatch(updateRoles(values.roles));
        next(false);
      }}
    >
      {(formik) => (
        <Flex
          direction="column"
          as={Form}
          onSubmit={formik.handleSubmit}
          w="full"
        >
          <FormHeading step={2} label="Role Details" />

          <FieldArray name="roles">
            {({ remove, push }) => (
              <Flex direction="column" w="full">
                {formik.values.roles.length > 0 &&
                  formik.values.roles.map((role, index) => (
                    <Flex w="full" direction="column" key={index} mt={2}>
                      <Heading as="h2" fontSize="xl" mb={3}>
                        Role
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
                        label="Required Experience (years)"
                      />

                      <TextAreaField
                        name={`roles.${index}.description`}
                        label="Job Description"
                      />
                      <Button
                        my={2}
                        type="button"
                        onClick={() => remove(index)}
                      >
                        Remove Role
                      </Button>
                    </Flex>
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
              </Flex>
            )}
          </FieldArray>

          <Flex
            justifyContent="space-between"
            alignItems="center"
            mt={8}
            borderTop="1px"
            borderTopColor="gray.300"
          >
            <Button
              type="button"
              colorScheme="blue"
              variant="outline"
              p={6}
              mt={6}
              w={44}
              h={12}
              onClick={prev}
            >
              Previous Step
            </Button>
            <NextButton type="submit" text="Next" />
          </Flex>
        </Flex>
      )}
    </Formik>
  );
};

export default RoleForm;
