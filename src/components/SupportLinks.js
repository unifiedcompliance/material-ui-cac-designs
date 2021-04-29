import React from "react";
import styled from "styled-components/macro";
import { NavLink } from "react-router-dom";
import { Typography } from "@material-ui/core";

const HelpLink = styled(NavLink)`
  text-decoration: none;
  color: ${(props) => props.theme.header.color};
  margin-right: 20px;
`

const HelpLinkBlock = styled(Typography)`
  width: 100%;
`

function Actions() {

  return (
    <HelpLinkBlock variant="h4">
       <HelpLink to="/support">
        Support
      </HelpLink>
      <HelpLink to="/contact">
        Contact
      </HelpLink>
    </HelpLinkBlock>
  );
}

export default Actions;
