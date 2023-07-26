import "./index.css";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { Container } from "@mui/material";

import Button from "@mui/material/Button";

function App() {
  return (
    <Container sx={{ py: 5 }}>
      <Button variant="contained" color="success">
        Click Me!
      </Button>
    </Container>
  );
}

export default App;
