import { Box, TextField, useMediaQuery } from "@mui/material";
import React from "react";
import { Formik } from "formik";
import * as yup from "yup";
import { TitleComponent } from "../../components/TitleComponent";
import { userSchema } from "./validation";
import CustomTextField from "./CustomTextField";
import TextFields from "./TextFields";

const initialValues = {
  firstName: "",
  lastName: "",
  email: "",
  contact: "",
  address1: "",
  address2: "",
};

const Form = () => {
  const isNonMobile = useMediaQuery("(min-width:600px)");
  const handleFormSumbmit = (values: any) => {};

  return (
    <Box m="20px">
      <TitleComponent
        title={"Create user"}
        subtitle={"create new user profile"}
      ></TitleComponent>
      <Formik
        onSubmit={handleFormSumbmit}
        initialValues={initialValues}
        validationSchema={userSchema}
      >
        {({
          values,
          errors,
          touched,
          handleBlur,
          handleChange,
          handleSubmit,
        }) => (
          <form onSubmit={handleSubmit}>
            <Box
              display="grid"
              gap="30px"
              gridTemplateColumns="repeat(4, minmax(0, 1fr))"
              sx={{
                "& > div": { gridColumn: isNonMobile ? undefined : "span 4" },
              }}
            >
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
            </Box>
          </form>
        )}
      </Formik>
    </Box>
  );
};

export default Form;
