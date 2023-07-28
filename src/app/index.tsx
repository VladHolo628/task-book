import { CssBaseline } from "@mui/material";
import { AuthorizePage } from "../pages/AuthorizePage";
import { Theme } from "./providers/ThemeProvider";
import "./index.css";

function App() {
  return (
    <Theme>
      <CssBaseline />
      <AuthorizePage />
    </Theme>
  );
}

export default App;
