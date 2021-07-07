import React from "react";
import styled from "styled-components/macro";
import {
  CardContent as MuiCardContent,
  Card as MuiCard,
  TextField as MuiTextField,
  Button as MuiButton,
  Grid as MuiGrid,
  FormControlLabel,
  Checkbox,
  Typography,
} from "@material-ui/core";

import { spacing } from "@material-ui/system";
import SelectBox from "../../../Common/Select";

const TextField = styled(MuiTextField)(spacing);

const DeleteButton = styled(MuiButton)`
  background-color: #f73378;
  color: #fff;
  margin-bottom: 7px;
`;

const Card = styled(MuiCard)`
  border: 1px solid #ccc;
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

const Grid = styled(MuiGrid)`
  display: flex;
  align-items: flex-end;
  justify-content: center;
`;

const INITIATIVES = [
  {
    label: "Initiative 1",
    value: "initiative-1",
  },
  {
    label: "Initiative 2",
    value: "initiative-2",
  },
  {
    label: "Initiative 3",
    value: "initiative-3",
  },
];

const CardContent = styled(MuiCardContent)(spacing);

const InitiativeForm = ({ newForm = false }) => {
  return (
    <Card>
      <Typography variant="h6" gutterBottom className="card-label">
        Initiative
      </Typography>
      <CardContent>
        <Grid container spacing={3}>
          <Grid item xs={11} sm={11}>
            <SelectBox name="Initiative Name" options={INITIATIVES} />
          </Grid>
          <Grid item xs={1} sm={1}>
            <DeleteButton disabled={newForm}>Del</DeleteButton>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default InitiativeForm;
