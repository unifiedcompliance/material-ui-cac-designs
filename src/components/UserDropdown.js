import React from "react";
import styled from "styled-components/macro";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { ExpandLess, ExpandMore } from "@material-ui/icons";

import {
  Tooltip,
  Menu,
  MenuItem,
  Button as MuiButton,
} from "@material-ui/core";

import { signOut } from "../redux/actions/authActions";

const Button = styled(MuiButton)`
  svg {
    width: 22px;
    height: 22px;
  }
`;

function UserDropdown() {
  const [anchorMenu, setAnchorMenu] = React.useState(null);
  const history = useHistory();
  const dispatch = useDispatch();

  const toggleMenu = (event) => {
    setAnchorMenu(event.currentTarget);
  };

  const closeMenu = () => {
    setAnchorMenu(null);
  };

  const handleSignOut = async () => {
    await dispatch(signOut());
    history.push("/auth/sign-in");
  };

  return (
    <React.Fragment>
      <Tooltip title="Account">
        <Button
          aria-owns={Boolean(anchorMenu) ? "menu-appbar" : undefined}
          aria-haspopup="true"
          onClick={toggleMenu}
          color="inherit"
        >
          Lucy Lavendar
          <ExpandMore />
        </Button>
      </Tooltip>
      <Menu
        id="menu-appbar"
        anchorEl={anchorMenu}
        open={Boolean(anchorMenu)}
        onClose={closeMenu}
      >
        <MenuItem onClick={closeMenu}>Profile</MenuItem>
        <MenuItem onClick={handleSignOut}>Sign out</MenuItem>
      </Menu>
    </React.Fragment>
  );
}

export default UserDropdown;
