import React from "react";
import CustomTextField from "./CustomTextField";

interface TextFieldsProps {
  values: any;
  touched: any;
  errors: any;
  handleBlur: (args: any) => void;
  handleChange: (args: any) => void;
}

const TextFields: React.FC<TextFieldsProps> = ({
  values,
  touched,
  errors,
  handleBlur,
  handleChange,
}) => {
  return (
    <div>
      <CustomTextField
        label="first name"
        name="firstName"
        values={values.firstName}
        touched={touched.firstName}
        errors={errors.firstName}
        handleBlur={handleBlur}
        handleChange={handleChange}
      />
      <CustomTextField
        label="last name"
        name="lastName"
        values={values.lastName}
        touched={touched.lastName}
        errors={errors.lastName}
        handleBlur={handleBlur}
        handleChange={handleChange}
      />
      <CustomTextField
        label="email"
        name="email"
        values={values.email}
        touched={touched.email}
        errors={errors.email}
        handleBlur={handleBlur}
        handleChange={handleChange}
      />
      <CustomTextField
        label="contact"
        name="contact"
        values={values.contact}
        touched={touched.contact}
        errors={errors.contact}
        handleBlur={handleBlur}
        handleChange={handleChange}
      />
    </div>
  );
};

export default TextFields;
