import React from "react";
import styled from "styled-components/macro";
import Typography from "@material-ui/core/Typography";

import {
  CardContent as MuiCardContent,
  Card as MuiCard,
  TextField as MuiTextField,
  Button as MuiButton,
  Grid,
  Box as MuiBox,
  TextareaAutosize as MuiTextareaAutosize,
} from "@material-ui/core";

import { spacing } from "@material-ui/system";

import Survey from "./Survey";

const Box = styled(MuiBox)`
  box-shadow: 1px 1px 10px #ccc;
`;

const TextField = styled(MuiTextField)(spacing);

const Button = styled(MuiButton)(spacing);

const DeleteButton = styled(MuiButton)`
  background-color: #f73378;
  color: #fff;
  margin-top: 1rem;
  margin-left: 0.5rem;
`;

const Card = styled(MuiCard)`
  box-shadow: 1px 1px 10px #ccc;
  border-radius: 0;
  padding: 10px;
  margin: 2rem 0 1rem 0;
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

const TextareaAutosize = styled(MuiTextareaAutosize)`
  width: 100%;
`;

const CharacterImg = styled.img`
  width: 100%;
`;

const CardContent = styled(MuiCardContent)(spacing);

const CharacterWidget = ({ title }) => {
  return (
    <Card>
      <Typography variant="h6" gutterBottom className="card-label">
        {title}
      </Typography>
      <CardContent>
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
      </CardContent>
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
