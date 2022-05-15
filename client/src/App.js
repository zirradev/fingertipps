import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  ThemeProvider,
  createTheme,
  responsiveFontSizes,
} from "@mui/material/styles/";
import Home from "./pages/Home";
import Signup from "./pages/Signup";
import Profile from "./pages/Profile";
import Order from "./pages/Order";
import Checkout from "./pages/Checkout";

let outerTheme = createTheme({
  palette: {
    primary: {
      main: "#d0320f",
    },
    secondary: {
      main: "#fff",
    },
  },
});

outerTheme = responsiveFontSizes(outerTheme);

function App() {
  return (
    <ThemeProvider theme={outerTheme}>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/order" element={<Order />} />
          <Route exact path="/profile" element={<Profile />} />
          <Route exact path="/Signup" element={<Signup />} />
          <Route exact path="/checkout" element={<Checkout />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
