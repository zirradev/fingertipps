import React from "react";
import {
  Box,
  Button,
  Container,
  Grid,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import FoodCard from "../components/FoodCard";
import { Link } from "react-router-dom";

const Home = () => {
  const theme = useTheme();
  const medium = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <Box>
      <Container maxWidth="large">
        <Grid container spacing={2} sx={{ minHeight: "100vh" }}>
          <Grid item lg={6} md={6} sm={12}>
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
                  Let's solve hunger together
                </Typography>
                <Typography component="p">
                  Get your food delivered to your hostel
                </Typography>
                {!medium && (
                  <Box sx={{ marginTop: "20px" }}>
                    <Button variant="contained" component={Link} to="/order">
                      Get Started
                    </Button>
                  </Box>
                )}
              </Box>
            </Box>
          </Grid>
          <Grid item lg={6} md={6} sm={12}>
            <Box
              sx={{
                overflowX: "hidden",
                height: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: medium && "column",
              }}
            >
              <FoodCard />
              {medium && (
                <Box sx={{ marginTop: "20px", padding: "20px" }}>
                  <Button
                    variant="contained"
                    fullWidth
                    component={Link}
                    to="/order"
                  >
                    Get Started
                  </Button>
                </Box>
              )}
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Home;
