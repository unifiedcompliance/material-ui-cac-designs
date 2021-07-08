import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components/macro";
import Card from "../../../Common/card";
import {
  Checkbox,
  FormControlLabel,
  TextField as MuiTextField,
  Button as MuiButton,
  Grid,
  Divider,
} from "@material-ui/core";

import { spacing } from "@material-ui/system";
import {
  prefixName,
  suffixName,
} from "../../../../redux/actions/personActions";
import SelectBox from "../../../Common/Select";

const TextField = styled(MuiTextField)(spacing);

const Button = styled(MuiButton)(spacing);

const BasicInfo = () => {
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
    <Grid container spacing={6}>
      <Grid item xs={6} sm={6}>
        <Card title="Account Information">
          <Grid container spacing={3}>
            <Grid item xs={4} sm={4}>
              <SelectBox
                name="Prefix"
                options={prefix}
                setFullPrefix={setFullPrefix}
              />
            </Grid>
            <Grid item xs={8} sm={8}>
              <TextField
                type="text"
                name="full_prefix"
                label="Full Prefix"
                value={fullPrefix}
                fullWidth
                my={2}
              />
            </Grid>
            <Grid item xs={10} sm={10}>
              <TextField
                type="text"
                name="first_name"
                label="First Name"
                required
                fullWidth
                my={2}
              />
            </Grid>
            <Grid item xs={2} sm={2}>
              <TextField
                type="text"
                name="mi_name"
                label="MI"
                fullWidth
                my={2}
              />
            </Grid>
            <Grid item xs={10} sm={10}>
              <TextField
                type="text"
                name="last_name"
                label="Last Name"
                required
                fullWidth
                my={2}
              />
            </Grid>
            <Grid item xs={2} sm={2}></Grid>
            <Grid item xs={4} sm={4}>
              <SelectBox
                name="Suffix"
                options={suffix}
                setFullSuffix={setFullSuffix}
              />
            </Grid>
            <Grid item xs={8} sm={8}>
              <TextField
                type="text"
                name="account_name"
                label="Full Suffix"
                fullWidth
                value={fullSuffix}
                my={2}
              />
            </Grid>
            <Grid item xs={12} sm={12}>
              <Divider />
            </Grid>
            <Grid item xs={12} sm={12}>
              <TextField
                type="text"
                name="account_name"
                label="Email Address"
                required
                fullWidth
                my={2}
              />
            </Grid>
            <Grid item xs={12} sm={12}>
              <TextField
                type="text"
                name="account_name"
                label="LinkedIn Address"
                fullWidth
                my={2}
              />
            </Grid>
            <Grid item xs={12} sm={12}>
              <TextField
                type="text"
                name="account_name"
                label="Twitter Address"
                fullWidth
                my={2}
              />
            </Grid>
            <Grid item xs={12} sm={12}>
              <TextField
                type="text"
                name="account_name"
                label="Facebook Address"
                fullWidth
                my={2}
              />
            </Grid>
          </Grid>
        </Card>
      </Grid>
      <Grid item xs={6} sm={6}>
        <Card title="Core MetaData" minHeight="0px">
          <Grid container spacing={3}>
            <Grid item xs={6} sm={3}>
              <TextField type="text" name="account_name" label="ID" my={2} />
            </Grid>
            <Grid item xs={6} sm={3}>
              <TextField type="text" name="account_name" label="Chksm" my={2} />
            </Grid>
            <Grid item xs={6} sm={3}>
              <TextField
                type="text"
                name="account_name"
                label="Created ID"
                my={2}
              />
            </Grid>
            <Grid item xs={6} sm={3}>
              <TextField
                type="text"
                name="account_name"
                label="Date Created"
                my={2}
              />
            </Grid>
            <Grid item xs={6} sm={3}>
              <TextField type="text" name="account_name" label="Live" my={2} />
            </Grid>
            <Grid item xs={6} sm={3}>
              <TextField type="text" name="account_name" label="Valid" my={2} />
            </Grid>
            <Grid item xs={6} sm={3}>
              <TextField
                type="text"
                name="account_name"
                label="Modified ID"
                my={2}
              />
            </Grid>
            <Grid item xs={6} sm={3}>
              <TextField
                type="text"
                name="account_name"
                label="Date Modified"
                my={2}
              />
            </Grid>
          </Grid>
        </Card>
        <Card title=" Calculated Names" cardMargin="2rem" minHeight="0px">
          <Grid container spacing={3}>
            <Grid item xs={12} sm={12}>
              <TextField
                type="text"
                name="account_name"
                label="Full Name"
                fullWidth
                my={2}
              />
            </Grid>
            <Grid item xs={12} sm={12}>
              <TextField
                type="text"
                name="account_name"
                label="Standard System Name Calculation"
                fullWidth
                my={2}
              />
            </Grid>
            <Grid item xs={12} sm={12}>
              <TextField
                type="text"
                name="account_name"
                label="Disambiguated System Name"
                fullWidth
                my={2}
              />
            </Grid>
          </Grid>
        </Card>
        <Card title="Account Info" cardMargin="2rem" minHeight="0px">
          <Grid container spacing={3}>
            <Grid item xs={12} sm={4}>
              <FormControlLabel
                control={<Checkbox name="checkedB" color="primary" />}
                label="Contributor"
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <FormControlLabel
                control={<Checkbox name="checkedB" color="primary" />}
                label="Person of Interest"
              />
            </Grid>
          </Grid>
        </Card>
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
  );
};

export default BasicInfo;
