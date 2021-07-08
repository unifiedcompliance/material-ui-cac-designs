import React from "react";
import styled from "styled-components/macro";
import { Box, Grid, Button, Divider } from "@material-ui/core";
import Adresses from "./address";

const Wrapper = styled(Box)`
  box-shadow: 1px 1px 10px #ccc;
  padding: 20px;
  height: 80vh;
  margin-top: 1rem;
  overflow-y: auto;
`;

const PostalAdresses = () => {
  return (
    <React.Fragment>
      <Wrapper>
        <Adresses />
        <Divider style={{ margin: "2rem 0" }} />
        <Adresses />
      </Wrapper>
      <Grid container>
        <Grid
          item
          xs={12}
          sm={12}
          style={{ textAlign: "right", marginTop: "1rem" }}
        >
          <Button mr={2} variant="contained" color="primary">
            Save
          </Button>
          <Button mr={2} variant="contained" style={{ marginLeft: "1rem" }}>
            Cancel
          </Button>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

export default PostalAdresses;
