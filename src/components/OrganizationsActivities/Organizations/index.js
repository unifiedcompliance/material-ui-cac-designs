import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Box from "@material-ui/core/Box";
import BasicInfo from "./BasicInfo/BasicInfo";
import Classfication from "./classfication";
import SocialAddresses from "./SocialAddresses";
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-auto-tabpanel-${index}`}
      aria-labelledby={`scrollable-auto-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={10} px={10}>
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
    id: `scrollable-auto-tab-${index}`,
    "aria-controls": `scrollable-auto-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: "100%",
    backgroundColor: theme.palette.background.paper,
  },
}));

const OrganizationTabsView = () => {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static" color="default">
        <Tabs
          variant="scrollable"
          scrollButtons="on"
          aria-label="scrollable auto tabs example"
          value={value}
          onChange={handleChange}
        >
          <Tab label="Basic Info" {...a11yProps(0)} />
          <Tab label="Classification" {...a11yProps(1)} />
          <Tab label="Social Addresses" {...a11yProps(2)} />
          <Tab label="Postal Addresses" {...a11yProps(3)} />
          <Tab label="Members" {...a11yProps(4)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        <BasicInfo />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Classfication/>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <SocialAddresses/>
      </TabPanel>
      <TabPanel value={value} index={3}>
        <p>Postal Addresses</p>
      </TabPanel>
      <TabPanel value={value} index={4}>
        <p>Members</p>
      </TabPanel>
    </div>
  );
};

export default OrganizationTabsView;
