import React from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import styled from "styled-components/macro";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import * as Yup from "yup";
import { Formik } from "formik";
import { signUp } from "../../redux/actions/authActions";
import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';

import {
  Grid,
  Button,
  Paper,
  TextField as MuiTextField,
  Container as MuiContainer,
  Typography,
  Divider,
} from "@material-ui/core";
import { spacing } from "@material-ui/system";
import { Alert as MuiAlert } from "@material-ui/lab";
import Step1 from "../../components/Auth/SignUp/Step1"
import Step2 from "../../components/Auth/SignUp/Step2"
import Step3 from "../../components/Auth/SignUp/Step3"

const Alert = styled(MuiAlert)(spacing);

const Wrapper = styled(Paper)`
  margin: 20px auto;
  box-shadow: rgb(0 0 0 / 20%) 0px 3px 3px -2px, rgb(0 0 0 / 14%) 0px 3px 4px 0px, rgb(0 0 0 / 12%) 0px 1px 8px 0px;
  max-width: 800px
`;

const Container = styled(MuiContainer)`
  max-width: 600px;
  padding: 40px 0;
`

const Title = styled(Typography)`
  border-bottom: 1px solid ${ props => props.theme.header.color };
  padding: 5px 20px;
`

function getSteps() {
  return ['Create Login', 'RapidAPI Key', 'Account Info'];
}

function SignUp() {
  const dispatch = useDispatch();
  const history = useHistory();
  const formRef = React.useRef();

  const [activeStep, setActiveStep] = React.useState(0);
  const steps = getSteps();

  const [isExistingDomain, setIsExistingDomain] = React.useState(false);

  const handleNext = () => {
    console.log(formRef.current.values.email);
    if (formRef.current.values.email.includes("gmail.com") && getPrimaryButtonLabel() === "Next" && activeStep === 0) {
      setIsExistingDomain(true)      
    }
    else {
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
    }
  };

  const handleBack = () => {
    if (activeStep === 0) {
      setIsExistingDomain(false)
    }
    else {
      setActiveStep((prevActiveStep) => prevActiveStep - 1);
    }
  };

  const handleReset = () => {
    setActiveStep(0);
  };
  
  const getPrimaryButtonLabel = () => {
    if (activeStep === 0 && isExistingDomain) {
      return "Continue";
    }
    else if (activeStep === steps.length - 1) {
      return "Finish";
    }
    else {
      return "Next";
    }
  }

  return (
    <Wrapper>
      <Title component="h2" variant="h6">
        Sign Up
      </Title>
      <Container>
        <Helmet title="Sign Up" />

        <Typography component="h1" variant="h2" align="center" gutterBottom>
          Sign Up
        </Typography>
        <Typography component="h2" variant="body1" align="center">
          Have an account? Sign In
        </Typography>

        <Stepper activeStep={activeStep} alternativeLabel>
          {steps.map((label) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>

        <Formik
          initialValues={{
            first_name: "",
            last_name: "",
            email: "aaron@gmail.com",
            password: "",
            confirmPassword: "",
            submit: false,
            rapid_api_key: "",
          }}
          innerRef={formRef}
          validationSchema={Yup.object().shape({
            first_name: Yup.string().max(255).required("First Name is required"),
            last_name: Yup.string().max(255).required("Last Name is required"),
            email: Yup.string()
              .email("Must be a valid email")
              .max(255)
              .required("Email is required"),
            password: Yup.string()
              .min(12, "Must be at least 12 characters")
              .max(255)
              .required("Required"),
            confirmPassword: Yup.string().when("password", {
              is: (val) => (val && val.length > 0 ? true : false),
              then: Yup.string().oneOf(
                [Yup.ref("password")],
                "Both password need to be the same"
              ),
            }),
            rapid_api_key: Yup.string().max(255).required("RapidAPI Key is required"),
          })}
          onSubmit={async (values, { setErrors, setStatus, setSubmitting }) => {
            try {
              await dispatch(
                signUp({
                  first_name: "test",
                  last_name: "test",
                  email: values.email,
                  password: values.password,
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

              {activeStep === 0 &&
                <Step1
                  values={values}
                  handleChange={handleChange}
                  handleBlur={handleBlur}
                  touched={touched}
                  errors={errors}
                  isExistingDomain={isExistingDomain}
                />
              }

              {activeStep === 1 &&
                <Step2
                  values={values}
                  handleChange={handleChange}
                  handleBlur={handleBlur}
                  touched={touched}
                  errors={errors}
                />
              }

              {activeStep === 2 &&
                <Step3
                  values={values}
                  handleChange={handleChange}
                  handleBlur={handleBlur}
                  touched={touched}
                  errors={errors}
                  isExistingDomain={isExistingDomain}
                />
              }

              <Grid container alignItems="center" spacing={3}>
                <Grid item xs={6}></Grid>
                <Grid item xs={2}>
                  <Button
                    component={Link}
                    fullWidth
                    variant="contained"
                    to="/"
                  >
                    Cancel
                  </Button>
                </Grid>
                <Grid item xs={2}>
                  <Button
                    fullWidth
                    variant="contained"
                    color="primary"
                    disabled={activeStep === 0 && getPrimaryButtonLabel() !== "Continue"}
                    onClick={handleBack}
                  >
                    Back
                  </Button>
                </Grid>
                <Grid item xs={2}>
                  <Button
                    onClick={handleNext}
                    fullWidth
                    variant="contained"
                    color="primary"
                  >
                    { getPrimaryButtonLabel() }
                  </Button>
                </Grid>
              </Grid>
            </form>
          )}
        </Formik>
      </Container>
    </Wrapper>
  );
}

export default SignUp;
