import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components/macro";
import {
  TextField as MuiTextField,
  Button as MuiButton,
  Grid,
  FormControlLabel,
  Checkbox,
} from "@material-ui/core";

import { spacing } from "@material-ui/system";
import CustomCard from "../../../Common/card";
import {
  prefixName,
  suffixName,
} from "../../../../redux/actions/personActions";
import SelectBox from "../../../Common/Select";

const TextField = styled(MuiTextField)(spacing);

const DeleteButton = styled(MuiButton)`
  background-color: #f73378;
  color: #fff;
  margin-top: 1rem;
`;

const NameForm = ({ newForm = false, cardMargin }) => {
  const [fullPrefix, setFullPrefix] = useState("");
  const [fullSuffix, setFullSuffix] = useState("");

  const prefix = useSelector((state) => state.Persons.prefix);
  const suffix = useSelector((state) => state.Persons.suffix);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(prefixName());
    dispatch(suffixName());
  }, []);

  return (
    <CustomCard title="Name" cardMargin={cardMargin} minHeight="0px">
      <Grid container spacing={3}>
        <Grid item xs={3} sm={2}>
          <SelectBox
            name="Prefix"
            options={prefix}
            setFullPrefix={setFullPrefix}
          />
        </Grid>
        <Grid item xs={4} sm={4}>
          <TextField
            type="text"
            name="full_prefix"
            label="Full Prefix"
            value={fullPrefix}
            fullWidth
            my={2}
          />
        </Grid>
        <Grid item xs={4} sm={4}>
          <TextField
            type="text"
            name="account_name"
            label="First Name"
            fullWidth
            my={2}
          />
        </Grid>
        <Grid item xs={1} sm={1}>
          <TextField
            type="text"
            name="account_name"
            label="MI"
            fullWidth
            my={2}
          />
        </Grid>
        <Grid item xs={1} sm={1}></Grid>
        <Grid item xs={4} sm={4}>
          <TextField
            type="text"
            name="account_name"
            label="Last Name"
            fullWidth
            my={2}
          />
        </Grid>
        <Grid item xs={2} sm={2}>
          <SelectBox
            name="Suffix"
            options={suffix}
            setFullSuffix={setFullSuffix}
          />
        </Grid>
        <Grid item xs={4} sm={4}>
          <TextField
            type="text"
            name="account_name"
            label="Full Suffix"
            fullWidth
            value={fullSuffix}
            my={2}
          />
        </Grid>
        <Grid
          item
          xs={1}
          sm={1}
          style={{ display: "flex", alignItems: "center" }}
        >
          <FormControlLabel
            control={<Checkbox name="checkedB" color="primary" />}
            label="Primary"
          />
        </Grid>
        <Grid item xs={1} sm={1}>
          <DeleteButton disabled={newForm}>Del</DeleteButton>
        </Grid>
      </Grid>
    </CustomCard>
  );
};

export default NameForm;
