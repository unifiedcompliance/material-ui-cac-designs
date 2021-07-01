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

const Card = styled(MuiCard)`
  box-shadow: 1px 1px 10px #ccc;
  border-radius: 0;
  padding: 10px;
  margin: 2rem 0 1rem 0;
  position: relative;
  overflow: visible;
  height: 95%;
  .card-label {
    position: absolute;
    top: -19px;
    background: #fff;
    box-shadow: 1px 1px 30px #fff;
    padding: 6px;
  }
`;

const CardContent = styled(MuiCardContent)(spacing);

const APIKeys = () => {
  return (
    <Card>
      <Typography variant="h6" gutterBottom className="card-label">
        API Keys
      </Typography>
      <CardContent>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={8}>
            <TextField
              type="text"
              name="account_name"
              label="RapidAPI Key"
              fullWidth
              my={2}
            />
          </Grid>
          <Grid item xs={12} sm={8}>
            <TextField
              type="text"
              name="account_name"
              label="CCH Key"
              fullWidth
              my={2}
            />
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default APIKeys;
