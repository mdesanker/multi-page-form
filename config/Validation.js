import * as Yup from "yup";

export const newCompanyValidationSchema = Yup.object({
  companyId: Yup.string()
    .min(6, "Company ID must be at least 6 characters")
    .matches(/^[a-zA-Z0-9\-_]{0,40}$/gm, "Company ID must be alphanumeric")
    .required("Company ID is required"),

  // Async validator to check whether company ID is unique

  // .test("checkIdUnique", "This ID is already registered", (value) =>
  //   fetch(`/isunique/${companyId}`).then(async (res) => {
  //     const { isIdUnique } = await res.json();

  //     return isIdUnique;
  //   })
  // ),

  name: Yup.string()
    .matches(
      /(?!^\d+$)^[A-Za-z0-9]*$/gm,
      "Company name must be alphanumeric, and cannot contain only numbers"
    )
    .required("Company name is required"),
  location: Yup.string().required("Location is required"),
  policy: Yup.string().required("Remote policy is required"),
  size: Yup.string().required("Company size is required"),
  stage: Yup.string().required("Funding stage is required"),
  url: Yup.string().url("Invalid URL").required("Company website is required"),
  admin: Yup.string().required("Admin name is required"),
  email: Yup.string()
    .email("Invalid email address")
    .required("Admin email address is required"),
});

export const returningCompanyValidationSchema = Yup.object({
  companyId: Yup.string()
    .min(6, "Company ID must be at least 6 characters")
    .matches(/^[a-zA-Z0-9\-_]{0,40}$/gm, "Company ID must be alphanumeric")
    .required("Company ID is required"),

  // Use async validator here to check that company ID exists in database

  email: Yup.string()
    .email("Invalid email address")
    .required("Admin email address is required"),

  // Use async validator to check that email address matches the company ID in database
});

export const newRoleValidationSchema = Yup.object({
  roles: Yup.array().of(
    Yup.object().shape({
      title: Yup.string().required("Job title is required"),
      salary: Yup.string().required("Salary (range) is required"),
      department: Yup.string().required("Job department is required"),
      location: Yup.string().required("Location is required"),
      experience: Yup.string().required("Desired experience is required"),
      description: Yup.string().required("Job description is required"),
    })
  ),
});
