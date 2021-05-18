import React from "react";
import styled from "styled-components/macro";
import { NavLink } from "react-router-dom";

import Helmet from "react-helmet";

import {
  Checkbox,
  Breadcrumbs as MuiBreadcrumbs,
  Divider as MuiDivider,
  Fab as MuiFab,
  Paper as MuiPaper,
  Table,
  TableBody,
  TableContainer as MuiTableContainer,
  TableCell,
  TableHead,
  TableRow,
  TableSortLabel,
} from "@material-ui/core";

import {
  Delete as DeleteIcon,
  Add as AddIcon,
  FilterList as FilterListIcon,
} from "@material-ui/icons";

import { spacing } from "@material-ui/system";

const Divider = styled(MuiDivider)(spacing);

const Breadcrumbs = styled(MuiBreadcrumbs)(spacing);

const Paper = styled(MuiPaper)(spacing);

const TableContainer = styled(MuiTableContainer)`
    box-shadow: 1px 1px 10px #ccc;
    padding: 20px;
`

function createData(telephoneNumber, isPrimary) {
  return { telephoneNumber, isPrimary };
}

const rows = [
  createData("+1 855-270-0615", true),
  createData("+1 877-696-7786", false),
];

function descendingComparator(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function getComparator(order, orderBy) {
  return order === "desc"
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

function stableSort(array, comparator) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) return order;
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
}

const headCells = [
  {
    id: "name",
    numeric: false,
    disablePadding: true,
    label: "Telephone Numbers",
  },
  { id: "calories", numeric: true, disablePadding: false, label: "Primary" },
  { id: "protein", numeric: true, disablePadding: false, label: "" },
];

function EnhancedTableHead(props) {
  const {
    order,
    orderBy,
    onRequestSort,
  } = props;
  const createSortHandler = (property) => (event) => {
    onRequestSort(event, property);
  };

  return (
    <TableHead>
      <TableRow>
        {headCells.map((headCell) => (
          <TableCell
            key={headCell.id}
            align={headCell.numeric ? "right" : "left"}
            padding={headCell.disablePadding ? "none" : "default"}
            sortDirection={orderBy === headCell.id ? order : false}
          >
            <TableSortLabel
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : "asc"}
              onClick={createSortHandler(headCell.id)}
            >
              {headCell.label}
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

function EnhancedTable() {
  const [order, setOrder] = React.useState("asc");
  const [orderBy, setOrderBy] = React.useState("calories");

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };

  const onTelephoneAddClick = () => {

  }

  return (
    <div>
      <Paper>
        <TableContainer>
          <Table
            aria-labelledby="tableTitle"
            size="medium"
            aria-label="enhanced table"
          >
            <EnhancedTableHead
              order={order}
              orderBy={orderBy}
              onRequestSort={handleRequestSort}
              rowCount={rows.length}
            />
            <TableBody>
              { rows.map((row, index) => {
                  const labelId = `enhanced-table-checkbox-${index}`;

                  return (
                    <TableRow
                        hover
                        tabIndex={-1}
                        key={row.name}
                    >
                        <TableCell
                            component="th"
                            id={labelId}
                            scope="row"
                            padding="none"
                        >
                            {row.telephoneNumber}
                        </TableCell>
                        <TableCell padding="checkbox" align="center">
                            <Checkbox
                                checked={row.isPrimary}
                                inputProps={{ "aria-labelledby": labelId }}
                            />
                        </TableCell>
                        <TableCell align="right">
                            <DeleteIcon fontSize="small" />
                        </TableCell>
                    </TableRow>
                  );
                })}
                <TableRow
                    hover
                    tabIndex={-1}
                >
                    <TableCell colSpan={2} />
                    <TableCell align="right">
                        <AddIcon
                            color="primary"
                            onClick={onTelephoneAddClick}
                            style={{ cursor: "pointer" }}
                        />
                    </TableCell>
                </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </div>
  );
}

export default EnhancedTable