import React from "react";
import {
  Container,
  Box,
  useTheme,
  useMediaQuery,
  Button,
  Typography,
} from "@mui/material";
import { BiArrowBack } from "react-icons/bi";
import { useNavigate } from "react-router-dom";

import TabSection from "./TabSection";

const Profile = () => {
  const theme = useTheme();
  const navigate = useNavigate();
  const medium = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <Box>
      <Container>
        <Box sx={{ padding: !medium ? "20px" : "20px 0px" }}>
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
          >
            <Box display="flex" sx={{ gap: 2 }}>
              <Button variant="outlined" onClick={() => navigate(-1)}>
                <BiArrowBack />
              </Button>
              <Typography variant="h5">Profile</Typography>
            </Box>
            <Box>
              <Button variant="contained" onClick={() => navigate("/signin")}>
                Log Out
              </Button>
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

export default Profile;
