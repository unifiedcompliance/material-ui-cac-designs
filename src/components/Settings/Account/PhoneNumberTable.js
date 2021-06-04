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
  TableContainer as MuiTableContainer,
  TableCell,
  TableHead,
  TableRow,
  TableSortLabel,
  TextField as MuiTextField,
  Modal,
} from "@material-ui/core";

import {
  Delete as DeleteIcon,
  Add as AddIcon,
  FilterList as FilterListIcon,
} from "@material-ui/icons";

import { spacing } from "@material-ui/system";

const TextFieldSpacing = styled(MuiTextField)(spacing);

const TextField = styled(TextFieldSpacing)`
  width: 80%;
`;

const Button = styled(MuiButton)(spacing);

const Paper = styled(MuiPaper)(spacing);

const TableContainer = styled(MuiTableContainer)`
  box-shadow: 1px 1px 10px #ccc;
  padding: 20px;
`;

function createData(telephoneNumber, isPrimary) {
  return { telephoneNumber, isPrimary };
}

function descendingComparator(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
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
  const { order, orderBy, onRequestSort } = props;
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

function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: "absolute",
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
  },
}));

const ModalTitle = styled.div`
  border-bottom: 1px solid #000;
  padding-left: 1rem;
`;

const ModalContent = styled.div`
  padding: 1rem;
`;

function EnhancedTable() {
  const [order, setOrder] = React.useState("asc");
  const [orderBy, setOrderBy] = React.useState("calories");
  const [telephoneAddModalOpen, setTelephoneAddModalOpen] = React.useState(
    false
  );
  const telephoneInput = React.useRef();

  const classes = useStyles();
  // getModalStyle is not a pure function, we roll the style only on the first render
  const [modalStyle] = React.useState(getModalStyle);

  const [telephoneList, setTelephoneList] = React.useState([
    createData("+1 855-270-0615", true),
    createData("+1 877-696-7786", false),
    createData("+1 877-696-7786", false),
    createData("+1 877-696-7786", false),
    createData("+1 877-696-7786", false),
  ]);

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };

  const onTelephoneAddClick = () => {
    setTelephoneAddModalOpen(true);
  };

  const CloseTelephoneAddModal = () => {
    setTelephoneAddModalOpen(false);
  };

  const onTelephoneSaveClick = () => {
    setTelephoneList([
      ...telephoneList,
      {
        telephoneNumber: telephoneInput.current.value,
        isPrimary: false,
      },
    ]);

    CloseTelephoneAddModal();
  };

  const setTelephonePrimary = (index) => {
    let telephoneTempList = telephoneList.map((row, i) => {
      return {
        telephoneNumber: row.telephoneNumber,
        isPrimary: index === i,
      };
    });

    setTelephoneList(telephoneTempList);
  };

  const removeTelephoneByIndex = (index) => {
    telephoneList.splice(index, 1);

    setTelephoneList([...telephoneList]);
  };

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
              rowCount={telephoneList.length}
            />
            <TableBody>
              {telephoneList.map((row, index) => {
                const labelId = `enhanced-table-checkbox-${index}`;

                return (
                  <TableRow hover tabIndex={-1} key={index}>
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
                        onClick={() => {
                          setTelephonePrimary(index);
                        }}
                      />
                    </TableCell>
                    <TableCell align="right">
                      <DeleteIcon
                        fontSize="small"
                        onClick={() => {
                          removeTelephoneByIndex(index);
                        }}
                      />
                    </TableCell>
                  </TableRow>
                );
              })}
              <TableRow hover tabIndex={-1}>
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
      <Modal
        open={telephoneAddModalOpen}
        onClose={CloseTelephoneAddModal}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        <div style={modalStyle} className={classes.paper}>
          <ModalTitle id="simple-modal-title">Add Telephone Number</ModalTitle>
          <ModalContent id="simple-modal-description">
            Please enter a telephone number to add
            <TextField
              id="telephone-number"
              label="Telephone Number"
              variant="outlined"
              inputRef={telephoneInput}
              m={2}
              p={0}
            />
            <div style={{ textAlign: "right" }}>
              <Button
                mr={2}
                variant="contained"
                color="primary"
                onClick={onTelephoneSaveClick}
              >
                Save
              </Button>
              <Button mr={2} variant="contained">
                Cancel
              </Button>
            </div>
          </ModalContent>
        </div>
      </Modal>
    </div>
  );
}

export default EnhancedTable;
