import { createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#4A26AB",
      light: "#9543A7",
      white: "#f5f5fa",
    },
    secondary: {
      main: "#EDE6E3",
      dark: "#737373",
    },
  },
  typography: {
    fontFamily: "Roboto",
  },
  scale: {
    title: "4rem",
    subtitle: "2.5rem",
    subtitle2: "1.5rem",
    paragraph: "1rem",
  },
  overrides: {
    MuiCssBaseline: {
      "@global": {
        body: {
          margin: 0,
          padding: 0,
        },
      },
    },
  },
});

export default theme;
