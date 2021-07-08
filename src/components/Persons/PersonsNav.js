import React from "react";
import styled from "styled-components/macro";
import { spacing } from "@material-ui/system";
import { Button as MuiButton, Container } from "@material-ui/core";
import { Link } from "react-router-dom";
import PersonsRoutes from "../../routes/PersonRoutes";

const Button = styled(MuiButton)(spacing);

const isActive = (path) => {
  return window.location.pathname == path;
};
const PersonsNav = () => {
  return (
    <Container>
      {PersonsRoutes.map((route, key) => {
        const fullPath = route.setting ? `/personnel/${route.path}` : route.path;
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

export default PersonsNav;
