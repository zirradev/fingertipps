import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider, createTheme } from "@mui/material/styles/";
import Home from "./pages/Home";
import Checkout from "./pages/Checkout";


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
          <Route exact path="/checkout" element = {<Checkout />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
