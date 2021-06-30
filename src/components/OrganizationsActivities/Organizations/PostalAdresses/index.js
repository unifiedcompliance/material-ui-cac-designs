import React from "react";
import styled from "styled-components/macro";
import { Box } from "@material-ui/core";
import Card from "../../../Common/card";
import Adresses from "./address";

const Wrapper = styled(Box)`
  box-shadow: 1px 1px 10px #ccc;
  padding: 20px;
  height: 302px;
  margin-top: 1rem;
`;

const PostalAdresses = () => {
  return (
    <React.Fragment>
      <Wrapper>
       <Adresses/>
      </Wrapper>
    </React.Fragment>
  );
};

export default PostalAdresses;
