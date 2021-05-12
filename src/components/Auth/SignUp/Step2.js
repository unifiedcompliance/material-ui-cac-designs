import React from "react"
import styled from "styled-components/macro";
import { Link, NavLink } from "react-router-dom";
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
import StepContainer from "./StepContainer"

const TextField = styled(MuiTextField)(spacing);

const Container = styled(MuiContainer)`
  max-width: 600px;
  padding: 80px 0;
`

const Step2 = ({
    errors,
    handleBlur,
    handleChange,
    touched,
    values,
}) => {
    return (
        <StepContainer>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <Typography component="h2" variant="body1">
                        In order to use this system, you’ll need a license key from RapidAPI.com.
                        Please paste the key in below. If you don’t have one, you can obtain it <Link to={{  pathname: "https://rapidapi.com" }} target="_blank">[HERE]</Link>.
                    </Typography>
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        type="text"
                        name="rapid_api_key"
                        label="RapidAPI Key"
                        value={values.rapid_api_key}
                        error={Boolean(touched.rapid_api_key && errors.rapid_api_key)}
                        fullWidth
                        helperText={touched.rapid_api_key && errors.rapid_api_key}
                        onBlur={handleBlur}
                        onChange={handleChange}
                        my={3}
                    />
                </Grid>
            </Grid>
        </StepContainer>
    )
}

export default Step2