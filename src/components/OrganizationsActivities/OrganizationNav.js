import React from "react";
import styled from "styled-components/macro";
import { spacing } from "@material-ui/system";
import { Button as MuiButton, Container } from "@material-ui/core";
import { Link } from "react-router-dom";
import OrganizationsRoutes from "../../routes/OrganizationsRoutes";

const Button = styled(MuiButton)(spacing);

const isActive = (path) => {
  return window.location.pathname == path;
};
const OrganizationNav = () => {
  return (
    <Container>
      {OrganizationsRoutes.map((route, key) => {
        const fullPath = route.setting
          ? `/organizations-activities/${route.path}`
          : route.path;
        console.log(`/organizations-activities/${route.path}`, route.name);
        const style = isActive(fullPath)
          ? { backgroundColor: "rgba(0, 0, 0, 0.04)" }
          : {};
        return (
          <Button key={key} ml={2} style={style} component={Link} to={fullPath}>
            {route.name}
          </Button>
        );
      })}
    </Container>
  );
};

export default OrganizationNav;
