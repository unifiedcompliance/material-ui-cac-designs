import React from "react";
import styled from "styled-components/macro";
import Typography from "@material-ui/core/Typography";
import SelectBox from "../../../Common/Select";
import { COUNTRIES } from "../../../../constants";

import {
  Card as MuiCard,
  CardContent as MuiCardContent,
  Grid as MuiGrid,
  TextField as MuiTextField,
  FormControlLabel,
  Checkbox,
  Button as MuiButton,
} from "@material-ui/core";

import { spacing } from "@material-ui/system";
const TextField = styled(MuiTextField)(spacing);
const Card = styled(MuiCard)`
  box-shadow: 1px 1px 10px #ccc;
  border-radius: 0;
  padding: 10px;
  ${(props) => (props.nomargin == "true" ? "margin: 0;" : "margin: 2rem;")}
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

const DeleteButton = styled(MuiButton)`
  background-color: #f73378;
  color: #fff;
  margin-bottom: 7px;
`;

const AddressFormGroup = ({ newForm }) => {
  return (
    <Card>
      <Typography variant="h6" gutterBottom className="card-label">
        Address
      </Typography>
      <CardContent>
        <Grid container spacing={3}>
          <Grid item xs={6} sm={2}>
            <SelectBox name="Country" options={COUNTRIES} />
          </Grid>
          <Grid item xs={6} sm={2}>
            <SelectBox name="State" options={COUNTRIES} />
          </Grid>
          <Grid item xs={6} sm={4}>
            <SelectBox name="City" options={COUNTRIES} />
          </Grid>
          <Grid item xs={6} sm={3}>
            <TextField
              type="text"
              name="account_name"
              label="Postal Code"
              fullWidth
              my={2}
            />
          </Grid>
          <Grid item xs={6} sm={1}>
            <FormControlLabel
              control={<Checkbox name="checkedB" color="primary" />}
              label="Primary"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              type="text"
              name="account_name"
              label="Address1"
              fullWidth
              my={2}
            />
          </Grid>
          <Grid item xs={12} sm={5}>
            <TextField
              type="text"
              name="account_name"
              label="Address2"
              fullWidth
              my={2}
            />
          </Grid>
          <Grid item xs={12} sm={1}>
            <DeleteButton disabled={newForm}>Del</DeleteButton>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default AddressFormGroup;
