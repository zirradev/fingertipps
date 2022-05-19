import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  ThemeProvider,
  createTheme,
  responsiveFontSizes,
} from "@mui/material/styles/";
import { Navigate, Outlet } from "react-router-dom";

import Home from "./pages/Home";
import Signup from "./pages/Signup";
import Profile from "./pages/Profile";
import Store from "./pages/Store";
import Checkout from "./pages/Checkout";
import Signin from "./pages/Signin";
import Order from "./pages/Order";
import Forgotpassword from "./pages/Forgotpassword";
import Emailsent from "./pages/Emailsent";
import Resetpassword from "./pages/Resetpassword.js";
import { useAuth } from "./context/useAuthContext";

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
const ProtectedRoute = ({ user, redirectPath = "/" }) => {
  if (!user) {
    return <Navigate to={redirectPath} replace />;
  }
  return <Outlet />;
};

function App() {
  const { loggedInUser } = useAuth();
  return (
    <ThemeProvider theme={outerTheme}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/fpassword" element={<Forgotpassword />} />
          <Route path="/emailsent" element={<Emailsent />} />
          <Route path="/resetpassword" element={<Resetpassword />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route element={<ProtectedRoute user={loggedInUser} />}>
            <Route path="/store" element={<Store />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/order" element={<Order />} />
          </Route>
          <Route path="*" element={<p>There's nothing here: 404!</p>} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
