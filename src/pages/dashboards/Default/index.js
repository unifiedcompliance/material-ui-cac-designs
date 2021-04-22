import React from "react";
import styled from "styled-components/macro";

import { Helmet } from "react-helmet";

import {
  Container,
  Grid,
  Divider as MuiDivider,
  Typography as MuiTypography,
} from "@material-ui/core";

import { spacing } from "@material-ui/system";

import Wrapper from "../../../layouts/Wrapper";
import Actions from "./Actions";

const Divider = styled(MuiDivider)(spacing);

const Typography = styled(MuiTypography)(spacing);

function Default() {
  return (
    <Wrapper>
    <Container>
      <Helmet title="Default Dashboard" />
      <Grid justify="space-between" container spacing={6}>
        <Grid item>
          <Typography variant="h3" gutterBottom>
            Default Dashboard
          </Typography>
          <Typography variant="subtitle1">
            Welcome back, Lucy! We've missed you.{" "}
            <span role="img" aria-label="Waving Hand Sign">
              👋
            </span>
          </Typography>
        </Grid>

        <Grid item>
          <Actions />
        </Grid>
      </Grid>

      <Divider my={6} />

      </Container>
      </Wrapper>
  );
}

export default Default;
