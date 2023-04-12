import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Inventory from "./pages/Inventory";
import Recipes from "./pages/Recipes";
import Settings from "./pages/Settings";
import Feedback from "./pages/Feedback";
import NavBar from "./components/NavBar";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import "./App.css";

const theme = createTheme({
  typography: {
    fontFamily: "Poppins, sans-serif",
  },
  palette: {
    primary: {
      main: "#ffffff",
    },
    text: {
      primary: "#000000",
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          padding: "6px 12px",
          margin: "8px 0",
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          "& .MuiOutlinedInput-input": {
            color: "#000000",
          },
          "& .MuiOutlinedInput-root": {
            "&:hover fieldset": {
              borderColor: "#000000",
            },
            "&.Mui-focused fieldset": {
              borderColor: "#000000",
            },
          },
        },
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          color: "#000000",
          "&.Mui-focused": {
            color: "#000000",
          },
        },
      },
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <NavBar />
        <div className="content">
          <Routes>
            <Route path="/" element={<Inventory />} />
            <Route path="/recipes" element={<Recipes />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/feedback" element={<Feedback />} />
          </Routes>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
