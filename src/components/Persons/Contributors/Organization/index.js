import React from "react";
import styled from "styled-components/macro";

import {
  Button as MuiButton,
  Grid,
} from "@material-ui/core";

import { spacing } from "@material-ui/system";
import Card from "../../../Common/card";
import GroupForm from "./GroupForm";
import InitiativeForm from "./InitiativeForm";

const Button = styled(MuiButton)(spacing);

const Organizations = () => {
  return (
    <Grid container spacing={6}>
      <Grid item xs={12} sm={12}>
        <Card>
          <GroupForm />
          <GroupForm newForm={true} cardMargin="2rem" />
        </Card>
        <Card>
          <InitiativeForm />
          <InitiativeForm newForm={true} cardMargin="2rem" />
        </Card>
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

export default Organizations;
