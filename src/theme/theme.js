import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
  components: {
    MuiBox: {
      styleOverrides: {
        root: {
          
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          color: "green",
          fontSize: "1rem",
        },
      },
    },
  },
});

export const MyThemeProvider = ({ children }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};
