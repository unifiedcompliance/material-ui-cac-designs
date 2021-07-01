import React from "react";
import styled from "styled-components/macro";
import { spacing } from "@material-ui/system";
import { ColorPicker } from "material-ui-color";
import ImageUploadForm from "../../../../components/ImageUploadForm";
import {
  CardContent as MuiCardContent,
  Card as MuiCard,
  Button as MuiButton,
  TextField as MuiTextField,
  Container,
  Grid as MuiGrid,
  Divider,
  Toolbar as MuiToolbar,
  Typography,
} from "@material-ui/core";

import NavContainer from "../../../../components/Settings/NavContainer";
import APIKeys from "../../../../components/Settings/Other/APIKeys";
import SelectBox from "../../../../components/Common/Select";

const TextField = styled(MuiTextField)(spacing);
const Grid = styled(MuiGrid)(spacing);

const Button = styled(MuiButton)`
  width: 100%;
  margin-bottom: 7px;
`;

const Card = styled(MuiCard)`
  box-shadow: 1px 1px 10px #ccc;
  border-radius: 0;
  padding: 10px;
  margin: 2rem 0 1rem 0;
  position: relative;
  overflow: visible;
  .card-label {
    position: absolute;
    top: -19px;
    background: #fff;
    box-shadow: 1px 1px 30px #fff;
    padding: 6px;
  }
`;

const CardContent = styled(MuiCardContent)(spacing);

const StyledGrid = styled(Grid)`
  display: flex;
  align-items: flex-end;
  justify-content: center;

  &.label {
    justify-content: flex-end;
  }
`;

const Toolbar = styled(MuiToolbar)`
  .MuiContainer-root {
    margin: 0;
  }
`;
const SettingsContainer = styled(Container)`
  padding: 2rem;
  max-width: inherit;
  background: #fff;
`;

const Settings = () => {
  return (
    <>
      <Toolbar>
        <NavContainer />
      </Toolbar>
      <Divider />
      <SettingsContainer>
        <Grid container spacing={6}>
          <Grid item xs={12} lg={6} xl={6}>
            <APIKeys />
          </Grid>
          <Grid item xs={12} lg={6} xl={6}>
            <Card>
              <Typography variant="h6" gutterBottom className="card-label">
                Branding
              </Typography>
              <CardContent>
                <Grid container spacing={3}>
                  <Grid
                    container
                    item
                    xs={12}
                    sm={6}
                    style={{ padding: "2rem" }}
                  >
                    <ImageUploadForm />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      type="text"
                      name="account_name"
                      label="RapidAPI Key"
                      fullWidth
                      my={2}
                    />
                    <TextField
                      type="text"
                      name="account_name"
                      label="CCH Key"
                      fullWidth
                      my={2}
                    />
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
            <Card>
              <Typography variant="h6" gutterBottom className="card-label">
                Disambiguated Name
              </Typography>
              <CardContent>
                <Grid container spacing={3}>
                  <StyledGrid item xs={6} sm={4}>
                    <SelectBox name="First" required={false} />
                  </StyledGrid>
                  <StyledGrid item xs={6} sm={4}>
                    <SelectBox name="Middle" required={false} />
                  </StyledGrid>
                  <StyledGrid item xs={6} sm={4}>
                    <SelectBox name="Last" required={false} />
                  </StyledGrid>
                  <StyledGrid item xs={6} sm={4}>
                    <SelectBox name="Spaces" required={false} />
                  </StyledGrid>
                  <StyledGrid item xs={6} sm={4}>
                    <SelectBox name="Case" required={false} />
                  </StyledGrid>
                  <StyledGrid item xs={6} sm={4}>
                    <SelectBox name="ASCII" required={false} />
                  </StyledGrid>
                  <StyledGrid item xs={6} sm={4} className="label">
                    <span style={{ marginBottom: "10px" }}>
                      Duplicate Iteration
                    </span>
                  </StyledGrid>
                  <StyledGrid item xs={6} sm={4}>
                    <SelectBox name="Numeric Serial" required={false} />
                  </StyledGrid>
                  <StyledGrid item xs={6} sm={8}>
                    <TextField
                      type="text"
                      name="account_name"
                      label="first.m.last"
                      fullWidth
                      my={2}
                    />
                  </StyledGrid>
                  <StyledGrid item xs={6} sm={4}>
                    <Button mr={2} variant="contained" color="primary">
                      Save
                    </Button>
                  </StyledGrid>
                </Grid>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </SettingsContainer>
    </>
  );
};

export default Settings;
