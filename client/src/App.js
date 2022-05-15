import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider, createTheme } from "@mui/material/styles/";
import Profile from "./pages/Profile";
import Home from "./pages/Home";
import Signup from "./pages/Signup";

const outerTheme = createTheme({
  palette: {
    secondary: {
      main: "#fff",
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={outerTheme}>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/profile" element={<Profile />} />
          <Route exact path="/Signup" element={<Signup />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
