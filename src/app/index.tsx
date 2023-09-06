import { CssBaseline } from "@mui/material";
import { Theme } from "./providers/ThemeProvider";

import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import "./index.css";
import { AppRouter } from "./AppRouter";

function App() {
  const client = new QueryClient();

  return (
    <QueryClientProvider client={client}>
      <Theme>
        <CssBaseline />
        <AppRouter />
      </Theme>
    </QueryClientProvider>
  );
}

export default App;
