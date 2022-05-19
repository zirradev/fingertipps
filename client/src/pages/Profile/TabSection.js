import * as React from "react";
import PropTypes from "prop-types";
import {
  Box,
  Button,
  Card,
  CardActionArea,
  Typography,
  Tab,
  Tabs,
  CardContent,
  TextField,
  Grid,
  FormControl,
  Select,
  InputLabel,
  MenuItem,
} from "@mui/material";
import { Email, Instagram, WhatsApp } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

import { useAuth } from "../../context/useAuthContext";

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
  const navigate = useNavigate();
  return (
    <Card sx={{ my: 2 }}>
      <CardActionArea onClick={() => navigate("/order")}>
        <CardContent>
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
          >
            <Box>
              <Typography component="p">#2567HT3</Typography>
              <Typography component="p">23 Apr 2022</Typography>
              <Typography component="p">
                <Currency /> 2300
              </Typography>
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
  const { loggedInUser } = useAuth();
  const [location, setLocation] = React.useState("");

  const handleChange = (event) => {
    setLocation(event.target.value);
  };
  return (
    <Box>
      <form>
        <Grid container spacing={2}>
          <Grid item md={6} xs={12}>
            <TextField
              label="Name"
              type="text"
              fullWidth
              value={loggedInUser.name}
            />
          </Grid>
          <Grid item md={6} xs={12}>
            <TextField
              label="Email Address"
              type="text"
              fullWidth
              value={loggedInUser.email}
            />
          </Grid>
          <Grid item md={6} xs={12}>
            <TextField
              label="Phone"
              type="text"
              value={loggedInUser.phone}
              fullWidth
            />
          </Grid>
          <Grid item md={6} xs={12}>
            <FormControl sx={{ minWidth: 120 }} fullWidth>
              <InputLabel id="select-location-label">Location</InputLabel>
              <Select
                labelId="select-location-label"
                id="select-location"
                value={location}
                label="Location"
                onChange={handleChange}
              >
                <MenuItem value="caf-1">Male Hostel 1 (Jamaica)</MenuItem>
                <MenuItem value="caf-2">Male Hostel 2 (Kuvuki)</MenuItem>
                <MenuItem value="captain-cook">Female Hostel 1</MenuItem>
                <MenuItem value="caf-3">Female Hostel 2</MenuItem>
              </Select>
            </FormControl>
          </Grid>
        </Grid>
        <Box
          sx={{
            mt: 5,
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            gap: 4,
          }}
        >
          <Button variant="outlined" fullWidth>
            Reset Password
          </Button>
          <Button variant="contained" fullWidth>
            Save
          </Button>
        </Box>
      </form>
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
      <Box
        sx={{
          borderBottom: 1,
          borderColor: "divider",
          position: "sticky",
          top: "0px",
          zIndex: 10,
          backgroundColor: "#fff",
        }}
      >
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab label="Orders" {...a11yProps(0)} />
          <Tab label="Details" {...a11yProps(1)} />
          <Tab label="Contact Us" {...a11yProps(2)} />
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
        <Box sx={{ py: 3 }}>
          <Box sx={{ my: 5 }}>
            <Typography variant="h5">
              For any complaint or review. Fell free to contact us here
            </Typography>
          </Box>
          <Box
            display="flex"
            flexDirection="column"
            justifyContent="center"
            sx={{ gap: 2 }}
          >
            <Typography
              sx={{
                display: "flex",
                alignSelf: "flex-start",
                justifyContent: "center",
                gap: 2,
              }}
            >
              <Email /> contact@abuadeats.com
            </Typography>
            <Typography
              sx={{
                display: "flex",
                alignSelf: "flex-start",
                justifyContent: "center",
                gap: 2,
              }}
            >
              <Instagram /> @abuadeats
            </Typography>
            <Typography
              sx={{
                display: "flex",
                alignSelf: "flex-start",
                justifyContent: "center",
                gap: 2,
              }}
            >
              <WhatsApp /> +234 80671273 231
            </Typography>
          </Box>
          <Box display="flex" flexDirection="column" sx={{ mt: 5, gap: 2 }}>
            <Button variant="outlined">Send Us a Mail</Button>
            <Button variant="contained">Call Us Today</Button>
          </Box>
        </Box>
      </TabPanel>
    </Box>
  );
}
