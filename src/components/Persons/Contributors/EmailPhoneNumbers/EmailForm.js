import React from "react";
import styled from "styled-components/macro";

import {
  CardContent as MuiCardContent,
  Card as MuiCard,
  TextField as MuiTextField,
  Button as MuiButton,
  Grid as MuiGrid,
  FormControlLabel,
  Checkbox,
  Typography,
} from "@material-ui/core";

import { spacing } from "@material-ui/system";

const TextField = styled(MuiTextField)(spacing);

const DeleteButton = styled(MuiButton)`
  background-color: #f73378;
  color: #fff;
`;

const Card = styled(MuiCard)`
  border: 1px solid #ccc;
  border-radius: 0;
  padding: 10px;
  margin: 2rem 0 1rem 0;
  position: relative;
  overflow: visible;
  .card-label {
    position: absolute;
    top: -19px;
    background: #fff;
    box-shadow: 1px 1px 30px #fff;
    padding: 6px;
  }
`;

const Grid = styled(MuiGrid)`
  display: flex;
  align-items: flex-end;
  justify-content: center;
`;

const CardContent = styled(MuiCardContent)(spacing);

const EmailForm = ({ newForm = false }) => {
  return (
    <Card>
      <Typography variant="h6" gutterBottom className="card-label">
        Email Address
      </Typography>
      <CardContent>
        <Grid container spacing={3}>
          <Grid item xs={9} sm={9}>
            <TextField
              type="text"
              name="account_name"
              label="  "
              fullWidth
              my={2}
            />
          </Grid>
          <Grid item xs={2} sm={2}>
            <FormControlLabel
              control={<Checkbox name="checkedB" color="primary" />}
              label="Primary"
            />
          </Grid>
          <Grid item xs={1} sm={1}>
            <DeleteButton disabled={newForm}>Del</DeleteButton>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default EmailForm;
