import React from "react";
import styled from "styled-components/macro";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import {
  Paper as MuiPaper,
  Table,
  TableBody,
  TableContainer as MuiTableContainer,
  TableCell,
  TableHead,
  TableRow,
} from "@material-ui/core";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import { spacing } from "@material-ui/system";

const Paper = styled(MuiPaper)(spacing);

const TableContainer = styled(MuiTableContainer)`
  box-shadow: 1px 1px 10px #ccc;
  padding: 20px;
  height: 302px;
  margin-top: 1rem;
`;
const StyledTableRow = withStyles((theme) => ({
  root: {
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

const StyledTableCell = withStyles((theme) => ({
  head: {
    color: theme.palette.common.black,
    fontWeight: "bold",
  },
  body: {
    fontSize: 14,
    // borderRight: "1px solid #000",
  },
}))(TableCell);

const rows = [{ name: "abc", email: "abcd@gmail.com", systemName: "testing" }];

const MemberTable = () => {
  //   const classes = useStyles();

  return (
    <Paper>
      <TableContainer>
        <Table size="small" aria-label="simple table" stickyHeader={true}>
          <TableHead>
            <StyledTableRow>
              <StyledTableCell>Name</StyledTableCell>
              <StyledTableCell>Email</StyledTableCell>
              <StyledTableCell>System Name</StyledTableCell>
            </StyledTableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <StyledTableRow key={row.name}>
                <StyledTableCell
                  component="th"
                  scope="row"
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  {row.name}
                  <ArrowForwardIcon />
                </StyledTableCell>
                <StyledTableCell component="th" scope="row">
                  {row.email}
                </StyledTableCell>
                <StyledTableCell component="th" scope="row">
                  {row.systemName}
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
};
export default MemberTable;
