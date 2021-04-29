import React from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import styled from "styled-components/macro";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import * as Yup from "yup";
import { Formik } from "formik";
import { signIn } from "../../redux/actions/authActions";

import {
  Grid,
  Checkbox,
  FormControlLabel,
  Button,
  Paper,
  TextField as MuiTextField,
  Typography,
  Container as MuiContainer,
  Divider,
} from "@material-ui/core";
import { spacing } from "@material-ui/system";
import { Alert as MuiAlert } from "@material-ui/lab";

const Alert = styled(MuiAlert)(spacing);

const TextField = styled(MuiTextField)(spacing);

const Wrapper = styled(Paper)`
  margin: 20px auto;
  box-shadow: rgb(0 0 0 / 20%) 0px 3px 3px -2px, rgb(0 0 0 / 14%) 0px 3px 4px 0px, rgb(0 0 0 / 12%) 0px 1px 8px 0px;
  max-width: 800px
`;

const Container = styled(MuiContainer)`
  max-width: 600px;
  padding: 80px 0;
`

const Title = styled(Typography)`
  border-bottom: 1px solid ${ props => props.theme.header.color };
  padding: 5px 20px;
`

function SignIn() {
  const dispatch = useDispatch();
  const history = useHistory();

  return (
    <Wrapper>
      <Title component="h2" variant="h6">
        Log In
      </Title>
      <Container>
        <Helmet title="Sign In" />

        <Typography component="h1" variant="h2" align="center" gutterBottom>
          Log In
        </Typography>
        <Typography component="h2" variant="body1" align="center">
          or create an account
        </Typography>

        <Formik
          initialValues={{
            email: "demo@bootlab.io",
            password: "unsafepassword",
            submit: false,
          }}
          validationSchema={Yup.object().shape({
            email: Yup.string()
              .email("Must be a valid email")
              .max(255)
              .required("Email is required"),
            password: Yup.string().max(255).required("Password is required"),
          })}
          onSubmit={async (values, { setErrors, setStatus, setSubmitting }) => {
            try {
              await dispatch(
                signIn({ email: values.email, password: values.password })
              );
              history.push("/private");
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
              <Alert mt={3} mb={1} severity="info">
                Use <strong>demo@bootlab.io</strong> and{" "}
                <strong>unsafepassword</strong> to sign in
              </Alert>
              {errors.submit && (
                <Alert mt={2} mb={1} severity="warning">
                  {errors.submit}
                </Alert>
              )}
              <TextField
                type="email"
                name="email"
                label="Corporate Email Address"
                value={values.email}
                error={Boolean(touched.email && errors.email)}
                fullWidth
                helperText={touched.email && errors.email}
                onBlur={handleBlur}
                onChange={handleChange}
                my={2}
              />
              <TextField
                type="password"
                name="password"
                label="Password"
                value={values.password}
                error={Boolean(touched.password && errors.password)}
                fullWidth
                helperText={touched.password && errors.password}
                onBlur={handleBlur}
                onChange={handleChange}
                my={2}
              />
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              />
              <Grid container spacing={3}>
                <Grid item xs={5}>
                  <Button
                    component={Link}
                    to="/"
                    variant="contained"
                    fullWidth
                  >
                    Cancel
                  </Button>
                </Grid>
                <Grid item xs={2}></Grid>
                <Grid item xs={5}>
                  <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    fullWidth
                    disabled={isSubmitting}
                  >
                    Sign in
                  </Button>
                </Grid>
                <Grid item xs={12}>
                  <Button
                    component={Link}
                    to="/auth/reset-password"
                    fullWidth
                    color="primary"
                  >
                    Forgot password
                  </Button>
                </Grid>
              </Grid>
            </form>
          )}
        </Formik>
        <Grid container alignItems="center" spacing={3}>
          <Grid item xs={5}><Divider /></Grid>
          <Grid item xs={2} style={{textAlign: "center"}}>Or</Grid>
          <Grid item xs={5}><Divider /></Grid>
          <Grid item xs={12} style={{textAlign: "center"}}>
            <Button
              component={Link}
              to="#"
              variant="outlined"
              color="primary"
            >
              Continue with auth0 provider a
            </Button>
          </Grid>
        </Grid>
      </Container>
    </Wrapper>
  );
}

export default SignIn;
