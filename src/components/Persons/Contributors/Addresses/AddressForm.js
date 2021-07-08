import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components/macro";
import SelectBox from "../../../Common/Select";

import {
  Grid as MuiGrid,
  TextField as MuiTextField,
  FormControlLabel,
  Checkbox,
  Button as MuiButton,
} from "@material-ui/core";

import { spacing } from "@material-ui/system";
import Card from "../../../Common/card";
import { country, state, city } from "../../../../redux/actions/countryActions";

const TextField = styled(MuiTextField)(spacing);

const Grid = styled(MuiGrid)`
  display: flex;
  align-items: flex-end;
  justify-content: center;
`;

const DeleteButton = styled(MuiButton)`
  background-color: #f73378;
  color: #fff;
  margin-bottom: 7px;
`;

const AddressFormGroup = ({ newForm, cardMargin }) => {
  const countryState = useSelector((state) => state.Countrys.country);
  const stateState = useSelector((state) => state.Countrys.state);
  const cityState = useSelector((state) => state.Countrys.city);
  
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(country());
    dispatch(state());
  }, []);
  useEffect(() => {
    dispatch(city());
  }, []);
  return (
    <Card title="Address" cardMargin={cardMargin}>
      <Grid container spacing={3}>
        <Grid item xs={6} sm={2}>
          <SelectBox name="Country"  options={countryState} />
        </Grid>
        <Grid item xs={6} sm={2}>
          <SelectBox name="State" options={stateState} />
        </Grid>
        <Grid item xs={6} sm={4}>
          <SelectBox name="City" options={cityState} />
        </Grid>
        <Grid item xs={6} sm={3}>
          <TextField
            type="text"
            name="account_name"
            label="Postal Code"
            fullWidth
            my={2}
          />
        </Grid>
        <Grid item xs={6} sm={1}>
          <FormControlLabel
            control={<Checkbox name="checkedB" color="primary" />}
            label="Primary"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            type="text"
            name="account_name"
            label="Address1"
            fullWidth
            my={2}
          />
        </Grid>
        <Grid item xs={12} sm={5}>
          <TextField
            type="text"
            name="account_name"
            label="Address2"
            fullWidth
            my={2}
          />
        </Grid>
        <Grid item xs={12} sm={1}>
          <DeleteButton disabled={newForm}>Del</DeleteButton>
        </Grid>
      </Grid>
    </Card>
  );
};

export default AddressFormGroup;
