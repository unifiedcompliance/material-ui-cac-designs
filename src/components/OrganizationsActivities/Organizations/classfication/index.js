import React from "react";
import styled from "styled-components/macro";
import Typography from "@material-ui/core/Typography";

import Card from "../../../Common/card";
import TagsTable from "./TagsTable";
import {
  TextField as MuiTextField,
  Button as MuiButton,
  Grid,
  TextareaAutosize as MuiTextareaAutosize,
  Divider,
} from "@material-ui/core";

import { spacing } from "@material-ui/system";

const TextField = styled(MuiTextField)(spacing);

const Button = styled(MuiButton)(spacing);

const CustomDivider = styled(Divider)`
  margin-top: 2rem;
`;

const TextareaAutosize = styled(MuiTextareaAutosize)`
  width: 100%;
`;
const Classfication = () => {
  return (
    <Grid container spacing={6}>
      <Grid item xs={12} sm={6}>
        <Card title="Account Information">
          <TextField
            type="text"
            name="industry_name"
            label="Industry"
            fullWidth
            my={2}
          />
          <TextField
            type="text"
            name="industry_group"
            label="Industry Group"
            fullWidth
            my={2}
          />

          <CustomDivider />
          <TextField
            type="text"
            name="naica_code"
            label="NAICA Code"
            fullWidth
            my={2}
          />
          <TextField
            type="text"
            name="naica_sector"
            label="NAICA Sector"
            fullWidth
            my={2}
          />
          <CustomDivider />
          <TextField
            type="text"
            name="sic_code"
            label="SIC Code"
            fullWidth
            my={2}
          />
          <TextField
            type="text"
            name="sic_sub_indistry"
            label="SIC Sub Industory"
            fullWidth
            my={2}
          />
          <CustomDivider />
          <TextField
            type="text"
            name="unspsc_code"
            label="UNSPSC Code"
            fullWidth
            my={2}
          />
        </Card>
      </Grid>
      <Grid item xs={12} sm={6}>
        <TagsTable />
        <Typography variant="h6" gutterBottom style={{ fontWeight: "bold", marginTop: '2rem' }}>
          Description
        </Typography>
        <TextareaAutosize aria-label="minimum height" rowsMin={10} />
        <Grid item xs={12} sm={12} style={{ float: "right" }}>
          <TextField
            type="text"
            name="unspsc_code"
            label="Foundation in the year"
            my={3}
          />
        </Grid>
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

export default Classfication;
