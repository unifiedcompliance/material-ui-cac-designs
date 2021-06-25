import React from "react";
import styled from "styled-components/macro";
import { spacing } from "@material-ui/system";

import {
  Container,
  Divider,
  Toolbar as MuiToolbar,
} from "@material-ui/core";
import OrganizationNav from "../../../../components/OrganizationsActivities/OrganizationNav";


const Toolbar = styled(MuiToolbar)`
  .MuiContainer-root {
    margin: 0;
  }
`;
const SettingsContainer = styled(Container)`
  padding: 2rem;
  max-width: inherit;
`;

const Groups = () => {
  return (
    <>
      <Toolbar>
        <OrganizationNav />
      </Toolbar>
      <Divider />
      <SettingsContainer>
        <h1>Groups</h1>
      </SettingsContainer>
    </>
  );
};

export default Groups;
