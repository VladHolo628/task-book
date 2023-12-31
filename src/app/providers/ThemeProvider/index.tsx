import { FC } from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { IThemeProvider } from "./types";

export const Theme: FC<IThemeProvider> = ({ children }) => {
  const theme = createTheme({
    palette: {
      mode: "light",
      primary: {
        main: "#29A19C",
      },
      secondary: {
        main: "#ECCA75",
      },
      text: {
        primary: "#282846",
      },
      background: {
        default: "#FAFAFA",
        paper: "#FAFAFA",
      },
      error: {
        main: "#F05454",
      },
    },
    typography: {
      fontFamily: "Nunito, Roboto",
      fontSize: 16,
    },
  });

  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};
