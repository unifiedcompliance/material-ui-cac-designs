import React from "react";
import styled from "styled-components/macro";
import Typography from "@material-ui/core/Typography";
import SelectBox from "../../../Common/Select";
import GroupForm from "./GroupForm";
import InitiativeForm from "./InitiativeForm";

import {
  CardContent as MuiCardContent,
  Card as MuiCard,
  Checkbox,
  FormControlLabel,
  TextField as MuiTextField,
  Button as MuiButton,
  Grid,
  TextareaAutosize as MuiTextareaAutosize,
  Divider as MuiDivider,
} from "@material-ui/core";

import { spacing } from "@material-ui/system";

const Divider = styled(MuiDivider)(spacing);

const Button = styled(MuiButton)(spacing);

const Card = styled(MuiCard)`
  box-shadow: 1px 1px 10px #ccc;
  border-radius: 0;
  padding: 10px;
  margin: 2rem 0 1rem 0;
  position: relative;
  overflow: visible;
`;

const CardContent = styled(MuiCardContent)(spacing);

const TeamsRoles = () => {
  return (
    <Grid container spacing={6}>
      <Grid item xs={12} sm={12}>
        <Card>
          <CardContent>
            <GroupForm />
            <GroupForm newForm={true} />
          </CardContent>
        </Card>
        <Card>
          <CardContent>
            <InitiativeForm />
            <InitiativeForm newForm={true} />
          </CardContent>
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
