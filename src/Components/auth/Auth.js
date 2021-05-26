import React from "react";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router";
import {
  loginOperations,
  registerOperations,
} from "../../redux/auth/authOperations";
import { Formik, Form } from "formik";
import { Schema } from "./Validation";
import TextInput from "./TextInput";
import { AuthStyled } from "./AuthStyled";

const Auth = () => {
  const location = useLocation();
  const dispatch = useDispatch();

  return (
    <AuthStyled>
      <h1 className="titleRegistLogin">
        {location.pathname === "/registration" ? "Registeration" : "Login"}
      </h1>
      <Formik
        initialValues={{
          displayName: "",
          email: "",
          password: "",
        }}
        schema={Schema}
        onSubmit={(values) => {
          location.pathname === "/registration"
            ? dispatch(registerOperations(values))
            : dispatch(loginOperations(values));
        }}
      >
        {({ isSubmitting }) => (
          <Form className="form">
            {location.pathname === "/registration" ? (
              <>
                <TextInput
                  name="displayName"
                  type="displayName"
                  label="Name"
                  component="p"
                />
                <TextInput
                  name="email"
                  type="email"
                  label="Email"
                  component="p"
                />

                <TextInput
                  name="password"
                  type="password"
                  label="Password"
                  component="p"
                />
              </>
            ) : (
              <>
                <TextInput
                  name="email"
                  type="email"
                  label="Email"
                  component="p"
                />

                <TextInput
                  name="password"
                  type="password"
                  label="Password"
                  component="p"
                />
              </>
            )}

            <button type="submit" disabled={isSubmitting}>
              {location.pathname === "/registration" ? "register" : "login"}
            </button>
          </Form>
        )}
      </Formik>
    </AuthStyled>
  );
};

export default Auth;
