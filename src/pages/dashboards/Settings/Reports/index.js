import React from "react";
import styled from "styled-components/macro";
import { Container, Divider, Toolbar as MuiToolbar } from "@material-ui/core";

import NavContainer from "../../../../components/Settings/NavContainer";

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
      <SettingsContainer></SettingsContainer>
    </>
  );
};

export default Settings;
