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
import Names from "./Names";
import Aliases from "./Aliases";
import EmailPhoneNumbers from "./EmailPhoneNumbers";
import Addresses from "./Addresses";
import Organization from "./Organization";
import TeamsRoles from "./TeamsRoles";

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
          <Tab label="Names" {...a11yProps(1)} />
          <Tab label="Aliases" {...a11yProps(2)} />
          <Tab label="Emails & PhoneNumbers" {...a11yProps(3)} />
          <Tab label="Addresses" {...a11yProps(4)} />
          <Tab label="Organization" {...a11yProps(5)} />
          <Tab label="Teams & Roles" {...a11yProps(6)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        <BasicInfo />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Names />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <Aliases />
      </TabPanel>
      <TabPanel value={value} index={3}>
        <EmailPhoneNumbers />
      </TabPanel>
      <TabPanel value={value} index={4}>
        <Addresses />
      </TabPanel>
      <TabPanel value={value} index={5}>
        <Organization />
      </TabPanel>
      <TabPanel value={value} index={6}>
        <TeamsRoles />
      </TabPanel>
    </div>
  );
}
