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
import Store from "./pages/Store";
import Checkout from "./pages/Checkout";
import Signin from "./pages/Signin";
import Order from "./pages/Order";
import Forgotpassword from "./pages/Forgotpassword";
import Emailsent from "./pages/Emailsent";
import Resetpassword from "./pages/Resetpassword";

let outerTheme = createTheme({
  palette: {
    primary: {
      main: "#ED1C00",
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
          <Route exact path="/store" element={<Store />} />
          <Route exact path="/profile" element={<Profile />} />
          <Route exact path="/order" element={<Order />} />
          <Route exact path="/Signup" element={<Signup />} />
          <Route exact path="/Signin" element={<Signin />} />
          <Route exact path="/fpassword" element={<Forgotpassword />} />
          <Route exact path="/emailsent" element={<Emailsent />} />
          <Route exact path="/resetpassword" element={<Resetpassword />} />
          <Route exact path="/checkout" element={<Checkout />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
