import React from "react";
import styled from "styled-components/macro";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import {
  CardContent as MuiCardContent,
  Card as MuiCard,
  TextField as MuiTextField,
  Button as MuiButton,
  Paper as MuiPaper,
  Grid,
  TextareaAutosize as MuiTextareaAutosize,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  TableContainer,
  Radio,
} from "@material-ui/core";

import { spacing } from "@material-ui/system";

import { ArrowForward as ArrowForwardIcon } from "@material-ui/icons";

const TextField = styled(MuiTextField)(spacing);

const Button = styled(MuiButton)(spacing);

const Paper = styled(MuiPaper)(spacing);

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

const CardContent = styled(MuiCardContent)(spacing);

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    padding: "1rem 2rem",
  },
}));

const rows = [
  {
    name: "Dorian Cougias",
    email: "dcougias@microsoft.com",
  },
  {
    name: "Dorian Cougias",
    email: "dcougias@microsoft.com",
  },
  {
    name: "Dorian Cougias",
    email: "dcougias@microsoft.com",
  },
  {
    name: "Dorian Cougias",
    email: "dcougias@microsoft.com",
  },
];

export default function TabsView() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={6}>
        <Grid item xs={12} sm={12}>
          <Card>
            <Typography variant="h6" gutterBottom className="card-label">
              Team Identification
            </Typography>
            <CardContent>
              <Grid container spacing={6}>
                <Grid item xs={6} sm={6}>
                  <TextField
                    type="text"
                    name="name"
                    label="Name"
                    fullWidth
                    required
                    my={2}
                  />
                  <TextField
                    type="text"
                    name="team_lead"
                    label="Team Lead"
                    fullWidth
                    required
                    my={2}
                  />
                </Grid>
                <Grid item xs={6} sm={6}>
                  <p>Description</p>
                  <TextareaAutosize aria-label="minimum height" rowsMin={10} />
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={12}>
          <Grid container spacing={6}>
            <Grid item xs={12} sm={12}>
              <Typography variant="h6" gutterBottom>
                Click the *name* of one of the users to navigate to that user’s
                record.
              </Typography>
              <TableContainer
                component={Paper}
                style={{ border: "1px solid #ccc" }}
              >
                <Table>
                  <TableHead>
                    <TableRow>
                      <TableCell>Name</TableCell>
                      <TableCell>Email</TableCell>
                      <TableCell>Lead</TableCell>
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
                        <TableCell>
                          <Radio />
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </Grid>
          </Grid>
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
    </div>
  );
}
