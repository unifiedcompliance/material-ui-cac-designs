import React from "react";
import styled from "styled-components/macro";
import { withStyles, makeStyles } from "@material-ui/core/styles";

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
  height: 302px;
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
    id: "Tags",
    numeric: false,
    disablePadding: true,
    label: "Tags",
  },
  { id: "", numeric: true, disablePadding: false, label: "" },
  { id: "", numeric: true, disablePadding: false, label: "" },
];

const StyledTableRow = withStyles((theme) => ({
  root: {
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);
const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

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
              style={{ fontWeight: "bold" }}
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
    boxShadow: theme.shadows[5],
  },
}));

const ModalTitle = styled.div`
  border-bottom: 1px solid #c4c4c4;
  padding: 0.8rem 1rem;
  background: #e0e0e0;
  font-weight: bold;
`;

const ModalContent = styled.div`
  padding: 1rem;
`;

function TagsTable() {
  const [order, setOrder] = React.useState("asc");
  const [orderBy, setOrderBy] = React.useState("calories");
  const [addModalOpen, setAddModalOpen] = React.useState(false);
  const telephoneInput = React.useRef();

  const classes = useStyles();
  // getModalStyle is not a pure function, we roll the style only on the first render
  const [modalStyle] = React.useState(getModalStyle);

  const [tagsList, setTagsList] = React.useState([
    createData("Information Technology", true),
    createData("Information Services", true),
    createData("Computer Hardware", true),
    createData("Computer Software", true),
  ]);

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };

  const onAddClick = () => {
    setAddModalOpen(true);
  };

  const CloseModal = () => {
    setAddModalOpen(false);
  };

  const onSaveClick = () => {
    setTagsList([
      ...tagsList,
      {
        telephoneNumber: telephoneInput.current.value,
        isPrimary: false,
      },
    ]);

    CloseModal();
  };

  const setTelephonePrimary = (index) => {
    let telephoneTempList = tagsList.map((row, i) => {
      return {
        telephoneNumber: row.telephoneNumber,
        isPrimary: index === i,
      };
    });

    setTagsList(telephoneTempList);
  };

  const removeTelephoneByIndex = (index) => {
    tagsList.splice(index, 1);

    setTagsList([...tagsList]);
  };

  return (
    <div>
      <Paper>
        <TableContainer>
          <Table
            aria-labelledby="tableTitle"
            size="small"
            aria-label="enhanced table"
            stickyHeader={true}
          >
            <EnhancedTableHead
              order={order}
              orderBy={orderBy}
              onRequestSort={handleRequestSort}
              rowCount={tagsList.length}
            />
            <TableBody>
              {tagsList.map((row, index) => {
                const labelId = `enhanced-table-checkbox-${index}`;

                return (
                  <StyledTableRow hover tabIndex={-1} key={index}>
                    <StyledTableCell
                      component="th"
                      id={labelId}
                      scope="row"
                      padding="none"
                    >
                      {row.telephoneNumber}
                    </StyledTableCell>
                    <StyledTableCell align="center" />

                    <StyledTableCell align="right">
                      <DeleteIcon
                        fontSize="small"
                        onClick={() => {
                          removeTelephoneByIndex(index);
                        }}
                        style={{ cursor: "pointer" }}
                      />
                    </StyledTableCell>
                  </StyledTableRow>
                );
              })}
              <StyledTableRow hover tabIndex={-1}>
                <StyledTableCell colSpan={2} />
                <StyledTableCell align="right">
                  <AddIcon
                    color="primary"
                    onClick={onAddClick}
                    style={{ cursor: "pointer" }}
                  />
                </StyledTableCell>
              </StyledTableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
      <Modal
        open={addModalOpen}
        onClose={CloseModal}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        <div style={modalStyle} className={classes.paper}>
          <ModalTitle id="simple-modal-title">Add Technology</ModalTitle>
          <ModalContent id="simple-modal-description">
            Please enter a Technology name to add
            <TextField
              id="technology_name"
              label="Technology"
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
                onClick={onSaveClick}
              >
                Save
              </Button>
              <Button mr={2} variant="contained" onClick={CloseModal}>
                Cancel
              </Button>
            </div>
          </ModalContent>
        </div>
      </Modal>
    </div>
  );
}

export default TagsTable;
