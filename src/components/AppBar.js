import React from "react";
import styled, { withTheme } from "styled-components/macro";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import logoSrc from "../vendor/logos/logo_GRCschema_h_color_overLight.png";

import {
  Grid,
  Hidden,
  AppBar as MuiAppBar,
  IconButton as MuiIconButton,
  Toolbar,
} from "@material-ui/core";

import { Menu as MenuIcon } from "@material-ui/icons";

import UserDropdown from "./UserDropdown";
import UserLinks from "./UserLinks";

const AppBar = styled(MuiAppBar)`
  background: ${(props) => props.theme.header.background};
  color: ${(props) => props.theme.header.color};
`;

const IconButton = styled(MuiIconButton)`
  svg {
    width: 22px;
    height: 22px;
  }
`;

const Brand = styled(NavLink)`
  font-size: ${(props) => props.theme.typography.h5.fontSize};
  font-weight: ${(props) => props.theme.typography.fontWeightMedium};
  color: ${(props) => props.theme.sidebar.header.color};
  font-family: ${(props) => props.theme.typography.fontFamily};
  padding-left: ${(props) => props.theme.spacing(6)}px;
  padding-right: ${(props) => props.theme.spacing(6)}px;
  justify-content: center;
  cursor: pointer;
`;

const BrandIcon = styled.img`
  margin-right: ${(props) => props.theme.spacing(2)}px;
  height: 32px;
`;

const AppBarComponent = ({ onDrawerToggle }) => {
  const auth = useSelector((state) => state.authReducer);
  
  return (
    <React.Fragment>
      <AppBar position="sticky" elevation={0}>
        <Toolbar>
          <Grid container alignItems="center">
            <Hidden mdUp>
              <Grid item>
                <IconButton
                  color="inherit"
                  aria-label="Open drawer"
                  onClick={onDrawerToggle}
                >
                  <MenuIcon />
                </IconButton>
              </Grid>
            </Hidden>
            <Grid item>
              <Brand to="/">
                <BrandIcon src={ logoSrc } />
              </Brand>
            </Grid>
            <Grid item xs />
            <Grid item>
              {auth.user ?
                <UserDropdown />
                :
                <UserLinks />
              }
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
}

export default withTheme(AppBarComponent);
