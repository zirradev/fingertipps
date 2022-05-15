import * as React from "react";
import PropTypes from "prop-types";
import { Box, Button, Card, CardActionArea, Typography, Tab, Tabs, CardContent, TextField } from "@mui/material";
import { FiMinus } from "react-icons/fi";
import { IoAdd } from "react-icons/io5";

import Currency from "../../components/Currency";

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
      {value === index && <Box sx={{ p: 1 }}>{children}</Box>}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const OrderPanel = () => {
  

  return (
    <Card sx={{ my: 2 }}>
      <CardActionArea>
        <CardContent>
          <Box display="flex" justifyContent="space-between" alignItems="center">
            <Box>
              <Typography component="p">#2567HT3</Typography>
              <Typography component="p">23 Apr 2022</Typography>
              <Typography component="p"><Currency /> 2300</Typography>
            </Box>
            <Box>
              <Typography component="p">Processing</Typography>
            </Box>
          </Box>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};


const ProfileDetails = () => {
  return (
    <Box>
      <form>
        <TextField label="Name" type="text" />
        <TextField label="Name" type="text" />
        <TextField label="Name" type="text" />
        <TextField label="Name" type="text" />
        <Box>
          <Button variant="outlined" fullWidth>Reset Password</Button>
          <Button variant="contained" fullWidth>Save</Button>
        </Box>
      </form>
    </Box>
  )
}

export default function TabSection() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%", mt: 5 }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab label="Orders" {...a11yProps(0)} />
          <Tab label="Details" {...a11yProps(1)} />
          <Tab label="Contact Us" {...a11yProps(2)} />
          <Tab label="Swallow" {...a11yProps(3)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        {Array(10)
          .fill()
          .map((_, index) => (
            <OrderPanel key={index} />
          ))}
      </TabPanel>
      <TabPanel value={value} index={1}>
        <ProfileDetails />
      </TabPanel>
      <TabPanel value={value} index={2}>
        {Array(5)
          .fill()
          .map((_, index) => (
            <OrderPanel key={index} />
          ))}
      </TabPanel>
      <TabPanel value={value} index={3}>
        {Array(15)
          .fill()
          .map((_, index) => (
            <OrderPanel key={index} />
          ))}
      </TabPanel>
    </Box>
  );
}
