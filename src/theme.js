import { lightBlue } from "@mui/material/colors";
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#077BCE",
    },
    secondary: {
      main: "#FF7B17",
    },
  },
  typography: {
    button: {
      textTransform: "none",
    },
  },
});
export default theme;
