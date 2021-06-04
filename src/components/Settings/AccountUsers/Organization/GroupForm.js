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
import SelectBox from "../../Select";

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

const GROUPS = [
  {
    label: "Group 1",
    value: "group-1",
  },
  {
    label: "Group 2",
    value: "group-2",
  },
  {
    label: "Group 3",
    value: "group-3",
  },
];

const CardContent = styled(MuiCardContent)(spacing);

const GroupForm = ({ newForm = false }) => {
  return (
    <Card>
      <Typography variant="h6" gutterBottom className="card-label">
        Group
      </Typography>
      <CardContent>
        <Grid container spacing={3}>
          <Grid item xs={11} sm={11}>
            <SelectBox name="Group" options={GROUPS} />
          </Grid>
          <Grid item xs={1} sm={1}>
            <DeleteButton disabled={newForm}>Del</DeleteButton>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default GroupForm;
