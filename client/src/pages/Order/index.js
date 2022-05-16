import React from "react";
import {
  useMediaQuery,
  useTheme,
  Box,
  Container,
  Button,
  Typography,
  TableContainer,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  styled,
} from "@mui/material";
import { BiArrowBack } from "react-icons/bi";
import { useNavigate } from "react-router-dom";

const LineTypography = styled(Typography)({
  borderBottom: "1px solid #efefef",
  padding: "10px 0px",
});

const Order = () => {
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
              <Box>
                <Typography variant="h5">Order</Typography>
                <Typography component="p">#456G3HT3</Typography>
              </Box>
            </Box>
            <Box>
              <Typography component="p">23 Apr 2022</Typography>
            </Box>
          </Box>
          <Box>
            <Box>
              <TableContainer>
                <Table>
                  <TableHead>
                    <TableRow>
                      <TableCell>List</TableCell>
                      <TableCell>unit</TableCell>
                      <TableCell>Price</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    <TableRow>
                      <TableCell>Jollof Rice</TableCell>
                      <TableCell>1</TableCell>
                      <TableCell>100</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </TableContainer>
            </Box>

            <Box sx={{ my: 5 }}>
              <LineTypography variant="h5">Delivery</LineTypography>
              <LineTypography component="p">Cafeteria 1</LineTypography>
              <LineTypography component="p">
                Male Hostel 1 (Kuvuki)
              </LineTypography>
              <LineTypography component="p" sx={{ color: "var(--color-good)" }}>
                Pay on Delivery
              </LineTypography>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Order;
