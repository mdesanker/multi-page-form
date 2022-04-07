import { Button, Heading, HStack, VStack } from "@chakra-ui/react";
import { FieldArray, Form, Formik } from "formik";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { newRoleValidationSchema } from "../../../config/Validation";
import { updateRoles } from "../../../store/slices/roleSlice";
import TextAreaField from "../FieldComponents/TextAreaField";
import TextField from "../FieldComponents/TextField";

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
          <HStack>
            <Button
              type="button"
              colorScheme="blue"
              variant="outline"
              onClick={prev}
            >
              Back
            </Button>
            <Button type="submit" colorScheme="blue">
              Submit
            </Button>
          </HStack>
        </VStack>
      )}
    </Formik>
  );
};

export default RoleForm;
