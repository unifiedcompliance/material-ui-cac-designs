import React from "react";
import styled from "styled-components/macro";
import {
  TextField as MuiTextField,
  Button as MuiButton,
  Grid,
} from "@material-ui/core";

import { spacing } from "@material-ui/system";

const TextField = styled(MuiTextField)(spacing);

const Button = styled(MuiButton)(spacing);

const Survey = () => {
  return (
    <>
      <Grid container spacing={3}>
        <Grid item xs={6} sm={6}>
          <TextField
            type="text"
            name="organ_character_index"
            label="Organizational Character Index"
            fullWidth
            my={2}
          />
        </Grid>
        <Grid item xs={6} sm={6}>
          <Button mr={2} mt={5} variant="contained">
            Click for Survey
          </Button>
        </Grid>
      </Grid>
    </>
  );
};
export default Survey;
