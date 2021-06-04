import React from "react";
import styled from "styled-components/macro";
import {
  List,
  Avatar as MuiAvatar,
  Breadcrumbs as MuiBreadcrumbs,
  Card as MuiCard,
  CardContent as MuiCardContent,
  Divider as MuiDivider,
  ListItem as MuiListItem,
  ListItemText as MuiListItemText,
  Typography,
} from "@material-ui/core";

import { spacing } from "@material-ui/system";

const Card = styled(MuiCard)(spacing);

const CardContent = styled(MuiCardContent)(spacing);

const ListItem = styled(MuiListItem)(spacing);

const ListItemText = styled(MuiListItemText)(spacing);

const ListBox = ({ title, items, boxShadow }) => {
  const wrapperStyle = boxShadow
    ? {
        boxShadow: "1px 1px 10px #ccc",
      }
    : {};

  return (
    <Card mb={6} style={wrapperStyle}>
      <CardContent pb={0}>
        <Typography variant="h6" gutterBottom>
          {title}
        </Typography>
      </CardContent>

      <List component="nav" dense={true}>
        {items.map((item, key) => (
          <ListItem key={key} button>
            <ListItemText primary={item} />
          </ListItem>
        ))}
      </List>
    </Card>
  );
};

export default ListBox;
