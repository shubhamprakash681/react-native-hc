import * as yup from "yup";

export const passwordSchema = yup.object().shape({
  passwordLength: yup
    .number()
    .min(4, "Should be minimum of 4 characters.")
    .max(16, "Should be maximum of 16 characters.")
    .required("Length is required"),
});
