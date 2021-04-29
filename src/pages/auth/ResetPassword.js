import React from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import styled from "styled-components/macro";
import { Helmet } from "react-helmet";
import * as Yup from "yup";
import { Formik } from "formik";
import { resetPassword } from "../../redux/actions/authActions";

import {
  Button,
  Paper,
  TextField as MuiTextField,
  Typography,
  Container as MuiContainer,
} from "@material-ui/core";
import { spacing } from "@material-ui/system";
import { Alert as MuiAlert } from "@material-ui/lab";

const Alert = styled(MuiAlert)(spacing);

const TextField = styled(MuiTextField)(spacing);

const Wrapper = styled(Paper)`
  margin: 20px auto;
  box-shadow: rgb(0 0 0 / 20%) 0px 3px 3px -2px, rgb(0 0 0 / 14%) 0px 3px 4px 0px, rgb(0 0 0 / 12%) 0px 1px 8px 0px;
  max-width: 600px
`;

const Container = styled(MuiContainer)`
  max-width: 400px;
  padding: 80px 0;
`

const Title = styled(Typography)`
  border-bottom: 1px solid ${ props => props.theme.header.color };
  padding: 5px 20px;
`

function ResetPassword() {
  const dispatch = useDispatch();
  const history = useHistory();

  return (
    <Wrapper>
      <Title component="h2" variant="h6">
        Password Recovery
      </Title>
      <Container>
        <Helmet title="Reset Password" />

        <Typography component="h1" variant="h2" align="center" gutterBottom>
          Password Recovery
        </Typography>
        <Typography component="h2" variant="body1" align="center">
        Please provide your email so that we can send you a reset link.
        </Typography>

        <Formik
          initialValues={{
            email: "",
            submit: false,
          }}
          validationSchema={Yup.object().shape({
            email: Yup.string()
              .email("Must be a valid email")
              .max(255)
              .required("Email is required"),
          })}
          onSubmit={async (values, { setErrors, setStatus, setSubmitting }) => {
            try {
              await dispatch(
                resetPassword({
                  email: values.email,
                })
              );
              history.push("/auth/sign-in");
            } catch (error) {
              const message = error.message || "Something went wrong";

              setStatus({ success: false });
              setErrors({ submit: message });
              setSubmitting(false);
            }
          }}
        >
          {({
            errors,
            handleBlur,
            handleChange,
            handleSubmit,
            isSubmitting,
            touched,
            values,
          }) => (
            <form noValidate onSubmit={handleSubmit}>
              {errors.submit && (
                <Alert mt={2} mb={1} severity="warning">
                  {errors.submit}
                </Alert>
              )}
              <TextField
                type="email"
                name="email"
                label="Email Address"
                value={values.email}
                error={Boolean(touched.email && errors.email)}
                fullWidth
                helperText={touched.email && errors.email}
                onBlur={handleBlur}
                onChange={handleChange}
                my={3}
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                disabled={isSubmitting}
              >
                Reset password
              </Button>
            </form>
          )}
        </Formik>
      </Container>
    </Wrapper>
  );
}

export default ResetPassword;
