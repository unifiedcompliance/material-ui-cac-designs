import React from "react";
import styled from "styled-components/macro";
import { Container, Divider, Toolbar as MuiToolbar } from "@material-ui/core";
import PersonsNav from "../../../../components/Persons/PersonsNav";

const Toolbar = styled(MuiToolbar)`
  .MuiContainer-root {
    margin: 0;
  }
`;
const SettingsContainer = styled(Container)`
  padding: 2rem;
  max-width: inherit;
`;

const PersonnelIntrest = () => {
  return (
    <React.Fragment>
      <Toolbar>
        <PersonsNav />
      </Toolbar>
      <Divider />
      <SettingsContainer>
        <h2>Personal Intrest</h2>
      </SettingsContainer>
    </React.Fragment>
  );
};

export default PersonnelIntrest;
