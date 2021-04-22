import React from "react";
import styled from "styled-components/macro";
import { NavLink } from "react-router-dom";
import { Typography } from "@material-ui/core";
import { Lock } from "@material-ui/icons"

const SignIn = styled(NavLink)`
    text-decoration: none;
    color: ${(props) => props.theme.header.color};
    margin-right: 10px;
    display: flex;
    alignItems: center;
    flexWrap: wrap;
    padding: 4px 16px;
`

const SignUp = styled(NavLink)`
    text-decoration: none;
    color: #fff;
    margin-right: 20px;
    padding: 4px 16px;
    background: #f73378;
    border-radius: 6px;
    font-weight: ${(props) => props.theme.typography.fontWeightMedium};
`

const HelpLinkBlock = styled(Typography)`
  width: 100%;
  display: flex;
`

function UserLinks() {

  return (
    <HelpLinkBlock variant="h6">
       <SignIn to="/auth/sign-in">
        <Lock /> Log In
      </SignIn>
      <SignUp to="/auth/sign-up">
        Sign Up
      </SignUp>
    </HelpLinkBlock>
  );
}

export default UserLinks;
