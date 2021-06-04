import React from "react";
import styled from "styled-components/macro";
import { NavLink } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Helmet from "react-helmet";

import {
  Checkbox,
  Breadcrumbs as MuiBreadcrumbs,
  Button as MuiButton,
  Divider as MuiDivider,
  Fab as MuiFab,
  Paper as MuiPaper,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  TextField as MuiTextField,
  TableContainer,
  Grid,
  Typography as MuiTypography,
} from "@material-ui/core";

import { ArrowForward as ArrowForwardIcon } from "@material-ui/icons";

import { spacing } from "@material-ui/system";

const TextFieldSpacing = styled(MuiTextField)(spacing);

const TextField = styled(TextFieldSpacing)`
  width: 80%;
`;

const Typography = styled(MuiTypography)`
  margin-bottom: 1.5rem;
`;

const Button = styled(MuiButton)(spacing);

const Paper = styled(MuiPaper)(spacing);

const rows = [
  {
    name: "Dorian Cougias",
    email: "dcougias@microsoft.com",
    system_name: "dorian.cougias",
  },
  {
    name: "Dorian Cougias",
    email: "dcougias@microsoft.com",
    system_name: "dorian.cougias",
  },
  {
    name: "Dorian Cougias",
    email: "dcougias@microsoft.com",
    system_name: "dorian.cougias",
  },
  {
    name: "Dorian Cougias",
    email: "dcougias@microsoft.com",
    system_name: "dorian.cougias",
  },
];

const Members = () => {
  return (
    <Grid container>
      <Grid sm="12">
        <Typography variant="h6" gutterBottom>
          Click the *name* of one of the users to navigate to that user’s
          record.
        </Typography>
      </Grid>
      <Grid sm="12">
        <TableContainer component={Paper} style={{ border: "1px solid #ccc" }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Name</TableCell>
                <TableCell>Email</TableCell>
                <TableCell>System Name</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row, index) => (
                <TableRow key={index}>
                  <TableCell component="th" scope="row">
                    {row.name}
                    <ArrowForwardIcon style={{ float: "right" }} />
                  </TableCell>
                  <TableCell>{row.email}</TableCell>
                  <TableCell>{row.system_name}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Grid>
    </Grid>
  );
};

export default Members;
