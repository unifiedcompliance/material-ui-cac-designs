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

const ROLES = [
  {
    label: "Role 1",
    value: "role-1",
  },
  {
    label: "Role 2",
    value: "role-2",
  },
  {
    label: "Role 3",
    value: "role-3",
  },
];

const CardContent = styled(MuiCardContent)(spacing);

const RoleForm = ({ newForm = false }) => {
  return (
    <Card>
      <Typography variant="h6" gutterBottom className="card-label">
        Role
      </Typography>
      <CardContent>
        <Grid container spacing={3}>
          <Grid item xs={11} sm={11}>
            <SelectBox name="Role" options={ROLES} />
          </Grid>
          <Grid item xs={1} sm={1}>
            <DeleteButton disabled={newForm}>Del</DeleteButton>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default RoleForm;
