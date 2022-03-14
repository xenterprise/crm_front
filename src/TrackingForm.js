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

export default function ValidationTextFields() {
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
          "& .MuiTextField-root": { m: 1, width: "25ch" },
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

        <div>
          <FormControl fullwidth sx={{ m: 1, width: "25ch" }}>
            <InputLabel id="demo-simple-select-helper-label">
              Service Type
            </InputLabel>
            <Select
              labelId="demo-simple-select-helper-label"
              id="demo-simple-select-helper"
              variant="outlined"
              value={age}
              label="Service Type"
              onChange={handleChange}
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={10}>SECP</MenuItem>
              <MenuItem value={20}>FBR</MenuItem>
              <MenuItem value={30}>AEDB</MenuItem>
            </Select>
          </FormControl>
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DatePicker
              label="Agreement Date"
              value={dateValue}
              onChange={(newValue) => {
                setDateValue(newValue);
              }}
              renderInput={(params) => <TextField {...params} />}
            />
          </LocalizationProvider>
        </div>

        <div>
          <TextField
            id="outlined-basic"
            label="Service Details"
            variant="outlined"
            fullwidth="true"
          />
        </div>

        <Divider variant="middle">
          <Chip label="Contact" color="primary" variant="outlined" />
        </Divider>
        <div>
          <TextField
            id="outlined-basic"
            label="Focal Person"
            variant="outlined"
          />

          <TextField
            id="outlined-basic"
            label="Company Name"
            variant="outlined"
          />
        </div>
        <div>
          <TextField
            id="outlined-basic"
            label="Contact Number"
            variant="outlined"
          />
          <TextField
            id="outlined-basic"
            label="City"
            variant="outlined"
            fullwidth="true"
          />
        </div>
        <Divider variant="middle">
          <Chip label="Payment" color="primary" variant="outlined" />
        </Divider>
        <div>
          <TextField id="outlined-basic" label="Total" variant="outlined" />

          <TextField id="outlined-basic" label="Received" variant="outlined" />
        </div>

        <Divider variant="middle">
          <Chip label="Status Update" color="primary" variant="outlined" />
        </Divider>
        <div>
          <FormControl sx={{ m: 1, width: "25ch" }} variant="outlined">
            <InputLabel htmlFor="filled-adornment-password">
              Status Update
            </InputLabel>
            <OutlinedInput
              id="filled-adornment-password"
              type={"text"}
              value={""}
              onChange={""}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={""}
                    onMouseDown={""}
                    edge="end"
                  >
                    <CheckCircleIcon />
                  </IconButton>
                </InputAdornment>
              }
              label="Status Update"
            />
          </FormControl>
        </div>
        <Divider variant="middle">
          <Chip label="Status Log" color="primary" variant="outlined" />
        </Divider>
      </Box>
    </>
  );
}
