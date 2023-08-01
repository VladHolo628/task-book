import { CssBaseline } from "@mui/material";
import { AuthorizePage } from "../pages/AuthorizePage";
import { Theme } from "./providers/ThemeProvider";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./index.css";
import { AppPage } from "@/pages/AppPage";

import { RegisterPage } from "@/pages/RegisterPage";
import { HomePage } from "@/pages/HomePage";
import { FamilyPage } from "@/pages/FamilyPage";
import { SportPage } from "@/pages/SportPage";
import { WorkPage } from "@/pages/WorkPage";

function App() {
  return (
    <Theme>
      <CssBaseline />
      <Router>
        <Routes>
          <Route path="/*" element={<AppPage />}>
            <Route path="home" element={<HomePage />} />
            <Route path="family" element={<FamilyPage />} />
            <Route path="sport" element={<SportPage />} />
            <Route path="work" element={<WorkPage />} />
          </Route>
          <Route path="/login" element={<AuthorizePage />} />
          <Route path="/register" element={<RegisterPage />} />
        </Routes>
      </Router>
    </Theme>
  );
}

export default App;
