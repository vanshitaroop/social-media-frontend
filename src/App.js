// import './App.css';
import { BrowserRouter, Navigate, Routes, Route } from "react-router-dom";
import Homepage from "./scenes/homePage";
import LoginPage from "./scenes/loginPage";
import ProfilePage from "./scenes/profilePage";
import { useMemo } from "react";
import { UseSelector, useSelector } from "react-redux/es/hooks/useSelector";
import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import { themeSettings } from "./theme";
function App() {
  const mode = useSelector((state) => state.mode);
  // Use useMemo when you want to memoize a value and recalculate it only when certain dependencies change.
  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);
  return (
    <div className="App">
      <BrowserRouter>
       <ThemeProvider theme={theme}>
        <CssBaseline/>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/home" element={<Homepage />} />
          <Route path="/profile/:userId" element={<ProfilePage />} />
        </Routes>
       </ThemeProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
