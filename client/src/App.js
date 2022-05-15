import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider, createTheme } from "@mui/material/styles/";
import Profile from "./pages/Profile";
import Home from "./pages/Home";
import Signin from "./pages/Signin";

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
        </Routes>
        <Routes>
          <Route exact path="/profile" element={<Profile />} />
        </Routes>
        <Routes>
          <Route exact path="/Signin" element={<Signin />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
