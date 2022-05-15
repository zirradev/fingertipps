import React from 'react';
import { Container, Box, IconButton, useTheme, useMediaQuery, Button, Typography } from "@mui/material";
import { BiArrowBack } from "react-icons/bi";

import TabSection from "./TabSection";

const Profile = () => {
    const theme = useTheme();
  const medium = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <Box>
      <Container>
        <Box sx={{ padding: !medium ? "20px" : "20px 0px" }}>
          <Box display="flex" sx={{ gap: 2 }}>
                <Button variant="outlined">
                    <BiArrowBack />
              </Button> 
              <Typography variant="h5">Profile</Typography>
          </Box>
          <Box>
            <TabSection />
          </Box>
        </Box>
      </Container>
    </Box>
  )
}

export default Profile