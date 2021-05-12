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

const Step2 = ({
    errors,
    handleBlur,
    handleChange,
    touched,
    values,
    isExistingDomain,
}) => {
    return (
        <StepContainer>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <Typography component="h2" variant="body1">
                        We derived your domain from your email address.
                        The Compliance as Code project ties all organizations to their officially sanctioned domains.
                        <br/>
                        { isExistingDomain
                            ? "In your case, we found an existing domamin"
                            : "In your case, your domain is unique and will be added to our list of organizations."
                        }
                    </Typography>
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        type="text"
                        name="corporate_domain"
                        label="Corporate Domain"
                        value={values.corporate_domain}
                        error={Boolean(touched.corporate_domain && errors.corporate_domain)}
                        fullWidth
                        helperText={touched.corporate_domain && errors.corporate_domain}
                        onBlur={handleBlur}
                        onChange={handleChange}
                        my={3}
                    />
                </Grid>
                <Grid item xs={12}>
                    <Typography component="h2" variant="body1">
                        { isExistingDomain
                            ? "The organization name for this domain is:"
                            : "Please give us a name for this organization."
                        }                        
                    </Typography>
                </Grid>
                { !isExistingDomain
                    ? (
                        <Grid item xs={12}>
                            <TextField
                                type="text"
                                name="organization_name"
                                label="Organization Name"
                                value={values.organization_name}
                                error={Boolean(touched.organization_name && errors.organization_name)}
                                fullWidth
                                helperText={touched.organization_name && errors.organization_name}
                                onBlur={handleBlur}
                                onChange={handleChange}
                                my={3}
                            />
                        </Grid>
                    )
                    : (
                        <>
                            <Grid item xs={10}>
                                <TextField
                                    type="text"
                                    name="organization_name"
                                    label="Organization Name"
                                    value={values.organization_name}
                                    error={Boolean(touched.organization_name && errors.organization_name)}
                                    fullWidth
                                    helperText={touched.organization_name && errors.organization_name}
                                    onBlur={handleBlur}
                                    onChange={handleChange}
                                    my={3}
                                />
                            </Grid>
                            <Grid item xs={2}>
                                <TextField
                                    type="text"
                                    name="organization_id"
                                    label="ID"
                                    value={values.organization_id}
                                    error={Boolean(touched.organization_id && errors.organization_id)}
                                    fullWidth
                                    helperText={touched.organization_id && errors.organization_id}
                                    onBlur={handleBlur}
                                    onChange={handleChange}
                                    my={3}
                                />
                            </Grid>
                        </>
                    )
                }
                <Grid item xs={12}>
                    <Typography component="h2" variant="body1">
                        Your account will be assigned to the organization above.<br/>
                        Please create a name for this account.
                    </Typography>
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        type="text"
                        name="account_name"
                        label="Account Name"
                        value={values.account_name}
                        error={Boolean(touched.account_name && errors.account_name)}
                        fullWidth
                        helperText={touched.account_name && errors.account_name}
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