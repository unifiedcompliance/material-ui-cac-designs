import React from "react";
import styled from "styled-components/macro";
import Typography from "@material-ui/core/Typography";
import SelectBox from "./Select";
import { COUNTRIES } from "../../constants";

import {
  Card as MuiCard,
  CardContent as MuiCardContent,
  Grid as MuiGrid,
} from "@material-ui/core";

import { spacing } from "@material-ui/system";

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
  padding-right: 2rem;
`;
const CardContent = styled(MuiCardContent)(spacing);

const AddressFormGroup = ({ name, noMargin = false }) => {
  console.log(name, noMargin);
  return (
    <Card nomargin={noMargin.toString()}>
      <Typography variant="h6" gutterBottom className="card-label">
        {name}
      </Typography>
      <CardContent>
        <Grid container>
          <Grid item xs={6} sm={2}>
            <SelectBox name="Country" options={COUNTRIES} />
          </Grid>
          <Grid item xs={6} sm={2}>
            <SelectBox name="State" options={COUNTRIES} />
          </Grid>
          <Grid item xs={6} sm={5}>
            <SelectBox name="City" options={COUNTRIES} />
          </Grid>
          <Grid item xs={6} sm={3}>
            <SelectBox name="Postal Code" options={COUNTRIES} />
          </Grid>
          <Grid item xs={12} sm={6}>
            <SelectBox name="Address 1" options={COUNTRIES} />
          </Grid>
          <Grid item xs={12} sm={6}>
            <SelectBox name="Address 2" options={COUNTRIES} />
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default AddressFormGroup;
