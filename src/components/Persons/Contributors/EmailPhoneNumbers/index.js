import React from "react";
import styled from "styled-components/macro";

import { Button as MuiButton, Grid } from "@material-ui/core";

import { spacing } from "@material-ui/system";
import CustomCard from "../../../Common/card";
import EmailForm from "./EmailForm";
import PhoneNumberForm from "./PhoneNumberForm";

const Button = styled(MuiButton)(spacing);

const EmailPhoneNumbers = () => {
  return (
    <Grid container spacing={6}>
      <Grid item xs={12} sm={12}>
        <CustomCard>
          <EmailForm />
          <EmailForm newForm={true} />
        </CustomCard>
        <CustomCard cardMargin="2rem">
          <PhoneNumberForm />
          <PhoneNumberForm newForm={true} />
        </CustomCard>
      </Grid>
      <Grid item xs={12} sm={12} style={{ textAlign: "right" }}>
        <Button mr={2} variant="contained" color="primary">
          Save
        </Button>
        <Button mr={2} variant="contained">
          Cancel
        </Button>
      </Grid>
    </Grid>
  );
};

export default EmailPhoneNumbers;
