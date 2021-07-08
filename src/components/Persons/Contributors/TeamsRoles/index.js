import React from "react";
import styled from "styled-components/macro";

import { Button as MuiButton, Grid } from "@material-ui/core";

import { spacing } from "@material-ui/system";
import Card from "../../../Common/card";
import TeamForm from "./TeamForm";
import RoleForm from "./RoleForm";

const Button = styled(MuiButton)(spacing);

const TeamsRoles = () => {
  return (
    <Grid container spacing={6}>
      <Grid item xs={12} sm={12}>
        <Card>
          <TeamForm />
          <TeamForm newForm={true} />
        </Card>
        <Card cardMargin="2rem">
          <RoleForm />
          <RoleForm newForm={true} />
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

export default TeamsRoles;
