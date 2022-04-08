import { Box, Button, Flex, Heading, Square } from "@chakra-ui/react";
import { FieldArray, Form, Formik } from "formik";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { newRoleValidationSchema } from "../../config/Validation";
import { updateRoles } from "../../store/slices/roleSlice";
import TextAreaField from "../fieldComponents/TextAreaField";
import TextField from "../fieldComponents/TextField";
import FormHeader from "../general/FormHeader";
import { BiTrash } from "react-icons/bi";
import PrevButton from "../general/NextButton";
import NextButton from "../general/NextButton";

const RoleDetailForm = ({ next, prev }) => {
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
          <FormHeader step={2} label="Role Details" />

          <FieldArray name="roles">
            {({ remove, push }) => (
              <Flex direction="column" w="full">
                {formik.values.roles.length > 0 &&
                  formik.values.roles.map((role, index) => (
                    <Flex w="full" direction="column" key={index} mt={2}>
                      <Flex
                        justifyContent="space-between"
                        alignItems="center"
                        pb={1}
                        borderBottom="1px"
                        borderBottomColor="gray.300"
                        mb={6}
                      >
                        <Heading as="h2" fontSize="xl">
                          New Role
                        </Heading>
                        <Button
                          variant="ghost"
                          role="group"
                          onClick={() =>
                            formik.values.roles.length > 1 && remove(index)
                          }
                        >
                          <Box
                            as={BiTrash}
                            h={5}
                            w={5}
                            color="gray.400"
                            _groupHover={{ color: "red.500" }}
                          />
                        </Button>
                      </Flex>

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
                    </Flex>
                  ))}

                <Square>
                  <Button
                    type="button"
                    colorScheme="gray"
                    w="200px"
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
                </Square>
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
            <PrevButton type="button" text="Previous" clickHandler={prev} />
            <NextButton type="submit" text="Next" />
          </Flex>
        </Flex>
      )}
    </Formik>
  );
};

export default RoleDetailForm;
