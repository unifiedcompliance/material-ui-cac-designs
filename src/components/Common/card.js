import React from "react";
import styled from "styled-components/macro";
import Typography from "@material-ui/core/Typography";
import {
  CardContent as MuiCardContent,
  Card as MuiCard,
} from "@material-ui/core";
import { spacing } from "@material-ui/system";

const CustomCard = styled(MuiCard)`
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

const Cards = (props) => {
  const { children, title } = props;
  return (
    <CustomCard>
      <Typography variant="h6" gutterBottom className="card-label">
        {props.title}
      </Typography>
      <CardContent style={{  minHeight: "180px" }}>
        {children}
      </CardContent>
    </CustomCard>
  );
};

export default Cards;
