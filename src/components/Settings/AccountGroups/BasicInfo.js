import React from "react";
import styled from "styled-components/macro";
import Typography from "@material-ui/core/Typography";

import {
  CardContent as MuiCardContent,
  Card as MuiCard,
  TextField as MuiTextField,
  Button as MuiButton,
  Grid,
  TextareaAutosize as MuiTextareaAutosize,
} from "@material-ui/core";

import { spacing } from "@material-ui/system";

import SelectBox from "../../Common/Select";
import ListBox from "../../Common/List";
import AddressFormGroup from "../AddressFormGroup";

const ACCOUNT_GROUPS = [
  {
    label: "Parent Group",
    value: "PG",
  },
];

const TextField = styled(MuiTextField)(spacing);

const Button = styled(MuiButton)(spacing);

const DeleteButton = styled(MuiButton)`
  background-color: #f73378;
  color: #fff;
  margin-top: 1rem;
  margin-left: 0.5rem;
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

const TextareaAutosize = styled(MuiTextareaAutosize)`
  width: 100%;
`;

const CardContent = styled(MuiCardContent)(spacing);

const BasicInfo = () => {
  return (
    <Grid container spacing={6}>
      <Grid item xs={6} sm={6}>
        <Card>
          <Typography variant="h6" gutterBottom className="card-label">
            Group Identification
          </Typography>
          <CardContent style={{ minHeight: "330px" }}>
            <TextField
              type="text"
              name="account_name"
              label="Name"
              fullWidth
              my={2}
            />
            <p>Description</p>
            <TextareaAutosize aria-label="minimum height" rowsMin={10} />
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={6} sm={6}>
        <Card>
          <Typography variant="h6" gutterBottom className="card-label">
            Account Hierarchy
          </Typography>
          <CardContent style={{ minHeight: "330px" }}>
            <Grid container spacing={3}>
              <Grid item xs={9} sm={9} lg={9}>
                <SelectBox name="Parent Group" options={ACCOUNT_GROUPS} />
              </Grid>
              <Grid item xs={3} sm={3} lg={3}>
                <DeleteButton>Del</DeleteButton>
              </Grid>
              <Grid item>
                <p>
                  Click the *name* of one of the subsidiaries to navigate to
                  that record.
                </p>
                <ListBox
                  title="Sub Groups and Initiatives"
                  items={["Group A", " ", " ", " "]}
                  boxShadow={true}
                />
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12} sm={12}>
        <AddressFormGroup name="Address" noMargin={true} />
      </Grid>
      <Grid item xs={6} sm={6}>
        <TextField
          type="text"
          name="account_name"
          label="Telephone Number"
          fullWidth
          my={2}
        />
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

export default BasicInfo;
