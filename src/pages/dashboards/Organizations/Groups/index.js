import React from "react";
import styled from "styled-components/macro";
import { Container, Divider, Toolbar as MuiToolbar,Grid } from "@material-ui/core";
import OrganizationNav from "../../../../components/OrganizationsActivities/OrganizationNav";
import ListBox from "../../../../components/Common/List";
import GroupView from "../../../../components/OrganizationsActivities/Groups";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";

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
        <Grid container spacing={6}>
          <Grid item xs={12} sm={12} md={4} lg={4} xl={3}>
            <ListBox
              title="Name"
              items={["Dorian Cougias", "Javier Cougat", "Veronica Clearwater"]}
              height="100vh"
              scroll="auto"
              icon={<ArrowForwardIcon />}
            />
          </Grid>
          <Grid item xs={12} sm={12} md={8} lg={8} xl={9}>
            <GroupView />
          </Grid>
        </Grid>
      </SettingsContainer>
    </>
  );
};

export default Groups;
