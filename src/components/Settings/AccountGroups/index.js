import React from "react";
import styled from "styled-components/macro";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import { Divider } from "@material-ui/core";
import BasicInfo from "./BasicInfo";
import Members from "../Members";
import Character from "../Character";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={10} px={20}>
          {children}
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
}));

const PostalAddress = () => {
  return (
    <>
      <AddressFormGroup name="Primary Address" />
      <Divider />
      <AddressFormGroup name="Billing Address" />
      <Divider />
      <AddressFormGroup name="Shipping Address" />
    </>
  );
};

export default function TabsView() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static" color="default">
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="simple tabs example"
        >
          <Tab label="Basic Info" {...a11yProps(0)} />
          <Tab label="Character" {...a11yProps(1)} />
          <Tab label="Members" {...a11yProps(2)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        <BasicInfo />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Character />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <Members />
      </TabPanel>
    </div>
  );
}
