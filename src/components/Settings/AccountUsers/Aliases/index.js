import React from "react";
import styled from "styled-components/macro";
import Typography from "@material-ui/core/Typography";
import SelectBox from "../../Select";
import AliasNameForm from "./AliasNameForm";

import {
  CardContent as MuiCardContent,
  Card as MuiCard,
  Checkbox,
  FormControlLabel,
  TextField as MuiTextField,
  Button as MuiButton,
  Grid,
  TextareaAutosize as MuiTextareaAutosize,
  Divider as MuiDivider,
} from "@material-ui/core";

import { spacing } from "@material-ui/system";

const Divider = styled(MuiDivider)(spacing);

const Button = styled(MuiButton)(spacing);

const DeleteButton = styled(MuiButton)`
  background-color: #f73378;
  color: #fff;
  margin-top: 1rem;
`;

const Aliases = () => {
  return (
    <Grid container spacing={6}>
      <Grid item xs={12} sm={12}>
        <AliasNameForm />
        <AliasNameForm newForm={true} />
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

export default Aliases;
