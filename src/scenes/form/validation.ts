import * as yup from "yup";

const phoneRegExp = new RegExp(
  "^[+]?[(]?[0-9]{3}[)]?[-s.]?[0-9]{3}[-s.]?[0-9]{4,6}$"
);

const phoneNumberNotValid = "phone Number Is Not Valid";
const emailNotValid = "email Is Not Valid";
const requiredField = "this field is required";

export const userSchema = yup.object().shape({
  firstName: yup.string().required(requiredField),
  lastName: yup.string().required(requiredField),
  email: yup
    .string()
    .email(emailNotValid)
    .required(requiredField),
  contact: yup
    .string()
    .matches(phoneRegExp, phoneNumberNotValid)
    .required("required"),
  address1: yup.string().required(requiredField),
  address2: yup.string().required(requiredField),
});
