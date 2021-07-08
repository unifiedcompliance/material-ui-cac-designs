import React from "react";
import styled from "styled-components/macro";
import Typography from "@material-ui/core/Typography";
import NameForm from "./NameForm";

import { Button as MuiButton, Grid } from "@material-ui/core";

import { spacing } from "@material-ui/system";

const Button = styled(MuiButton)(spacing);

const Names = () => {
  return (
    <Grid container spacing={6}>
      <Grid item xs={12} sm={12}>
        <NameForm />
        <NameForm newForm={true} cardMargin="2rem" />
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

export default Names;
