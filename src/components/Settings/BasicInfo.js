import React from 'react';
import styled from "styled-components/macro";
import Typography from '@material-ui/core/Typography';
import SelectBox from "./Select"
import PhoneNumberTable from "./Table"

import {
    CardContent as MuiCardContent,
    Card as MuiCard,
    Grid,
    TextareaAutosize as MuiTextareaAutosize,
} from "@material-ui/core";

import { spacing } from "@material-ui/system";

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

const TextareaAutosize = styled(MuiTextareaAutosize)`
  width: 100%;
`

const CardContent = styled(MuiCardContent)(spacing);

const BasicInfo = () => {
    return (
        <Grid container spacing={6}>
            <Grid item xs={6} sm={6}>
                <Card>
                    <Typography variant="h6" gutterBottom className="card-label">
                        Account Information
                    </Typography>
                    <CardContent>
                       
                    </CardContent>
                </Card>
            </Grid>
            <Grid item xs={6} sm={6}>
                <Card>
                    <Typography variant="h6" gutterBottom className="card-label">
                        Core MetaData
                    </Typography>
                    <CardContent>
                       
                    </CardContent>
                </Card>
            </Grid>
            <Grid item xs={6} sm={6}>
                <TextareaAutosize aria-label="minimum height" rowsMin={24} fullWidth/>
            </Grid>
            <Grid item xs={6} sm={6}>
                <PhoneNumberTable />
            </Grid>
        </Grid>
    )
}

export default BasicInfo