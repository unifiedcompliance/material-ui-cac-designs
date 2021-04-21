import React from "react";
import styled from "styled-components/macro";
import { NavLink } from "react-router-dom";

import {
  Box,
  Container,
  Grid,
  Tooltip,
  Typography as MuiTypography,
} from "@material-ui/core";

import { spacing } from "@material-ui/system";

const Typography = styled(MuiTypography)(spacing);

const Wrapper = styled.div`
  padding-top: 3.5rem;
  position: relative;
  text-align: center;
  overflow: hidden;
`;

const Content = styled.div`
  padding: ${(props) => props.theme.spacing(6)}px 0;
  line-height: 150%;
`;

const Title = styled(Typography)`
  opacity: 0.9;
  line-height: 1.4;
  font-size: 1.75rem;
  font-weight: ${(props) => props.theme.typography.fontWeightBold};

  ${(props) => props.theme.breakpoints.up("sm")} {
    font-size: 2rem;
  }

  ${(props) => props.theme.breakpoints.up("md")} {
    font-size: 2.5rem;
  }

  span {
    color: ${(props) => props.theme.palette.secondary.main};
  }
`;

const Subtitle = styled(Typography)`
  font-size: ${(props) => props.theme.typography.h6.fontSize};
  font-weight: ${(props) => props.theme.typography.fontWeightRegular};
  font-family: ${(props) => props.theme.typography.fontFamily};
  margin: ${(props) => props.theme.spacing(2)}px 0;
`;

const BrandIcons = styled.div(spacing);

const BrandIcon = styled.img`
  vertical-align: middle;
  margin-right: ${(props) => props.theme.spacing(3)}px;
  height: auto;
`;

const HomeContentList = styled.ul`
  padding-left: 15px;
  li {
    margin-bottom: 10px;
  }
`

function HomePage() {
  return (
    <Wrapper>
      <Container>
        <Grid container alignItems="center" justify="center" spacing={4}>
          <Grid item xs={12} sm={9} md={8} lg={7}>
            <Content>
              <Title variant="h1">
                Compliance As Code
              </Title>
              <Grid container justify="center" spacing={4}>
                <Grid item xs={12} lg={10}>
                  <Subtitle color="textSecondary">
                    Mouse over any of the icons on the left to learn more
                  </Subtitle>
                </Grid>
              </Grid>

              <Grid container justify="center" spacing={4}>
                <Grid item xs={12} lg={10}>
                  <Content style={{textAlign: "left"}}>
                      <Typography>
                          With the advent of natural language processing, artificial intelligence, and JSON-LD, technology allows us to standardize, harmonize, and ubiquitize compliance require-ments and our responses to them.
                      </Typography>
                      <HomeContentList>
                          <li>
                              Laws, regulations, and standards are written on computers. Why shouldn’t they con-tain machine-readable information?
                          </li>
                          <li>
                              With the advent of natural language processing and artificial intelligence, why does the interpretation of these documents have to be done by nameless people in a back room that want no credit and provide no proof of their work?
                          </li>
                          <li>
                          The Internet of Things is pervasive, so why aren’t our policies, standards, and proce-dures written in a way so that those policies, standards, and procedures instruct both people and computers to behave the way we want?
                          </li>
                      </HomeContentList>
                      <Typography>
                          Compliance as Code gives us the schemas, APIs, tools, and methodologies to simulta-neously read, interpret, and output compliance requirements in human and machine-readable formats.
                      </Typography>
                    </Content>
                </Grid>
              </Grid>
            </Content>
          </Grid>
        </Grid>
      </Container>
    </Wrapper>
  );
}

export default HomePage;
