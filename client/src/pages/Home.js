import React from "react";
import { Box, Button, Container, Grid, Typography } from "@mui/material";
import FoodCard from "../components/FoodCard";

const Home = () => {
  return (
    <Box>
      <Container maxWidth="large">
        <Grid container spacing={2} sx={{ minHeight: "100vh" }}>
          <Grid item lg={6} md={6} sm={6}>
            <Box
              sx={{
                height: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
              }}
            >
              <Box>
                <Typography variant="h2">
                  Discover the world of laziness
                </Typography>
                <Typography component="p">
                  Get your food delivered to your hostel
                </Typography>
                <Box sx={{ marginTop: "20px" }}>
                  <Button variant="contained">Get Started</Button>
                </Box>
              </Box>
            </Box>
          </Grid>
          <Grid item lg={6} md={6} sm={6}>
            <Box
              sx={{
                overflowX: "hidden",
                height: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <FoodCard />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Home;
