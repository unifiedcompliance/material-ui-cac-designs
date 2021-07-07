import React from "react";
import styled from "styled-components/macro";

import {
  TextField as MuiTextField,
  Button as MuiButton,
  Grid,
} from "@material-ui/core";

import { spacing } from "@material-ui/system";
import CustomCard from "../../../Common/card";

const TextField = styled(MuiTextField)(spacing);

const DeleteButton = styled(MuiButton)`
  background-color: #f73378;
  color: #fff;
  margin-top: 1rem;
`;

const AliasNameForm = ({ newForm = false, cardMargin }) => {
  return (
    <CustomCard title="Name Alias" minHeight="0px" cardMargin={cardMargin}>
      <Grid container spacing={3}>
        <Grid item xs={8} sm={8}>
          <TextField
            type="text"
            name="account_name"
            label="  "
            fullWidth
            my={2}
          />
        </Grid>
        <Grid item xs={3} sm={3}>
          <TextField
            type="text"
            name="account_name"
            label="Type"
            fullWidth
            my={2}
          />
        </Grid>
        <Grid item xs={1} sm={1}>
          <DeleteButton disabled={newForm}>Del</DeleteButton>
        </Grid>
      </Grid>
    </CustomCard>
  );
};

export default AliasNameForm;
