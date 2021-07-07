import React from "react";
import styled from "styled-components/macro";
import {
  TextField as MuiTextField,
  Button as MuiButton,
  Grid,
  Box as MuiBox,
} from "@material-ui/core";

import { spacing } from "@material-ui/system";
import Card from "../../../Common/card";
import Survey from "./survey";

const Box = styled(MuiBox)`
  box-shadow: 1px 1px 10px #ccc;
`;

const TextField = styled(MuiTextField)(spacing);

const Button = styled(MuiButton)(spacing);

const CharacterImg = styled.img`
  width: 100%;
`;

const CharacterWidget = ({ title }) => {
  return (
    <Card title={title}>
      <Grid container spacing={6}>
        <Grid item xs={3} sm={3}>
          <TextField
            type="text"
            name="account_name"
            label="4"
            fullWidth
            my={2}
          />
        </Grid>
        <Grid item xs={9} sm={9}>
          <TextField
            type="text"
            name="account_name"
            label="Formal Departmentalizatio"
            fullWidth
            my={2}
          />
        </Grid>
        <Grid item xs={12} sm={12}>
          <Box>
            <CharacterImg src="/static/img/characters/character.png" />
          </Box>
        </Grid>
      </Grid>
    </Card>
  );
};

const Character = () => {
  return (
    <Grid container spacing={6}>
      <Grid item xs={6} sm={6}>
        <CharacterWidget title="Departmentalization (1-10)" />
      </Grid>
      <Grid item xs={6} sm={6}>
        <CharacterWidget title="Span of Control (1-10)" />
      </Grid>
      <Grid item xs={6} sm={6}>
        <CharacterWidget title="Communications Formality (1-10)" />
      </Grid>
      <Grid item xs={6} sm={6}>
        <CharacterWidget title="Specialization (1-10)" />
      </Grid>
      <Grid item xs={6} sm={6}>
        <Survey />
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

export default Character;
