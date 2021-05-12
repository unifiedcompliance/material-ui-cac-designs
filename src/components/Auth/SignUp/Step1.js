import React from "react"
import styled from "styled-components/macro";
import { Link } from "react-router-dom";
import {
    Grid,
    Button,
    Checkbox,
    FormControl,
    FormControlLabel,
    FormGroup,
    FormLabel,
    TextField as MuiTextField,
    Container as MuiContainer,
    Typography,
    Divider,
} from "@material-ui/core";
import { spacing } from "@material-ui/system";
import StepContainer from "./StepContainer"

const TextField = styled(MuiTextField)(spacing);

const Step1 = ({
    errors,
    handleBlur,
    handleChange,
    touched,
    values,
    isExistingDomain,
}) => {
    return (
        <StepContainer>
            { isExistingDomain
                ? <ExistingDomainForm
                    values={values}
                    handleChange={handleChange}
                    handleBlur={handleBlur}
                    touched={touched}
                    errors={errors}
                />
                : <NormalForm
                    values={values}
                    handleChange={handleChange}
                    handleBlur={handleBlur}
                    touched={touched}
                    errors={errors}
                />
            }
        </StepContainer>
    )
}

export default Step1

const ExistingDomainForm = ({
    errors,
    handleBlur,
    handleChange,
    touched,
    values,
    isExistingDomain,
}) => (
    <Grid container spacing={3}>
        <Typography component="h2" variant="body1">
            We use your organization’s domain to check to see if it already exists. And guess what - it <i>does!</i>
            <br/><br/>
            And your organization <i>might</i> even have multiple accounts. So check each of the boxes for the accounts you want to join and we will notify that account admin that you are waiting!
            <br/><br/>
            <strong>OR</strong> you can create your own account attached to the organization if you don’t want to join one of those above.
        </Typography>
        <FormGroup>
            <FormControlLabel
                control={
                    <Checkbox
                        checked={values.send_requests_to_all}
                        onChange={handleChange}
                        name="send_requests_to_all"
                    />
                }
                label="Send requests to all"
            />
            <FormControlLabel
                control={
                    <Checkbox
                        checked={values.account_a}
                        onChange={handleChange}
                        name="account_a"
                    />
                }
                label="Account A"
            />
            <FormControlLabel
                control={
                    <Checkbox
                        checked={values.account_b}
                        onChange={handleChange}
                        name="account_b"
                    />
                }
                label="Account B"
            />
            <FormControlLabel
                control={
                    <Checkbox
                        checked={values.account_c}
                        onChange={handleChange}
                        name="account_c"
                    />
                }
                label="Account C"
            />
            <FormControlLabel
                control={
                    <Checkbox
                        checked={values.create_new_account}
                        onChange={handleChange}
                        name="create_new_account"
                    />
                }
                label="I want to create a new account"
            />
        </FormGroup>
    </Grid>
)

const NormalForm = ({
    errors,
    handleBlur,
    handleChange,
    touched,
    values,
    isExistingDomain,
}) => (
    <Grid container spacing={3}>
        <Grid item xs={6}>
            <TextField
                type="text"
                name="first_name"
                label="First Name"
                value={values.first_name}
                error={Boolean(touched.first_name && errors.first_name)}
                fullWidth
                helperText={touched.first_name && errors.first_name}
                onBlur={handleBlur}
                onChange={handleChange}
                my={3}
            />
        </Grid>
        <Grid item xs={6}>
            <TextField
                type="text"
                name="last_name"
                label="Last Name"
                value={values.last_name}
                error={Boolean(touched.last_name && errors.last_name)}
                fullWidth
                helperText={touched.last_name && errors.last_name}
                onBlur={handleBlur}
                onChange={handleChange}
                my={3}
            />
        </Grid>
        <Grid item xs={12}>
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
                my={3}
            />
        </Grid>
        <Grid item xs={12}>
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
                my={3}
            />
        </Grid>
        <Grid item xs={12}>
            <TextField
                type="password"
                name="confirmPassword"
                label="Confirm Password"
                value={values.confirmPassword}
                error={Boolean(touched.confirmPassword && errors.confirmPassword)}
                fullWidth
                helperText={touched.confirmPassword && errors.confirmPassword}
                onBlur={handleBlur}
                onChange={handleChange}
                my={3}
            />
        </Grid>
        <Grid item xs={5}><Divider /></Grid>
        <Grid item xs={2} style={{textAlign: "center"}}>Or</Grid>
        <Grid item xs={5}><Divider /></Grid>
        <Grid item xs={12}>
            <Button
                component={Link}
                to="#"
                variant="outlined"
                color="primary"
            >
                Continue with auth0 provider a
            </Button>
        </Grid>
        <Grid item xs={12}>
            <Button
                component={Link}
                to="#"
                variant="outlined"
                color="primary"
            >
                Continue with auth0 provider b
            </Button>
        </Grid>
    </Grid>
)