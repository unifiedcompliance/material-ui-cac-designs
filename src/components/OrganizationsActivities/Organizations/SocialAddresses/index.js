import React from "react";
import styled from "styled-components/macro";
import { Button as MuiButton, Grid } from "@material-ui/core";

import { spacing } from "@material-ui/system";
import TelephoneNumberTable from "./TelNumTable";
import EmailsTable from "./EmailTable";
import DomainTable from "./DomainTable";

const Button = styled(MuiButton)(spacing);

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
const SocialAddresses = () => {
  return (
    <Grid container spacing={6}>
      <Grid item xs={12} sm={6}>
        <Wrapper>
          <EmailsTable />
          <TelephoneNumberTable />
        </Wrapper>
      </Grid>
      <Grid item xs={12} sm={6}>
        <DomainTable />
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

export default SocialAddresses;
