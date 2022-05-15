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

let outerTheme = createTheme({
  palette: {
    primary: {
      main: "#000",
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
        </Routes>
        <Routes>
          <Route exact path="/profile" element={<Profile />} />
        </Routes>
        <Routes>
          <Route exact path="/Signup" element={<Signup />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
