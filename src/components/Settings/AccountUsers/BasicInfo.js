import React from "react";
import styled from "styled-components/macro";
import Typography from "@material-ui/core/Typography";
import SelectBox from "../../Common/Select";
import Survey from "../Survey";

import {
  CardContent as MuiCardContent,
  Card as MuiCard,
  Checkbox,
  FormControlLabel,
  TextField as MuiTextField,
  Button as MuiButton,
  Grid,
  TextareaAutosize as MuiTextareaAutosize,
  Divider,
} from "@material-ui/core";

import { spacing } from "@material-ui/system";

const TextField = styled(MuiTextField)(spacing);

const Button = styled(MuiButton)(spacing);

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
            Account Information
          </Typography>
          <CardContent style={{ textAlign: "right", minHeight: "180px" }}>
            <Grid container spacing={3}>
              <Grid item xs={4} sm={4}>
                <TextField
                  type="text"
                  name="account_name"
                  label="Prefix"
                  fullWidth
                  my={2}
                />
              </Grid>
              <Grid item xs={8} sm={8}>
                <TextField
                  type="text"
                  name="account_name"
                  label="Full Prefix"
                  fullWidth
                  my={2}
                />
              </Grid>
              <Grid item xs={10} sm={10}>
                <TextField
                  type="text"
                  name="account_name"
                  label="First Name"
                  required
                  fullWidth
                  my={2}
                />
              </Grid>
              <Grid item xs={2} sm={2}>
                <TextField
                  type="text"
                  name="account_name"
                  label="MI"
                  fullWidth
                  my={2}
                />
              </Grid>
              <Grid item xs={10} sm={10}>
                <TextField
                  type="text"
                  name="account_name"
                  label="Last Name"
                  required
                  fullWidth
                  my={2}
                />
              </Grid>
              <Grid item xs={2} sm={2}></Grid>
              <Grid item xs={4} sm={4}>
                <TextField
                  type="text"
                  name="account_name"
                  label="Suffix"
                  fullWidth
                  my={2}
                />
              </Grid>
              <Grid item xs={8} sm={8}>
                <TextField
                  type="text"
                  name="account_name"
                  label="Full Suffix"
                  fullWidth
                  my={2}
                />
              </Grid>
              <Grid item xs={12} sm={12}>
                <Divider />
              </Grid>
              <Grid item xs={12} sm={12}>
                <TextField
                  type="text"
                  name="account_name"
                  label="Email Address"
                  required
                  fullWidth
                  my={2}
                />
              </Grid>
              <Grid item xs={12} sm={12}>
                <TextField
                  type="text"
                  name="account_name"
                  label="LinkedIn Address"
                  fullWidth
                  my={2}
                />
              </Grid>
              <Grid item xs={12} sm={12}>
                <TextField
                  type="text"
                  name="account_name"
                  label="Twitter Address"
                  fullWidth
                  my={2}
                />
              </Grid>
              <Grid item xs={12} sm={12}>
                <TextField
                  type="text"
                  name="account_name"
                  label="Facebook Address"
                  fullWidth
                  my={2}
                />
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={6} sm={6}>
        <Card>
          <Typography variant="h6" gutterBottom className="card-label">
            Core MetaData
          </Typography>
          <CardContent>
            <Grid container spacing={3}>
              <Grid item xs={6} sm={3}>
                <TextField type="text" name="account_name" label="ID" my={2} />
              </Grid>
              <Grid item xs={6} sm={3}>
                <TextField
                  type="text"
                  name="account_name"
                  label="Chksm"
                  my={2}
                />
              </Grid>
              <Grid item xs={6} sm={3}>
                <TextField
                  type="text"
                  name="account_name"
                  label="Created ID"
                  my={2}
                />
              </Grid>
              <Grid item xs={6} sm={3}>
                <TextField
                  type="text"
                  name="account_name"
                  label="Date Created"
                  my={2}
                />
              </Grid>
              <Grid item xs={6} sm={3}>
                <TextField
                  type="text"
                  name="account_name"
                  label="Live"
                  my={2}
                />
              </Grid>
              <Grid item xs={6} sm={3}>
                <TextField
                  type="text"
                  name="account_name"
                  label="Valid"
                  my={2}
                />
              </Grid>
              <Grid item xs={6} sm={3}>
                <TextField
                  type="text"
                  name="account_name"
                  label="Modified ID"
                  my={2}
                />
              </Grid>
              <Grid item xs={6} sm={3}>
                <TextField
                  type="text"
                  name="account_name"
                  label="Date Modified"
                  my={2}
                />
              </Grid>
            </Grid>
          </CardContent>
        </Card>
        <Card>
          <Typography variant="h6" gutterBottom className="card-label">
            Calculated Names
          </Typography>
          <CardContent>
            <Grid container spacing={3}>
              <Grid item xs={12} sm={12}>
                <TextField
                  type="text"
                  name="account_name"
                  label="Full Name"
                  fullWidth
                  my={2}
                />
              </Grid>
              <Grid item xs={12} sm={12}>
                <TextField
                  type="text"
                  name="account_name"
                  label="Standard System Name Calculation"
                  fullWidth
                  my={2}
                />
              </Grid>
              <Grid item xs={12} sm={12}>
                <TextField
                  type="text"
                  name="account_name"
                  label="Disambiguated System Name"
                  fullWidth
                  my={2}
                />
              </Grid>
            </Grid>
          </CardContent>
        </Card>
        <Card>
          <Typography variant="h6" gutterBottom className="card-label">
            Calculated Names
          </Typography>
          <CardContent>
            <Grid container spacing={3}>
              <Grid item xs={12} sm={4}>
                <FormControlLabel
                  control={<Checkbox name="checkedB" color="primary" />}
                  label="Admin"
                />
              </Grid>
              <Grid item xs={12} sm={4}>
                <FormControlLabel
                  control={<Checkbox name="checkedB" color="primary" />}
                  label="Billing Contact"
                />
              </Grid>
              <Grid item xs={12} sm={4}>
                <FormControlLabel
                  control={<Checkbox name="checkedB" color="primary" />}
                  label="Contributor"
                />
              </Grid>
            </Grid>
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

export default BasicInfo;
