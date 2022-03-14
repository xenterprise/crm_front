import React from "react";
import { ThemeProvider } from "@emotion/react";
import {
  Box,
  Button,
  Card,
  Checkbox,
  FormControlLabel,
  Grid,
  InputAdornment,
  OutlinedInput,
  TextField,
  Typography,
} from "@mui/material";
import { teal, lightBlue } from "@mui/material/colors";
import { createTheme } from "@mui/material/styles";
import CalendarPicker from "@mui/lab/CalendarPicker";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

import theme from "./theme";
import { DesktopDatePicker } from "@mui/lab";

function MainLeadForm() {
  const [date, setDate] = React.useState(new Date());

  return (
    <div>
      <ThemeProvider theme={theme}>
        <h1>Hello Visitor!</h1>

        <p>Welcome to Site of DynoWays CRM</p>
      </ThemeProvider>
    </div>
  );
}

export default MainLeadForm;
