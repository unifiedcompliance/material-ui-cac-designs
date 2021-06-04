import React from "react";
import styled from "styled-components/macro";

import {
  CardContent as MuiCardContent,
  Card as MuiCard,
  TextField as MuiTextField,
  Button as MuiButton,
  Grid,
  Typography,
} from "@material-ui/core";

import { spacing } from "@material-ui/system";

const TextField = styled(MuiTextField)(spacing);

const DeleteButton = styled(MuiButton)`
  background-color: #f73378;
  color: #fff;
  margin-top: 1rem;
`;

const Card = styled(MuiCard)`
  box-shadow: 1px 1px 10px #ccc;
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

const CardContent = styled(MuiCardContent)(spacing);

const NameForm = ({ newForm = false }) => {
  return (
    <Card>
      <Typography variant="h6" gutterBottom className="card-label">
        Name
      </Typography>
      <CardContent>
        <Grid container spacing={3}>
          <Grid item xs={3} sm={2}>
            <TextField
              type="text"
              name="account_name"
              label="Prefix"
              fullWidth
              my={2}
            />
          </Grid>
          <Grid item xs={4} sm={4}>
            <TextField
              type="text"
              name="account_name"
              label="Full Prefix"
              fullWidth
              my={2}
            />
          </Grid>
          <Grid item xs={4} sm={4}>
            <TextField
              type="text"
              name="account_name"
              label="First Name"
              fullWidth
              my={2}
            />
          </Grid>
          <Grid item xs={1} sm={1}>
            <TextField
              type="text"
              name="account_name"
              label="MI"
              fullWidth
              my={2}
            />
          </Grid>
          <Grid item xs={1} sm={1}></Grid>
          <Grid item xs={4} sm={4}>
            <TextField
              type="text"
              name="account_name"
              label="Last Name"
              fullWidth
              my={2}
            />
          </Grid>
          <Grid item xs={2} sm={2}>
            <TextField
              type="text"
              name="account_name"
              label="Suffix"
              fullWidth
              my={2}
            />
          </Grid>
          <Grid item xs={4} sm={4}>
            <TextField
              type="text"
              name="account_name"
              label="Full Suffix"
              fullWidth
              my={2}
            />
          </Grid>
          <Grid item xs={1} sm={1}>
            <TextField
              type="text"
              name="account_name"
              label="Primary"
              fullWidth
              my={2}
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

export default NameForm;
