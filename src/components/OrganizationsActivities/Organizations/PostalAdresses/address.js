import React from "react";
import styled from "styled-components/macro";
import {
  Grid,
  TextField as MuiTextField,
  Button as MuiButton,
} from "@material-ui/core";
import { spacing } from "@material-ui/system";
import Card from "../../../Common/card";
import SelectBox from "../../../Common/Select";

const TextField = styled(MuiTextField)(spacing);

const DeleteButton = styled(MuiButton)`
  background-color: #f73378;
  color: #fff;
  margin-top: 1rem;
`;

const Country = [
  {
    label: "",
    value: "",
  },
];

const Adresses = () => {
  return (
    <Card title="Address">
      <Grid container spacing={6}>
        <Grid item xs={12} sm={12}>
          <Grid container spacing={6}>
            <Grid item xs={12} sm={2}>
              <SelectBox name="Country" options={Country} />
            </Grid>
            <Grid item xs={12} sm={2}>
              <SelectBox name="State" options={Country} />
            </Grid>
            <Grid item xs={12} sm={4}>
              <SelectBox name="City" options={Country} />
            </Grid>
            <Grid item xs={12} sm={2}>
              <TextField
                type="text"
                name="postal_code"
                label="Postal Code"
                my={2}
                fullWidth
              />
            </Grid>
            <Grid item xs={12} sm={1}>
              <TextField
                type="text"
                name="primar"
                label="Primar"
                my={2}
                fullWidth
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} sm={12}>
          <Grid container spacing={6}>
            <Grid item xs={12} sm={5}>
              <TextField
                type="text"
                name="address1"
                label="Address1"
                my={2}
                fullWidth
              />
            </Grid>
            <Grid item xs={12} sm={5}>
              <TextField
                type="text"
                name="address2"
                label="Address2"
                my={2}
                fullWidth
              />
            </Grid>
            <Grid
              item
              xs={12}
              sm={2}
              style={{ display: "flex", justifyContent: "flex-end" }}
            >
              <DeleteButton>Del</DeleteButton>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Card>
  );
};

export default Adresses;
