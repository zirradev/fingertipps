import React from "react";
import {
  Box,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Container,
  IconButton,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { CgUserList } from "react-icons/cg";

import TabSection from "./TabSection";

const Order = () => {
  const theme = useTheme();
  const medium = useMediaQuery(theme.breakpoints.down("md"));
  const [location, setLocation] = React.useState("");

  const handleChange = (event) => {
    setLocation(event.target.value);
  };
  return (
    <Box>
      <Container>
        <Box sx={{ padding: !medium ? "20px" : "20px 0px" }}>
          <Box display="flex" justifyContent="space-between">
            <Box>
              <FormControl sx={{ minWidth: 120 }}>
                <InputLabel id="demo-simple-select-label">Location</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={location}
                  label="Location"
                  onChange={handleChange}
                >
                  <MenuItem value="caf-1">Cafeteria 1</MenuItem>
                  <MenuItem value="caf-2">Cafeteria 2</MenuItem>
                  <MenuItem value="captain-cook">Captain Cook</MenuItem>
                  <MenuItem value="caf-3">Med Cafe</MenuItem>
                  <MenuItem value="staff-caf">Staff Cafeteria</MenuItem>
                </Select>
              </FormControl>
            </Box>
            <Box
              display="flex"
              justifyContent="center"
              alignItems="center"
              sx={{ gap: "10px" }}
            >
              <IconButton>
                <AiOutlineShoppingCart />
              </IconButton>
              <IconButton>
                <CgUserList />
              </IconButton>
            </Box>
          </Box>

          <Box>
            <TabSection />
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Order;
