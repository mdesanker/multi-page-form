import * as Yup from "yup";

const companyDetailValidation = Yup.object({
  name: Yup.string().required("Company name is required"),
  location: Yup.string().required("Location is required"),
  policy: Yup.string().required("Remote policy is required"),
  size: Yup.string().required("Company size is required"),
  stage: Yup.string().required("Funding stage is required"),
  url: Yup.string().required("Company URL is required"),
  admin: Yup.string().required("Admin name is required"),
  email: Yup.string()
    .email("Invalid eail address")
    .required("Admin email address is required"),
});

export default companyDetailValidation;
