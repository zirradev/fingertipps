import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import { Box, Button } from "@mui/material";
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
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
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

const FoodPanel = () => {
  return (
    <Box
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      sx={{ my: 3 }}
    >
      <Box>
        <Typography component="p">Jollof Rice</Typography>
        <Box>
          <Button variant="outlined">
            <FiMinus />
          </Button>
          <span style={{ padding: "20px" }}>1</span>
          <Button variant="outlined">
            <IoAdd />
          </Button>
        </Box>
      </Box>
      <Box>
        <Typography component="p">
          <Currency />
          100
        </Typography>
      </Box>
    </Box>
  );
};

export default function TabSection() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab label="Meal" {...a11yProps(0)} />
          <Tab label="Protein" {...a11yProps(1)} />
          <Tab label="Snacks" {...a11yProps(2)} />
          <Tab label="Swallow" {...a11yProps(3)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        {Array(10)
          .fill()
          .map((index) => (
            <FoodPanel key={index} />
          ))}
      </TabPanel>
      <TabPanel value={value} index={1}>
        {Array(2)
          .fill()
          .map((index) => (
            <FoodPanel key={index} />
          ))}
      </TabPanel>
      <TabPanel value={value} index={2}>
        {Array(5)
          .fill()
          .map((index) => (
            <FoodPanel key={index} />
          ))}
      </TabPanel>
      <TabPanel value={value} index={2}>
        {Array(15)
          .fill()
          .map((index) => (
            <FoodPanel key={index} />
          ))}
      </TabPanel>
    </Box>
  );
}
