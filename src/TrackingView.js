import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import MenuItem from "@mui/material/MenuItem";
import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DatePicker from "@mui/lab/DatePicker";
import Divider from "@mui/material/Divider";
import Chip from "@mui/material/Chip";
import IconButton from "@mui/material/IconButton";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import InputAdornment from "@mui/material/InputAdornment";
import FilledInput from "@mui/material/FilledInput";
import OutlinedInput from "@mui/material/OutlinedInput";
import ServiceDetailsCard from "./ServiceDetailsCard";
import PaymentDetailsCard from "./PaymentDetailsCard";
import List from "@mui/material/List";

export default function TrackingView() {
  const [age, setAge] = React.useState("");
  const [dateValue, setDateValue] = React.useState(null);
  const handleChange = (event) => {
    setAge(event.target.value);
  };
  return (
    <>
      <Box
        component="form"
        sx={{
          "& .MuiTextField-root": { m: 1, width: "50ch" },
        }}
        noValidate
        autoComplete="off"
      >
        <Divider variant="middle">
          <Chip
            label="Tracking Code: 5647"
            color="primary"
            variant="outlined"
          />
        </Divider>

        <ServiceDetailsCard />
        <br />
        <PaymentDetailsCard />

        <div></div>

        <Divider variant="middle">
          <Chip label="Status Log" color="primary" variant="outlined" />
        </Divider>
      </Box>
    </>
  );
}
