import React from "react";
import styled from "styled-components/macro";
import { spacing } from "@material-ui/system";

import {
  Button as MuiButton,
  Container,
  Paper,
  Grid,
  Divider,
  Toolbar as MuiToolbar,
} from "@material-ui/core";
import NavContainer from "../../../../components/Settings/NavContainer";
import ListBox from "../../../../components/Common/List";
import SettingAccountView from "../../../../components/Settings/Account";

const Toolbar = styled(MuiToolbar)`
  .MuiContainer-root {
    margin: 0;
  }
`;
const SettingsContainer = styled(Container)`
  padding: 2rem;
  max-width: inherit;
`;

const Settings = () => {
  return (
    <>
      <Toolbar>
        <NavContainer />
      </Toolbar>
      <Divider />
      <SettingsContainer>
        <Grid container spacing={6}>
          <Grid item xs={12} lg={4} xl={3}>
            <ListBox title="Groups" items={["Mapper Groups"]} />
            <ListBox title="Initiatives" items={["PCI"]} />
            <ListBox title="Teams" items={["Regulatory", "Dictionary"]} />
          </Grid>
          <Grid item xs={12} lg={8} xl={9}>
            <SettingAccountView />
          </Grid>
        </Grid>
      </SettingsContainer>
    </>
  );
};

export default Settings;
