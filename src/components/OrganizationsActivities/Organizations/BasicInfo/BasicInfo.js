import React from "react";
import styled from "styled-components/macro";
import Typography from "@material-ui/core/Typography";
import SelectBox from "../../../Common/Select";

import Card from "../../../Common/card";
import ListBox from "../../../Common/List";
import OrganizationNameTable from "./OrganizationsNameTable";
import {
  CardContent as MuiCardContent,
  //   Card as MuiCard,
  TextField as MuiTextField,
  Button as MuiButton,
  Grid,
  TextareaAutosize as MuiTextareaAutosize,
} from "@material-ui/core";

import { spacing } from "@material-ui/system";

const TextField = styled(MuiTextField)(spacing);

const Button = styled(MuiButton)(spacing);

const DeleteButton = styled(MuiButton)`
  background-color: #f73378;
  color: #fff;
  margin-top: 1rem;
`;

const ACCOUNT_ORGANIZATIONS = [
  {
    label: "Parent Organization",
    value: "PO",
  },
];

const BasicInfo = () => {
  return (
    <Grid container spacing={6}>
      <Grid item xs={12} sm={6}>
        <Card title="Organization Identification">
          <TextField
            type="text"
            name="legal_name"
            label="Legal Name"
            value="Network Fronties"
            fullWidth
            my={2}
          />
          <OrganizationNameTable />
        </Card>

        <Card title="Social Addresses">
          <TextField
            type="text"
            name="linkedin"
            label="linkedinn Address"
            fullWidth
            my={2}
          />
          <TextField
            type="text"
            name="twitter"
            label="Twitter Address"
            fullWidth
            my={2}
          />
          <TextField
            type="text"
            name="facebook"
            label="Facebook Address"
            fullWidth
            my={2}
          />
        </Card>
      </Grid>
      <Grid item xs={12} sm={6}>
        <Card title="Core MetaData">
          <Grid container spacing={3}>
            <Grid item xs={6} sm={4} md={3}>
              <TextField type="text" name="account_name" label="ID" my={2} />
            </Grid>
            <Grid item xs={6} sm={4} md={3}>
              <TextField type="text" name="account_name" label="Chksm" my={2} />
            </Grid>
            <Grid item xs={6} sm={4} md={3}>
              <TextField
                type="text"
                name="account_name"
                label="Created ID"
                my={2}
              />
            </Grid>
            <Grid item xs={6} sm={4} md={3}>
              <TextField
                type="text"
                name="account_name"
                label="Date Created"
                my={2}
              />
            </Grid>
            <Grid item xs={6} sm={4} md={3}>
              <TextField type="text" name="account_name" label="Live" my={2} />
            </Grid>
            <Grid item xs={6} sm={4} md={3}>
              <TextField type="text" name="account_name" label="Valid" my={2} />
            </Grid>
            <Grid item xs={6} sm={4} md={3}>
              <TextField
                type="text"
                name="account_name"
                label="Modified ID"
                my={2}
              />
            </Grid>
            <Grid item xs={6} sm={4} md={3}>
              <TextField
                type="text"
                name="account_name"
                label="Date Modified"
                my={2}
              />
            </Grid>
          </Grid>
        </Card>
        <Card title="Organizational Hierarchy">
          <Grid container spacing={3}>
            <Grid item xs={9} sm={9} lg={9}>
              <SelectBox
                name="Parent Organization"
                options={ACCOUNT_ORGANIZATIONS}
              />
            </Grid>
            <Grid item xs={3} sm={3} lg={3} style={{ textAlign: "right" }}>
              <DeleteButton>Del</DeleteButton>
            </Grid>
            <Grid item xs={12}>
              <p>
                Click the <strong>name</strong> of one of the subsidiaries to
                navigate to that record.
              </p>
              <ListBox
                title="Subsidiaries"
                items={["Organization A", " Organization B", " Organization C"]}
                boxShadow={true}
                height="150px"
                scroll="auto"
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
