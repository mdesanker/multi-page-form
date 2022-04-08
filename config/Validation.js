import * as Yup from "yup";

export const newCompanyValidationSchema = Yup.object({
  companyId: Yup.string()
    .min(6, "Company ID must be at least 6 characters")
    .matches(
      /[A-Za-z]{2,}[A-Za-z0-9]*/gm,
      "Company ID must start with at least two letters and contain only letters and digits"
    )
    .required("Company ID is required"),
  name: Yup.string().required("Company name is required"),
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
    .matches(
      /[A-Za-z]{2,}[A-Za-z0-9]*/gm,
      "Company ID must start with at least two letters and contain only letters and digits"
    )
    .required("Company ID is required"),
  email: Yup.string()
    .email("Invalid email address")
    .required("Admin email address is required"),
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
