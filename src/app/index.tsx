import { CssBaseline } from "@mui/material";
import { Theme } from "./providers/ThemeProvider";

import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import "./index.css";
import { AppRouter } from "./AppRouter";

const client = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={client}>
      <ReactQueryDevtools />
      <Theme>
        <CssBaseline />
        <AppRouter />
      </Theme>
    </QueryClientProvider>
  );
}

export default App;
