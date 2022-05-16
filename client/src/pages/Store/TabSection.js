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
      {value === index && <Box sx={{ py: 2 }}>{children}</Box>}
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
  const [quantity, setQuantity] = React.useState(1);

  const handleChange = (action) => {
    if (quantity > 0 && quantity <= 20) {
      if (action === "add") {
        quantity !== 20 && setQuantity((prev) => prev + 1);
      } else {
        quantity !== 1 && setQuantity((prev) => prev - 1);
      }
    }
  };

  return (
    <Box
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      sx={{ my: 2, borderBottom: "1px solid #efefef", py: 2 }}
    >
      <Box sx={{ textAlign: "center" }}>
        <Typography component="p">Jollof Rice</Typography>
        <Box sx={{ mt: 1 }}>
          <Button variant="outlined" onClick={() => handleChange("minus")}>
            <FiMinus />
          </Button>
          <span style={{ padding: "20px" }}>{quantity}</span>
          <Button variant="outlined" onClick={() => handleChange("add")}>
            <IoAdd />
          </Button>
        </Box>
      </Box>
      <Box sx={{ textAlign: "center" }}>
        <Typography component="p">
          <Currency />
          100
        </Typography>
        <Button variant="contained" sx={{ mt: 1 }}>
          Add
        </Button>
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
    <Box sx={{ width: "100%", mt: 5 }}>
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
          .map((_, index) => (
            <FoodPanel key={index} />
          ))}
      </TabPanel>
      <TabPanel value={value} index={1}>
        {Array(2)
          .fill()
          .map((_, index) => (
            <FoodPanel key={index} />
          ))}
      </TabPanel>
      <TabPanel value={value} index={2}>
        {Array(5)
          .fill()
          .map((_, index) => (
            <FoodPanel key={index} />
          ))}
      </TabPanel>
      <TabPanel value={value} index={3}>
        {Array(15)
          .fill()
          .map((_, index) => (
            <FoodPanel key={index} />
          ))}
      </TabPanel>
    </Box>
  );
}
