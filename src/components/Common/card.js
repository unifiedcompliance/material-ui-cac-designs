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
  const { children, title, cardMargin, minHeight } = props;
  return (
    <CustomCard style={{ marginTop: cardMargin }}>
      <Typography variant="h6" gutterBottom className="card-label">
        {title}
      </Typography>
      <CardContent style={{ minHeight: minHeight ? minHeight : "180px" }}>
        {children}
      </CardContent>
    </CustomCard>
  );
};

export default Cards;
