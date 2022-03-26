import React from "react";
import { ThemeProvider } from "@emotion/react";
import {
  Avatar,
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Checkbox,
  FormControlLabel,
  Grid,
  IconButton,
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
import MoreVertIcon from "@mui/icons-material/MoreVert";
import PersonIcon from "@mui/icons-material/Person";
import ApartmentIcon from "@mui/icons-material/Apartment";
import AccountTreeIcon from "@mui/icons-material/AccountTree";

import Theme from "./theme";
import { DesktopDatePicker } from "@mui/lab";

function MainLeadForm() {
  const [date, setDate] = React.useState(new Date());

  return (
    <div>
      <ThemeProvider theme={Theme}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-around",
            my: 5,
            mx: 5,
          }}
        >

          <Box
            sx={{
              maxWidth: 400,
            }}
          >
            <Card sx={{ px: 2 }}>
              <CardHeader
                avatar={
                  <Avatar sx={{ bgcolor: "#FF7B17" }} aria-label="recipe">
                    <ApartmentIcon />
                  </Avatar>
                }
                action={
                  <IconButton aria-label="settings">
                    <MoreVertIcon />
                  </IconButton>
                }
                title="Contact"
                // subheader="September 14, 2016"
              />
              <CardContent>
                <TextField
                  fullWidth
                  color="secondary"
                  id="1"
                  label="Name"
                  //   defaultValue=" "
                  //helperText="Placeholder for error"
                  sx={{
                    my: 2,
                  }}
                />
                <TextField
                  fullWidth
                  color="secondary"
                  id="payment-ref"
                  label="Email"
                  //   defaultValue=" "
                  //helperText="Placeholder for error"
                  sx={{
                    my: 2,
                  }}
                />
                <TextField
                  fullWidth
                  color="secondary"
                  id="payment-ref"
                  label="Status"
                  //   defaultValue=" "
                  //helperText="Placeholder for error"
                  sx={{
                    my: 2,
                  }}
                />
                <TextField
                  fullWidth
                  color="secondary"
                  id="payment-ref"
                  label="Address"
                  //   defaultValue=" "
                  //helperText="Placeholder for error"
                  sx={{
                    my: 2,
                  }}
                />
                <TextField
                  fullWidth
                  color="secondary"
                  id="payment-ref"
                  label="City"
                  //   defaultValue=" "
                  //helperText="Placeholder for error"
                  sx={{
                    my: 2,
                  }}
                />
                <TextField
                  fullWidth
                  color="secondary"
                  id="payment-ref"
                  label="State/Province"
                  //   defaultValue=" "
                  //helperText="Placeholder for error"
                  sx={{
                    my: 2,
                  }}
                />
                <TextField
                  fullWidth
                  color="secondary"
                  id="payment-ref"
                  label="Phone"
                  //   defaultValue=" "
                  //helperText="Placeholder for error"
                  sx={{
                    my: 2,
                  }}
                />
                <TextField
                  fullWidth
                  color="secondary"
                  id="payment-ref"
                  label="Cell"
                  //   defaultValue=" "
                  //helperText="Placeholder for error"
                  sx={{
                    my: 2,
                  }}
                />
              </CardContent>
              <CardActions>
                <Button size="small">Save</Button>
              </CardActions>
            </Card>
          </Box>

          <Box
            sx={{
              maxWidth: 400,
            }}
          >
            <Card sx={{ mx: 1 }}>
              <CardHeader
                avatar={
                  <>
                    <Avatar sx={{ bgcolor: "#FF7B17" }} aria-label="recipe">
                      <PersonIcon />
                    </Avatar>
                  </>
                }
                action={
                  <IconButton aria-label="settings">
                    <MoreVertIcon />
                  </IconButton>
                }
                title="Company"
                // subheader="September 14, 2016"
              />
              <CardContent>
                <TextField
                  fullWidth
                  color="secondary"
                  id="1"
                  label="Name"
                  //   defaultValue=" "
                  //helperText="Placeholder for error"
                  sx={{
                    my: 2,
                  }}
                />
                <TextField
                  fullWidth
                  color="secondary"
                  id="payment-ref"
                  label="License"
                  //   defaultValue=" "
                  //helperText="Placeholder for error"
                  sx={{
                    my: 2,
                  }}
                />
                <TextField
                  fullWidth
                  color="secondary"
                  id="payment-ref"
                  label="SR"
                  //   defaultValue=" "
                  //helperText="Placeholder for error"
                  sx={{
                    my: 2,
                  }}
                />
                <TextField
                  fullWidth
                  color="secondary"
                  id="payment-ref"
                  label="Validity"
                  //   defaultValue=" "
                  //helperText="Placeholder for error"
                  sx={{
                    my: 2,
                  }}
                />
                <TextField
                  fullWidth
                  color="secondary"
                  id="payment-ref"
                  label="Phone"
                  //   defaultValue=" "
                  //helperText="Placeholder for error"
                  sx={{
                    my: 2,
                  }}
                />
                <TextField
                  fullWidth
                  color="secondary"
                  id="payment-ref"
                  label="Fax"
                  //   defaultValue=" "
                  //helperText="Placeholder for error"
                  sx={{
                    my: 2,
                  }}
                />
                <TextField
                  fullWidth
                  color="secondary"
                  id="payment-ref"
                  label="Email"
                  //   defaultValue=" "
                  //helperText="Placeholder for error"
                  sx={{
                    my: 2,
                  }}
                />
                <TextField
                  fullWidth
                  color="secondary"
                  id="payment-ref"
                  label="Address"
                  //   defaultValue=" "
                  //helperText="Placeholder for error"
                  sx={{
                    my: 2,
                  }}
                />
                <TextField
                  fullWidth
                  color="secondary"
                  id="payment-ref"
                  label="City"
                  //   defaultValue=" "
                  //helperText="Placeholder for error"
                  sx={{
                    my: 2,
                  }}
                />
                <TextField
                  fullWidth
                  color="secondary"
                  id="payment-ref"
                  label="Email"
                  //   defaultValue=" "
                  //helperText="Placeholder for error"
                  sx={{
                    my: 2,
                  }}
                />
                 <TextField
                  fullWidth
                  color="secondary"
                  id="payment-ref"
                  label="Country"
                  //   defaultValue=" "
                  //helperText="Placeholder for error"
                  sx={{
                    my: 2,
                  }}
                />
                 <TextField
                  fullWidth
                  color="secondary"
                  id="payment-ref"
                  label="NTN"
                  //   defaultValue=" "
                  //helperText="Placeholder for error"
                  sx={{
                    my: 2,
                  }}
                />
                 <TextField
                  fullWidth
                  color="secondary"
                  id="payment-ref"
                  label="INC_Number"
                  //   defaultValue=" "
                  //helperText="Placeholder for error"
                  sx={{
                    my: 2,
                  }}
                />
                 <TextField
                  fullWidth
                  color="secondary"
                  id="payment-ref"
                  label="PEC_Number"
                  //   defaultValue=" "
                  //helperText="Placeholder for error"
                  sx={{
                    my: 2,
                  }}
                />
                 <TextField
                  fullWidth
                  color="secondary"
                  id="payment-ref"
                  label="GST_Number"
                  //   defaultValue=" "
                  //helperText="Placeholder for error"
                  sx={{
                    my: 2,
                  }}
                />
                 <TextField
                  fullWidth
                  color="secondary"
                  id="payment-ref"
                  label="GST_Effective_Date"
                  //   defaultValue=" "
                  //helperText="Placeholder for error"
                  sx={{
                    my: 2,
                  }}
                />
              </CardContent>
              <CardActions>
                <Button size="small">Save</Button>
              </CardActions>
            </Card>
          </Box>

          <Box
            sx={{
              maxWidth: 400,
            }}
          >
            <Card sx={{}}>
              <CardHeader
                avatar={
                  <Avatar sx={{ bgcolor: "#FF7B17" }} aria-label="recipe">
                    <AccountTreeIcon />
                  </Avatar>
                }
                action={
                  <IconButton aria-label="settings">
                    <MoreVertIcon />
                  </IconButton>
                }
                title="Project"
                // subheader="September 14, 2016"
              />
              <CardContent>
                <TextField
                  fullWidth
                  color="secondary"
                  id="1"
                  label="Name"
                  //   defaultValue=" "
                  //helperText="Placeholder for error"
                  sx={{
                    my: 2,
                  }}
                />
                <TextField
                  fullWidth
                  color="secondary"
                  id="payment-ref"
                  label="Email"
                  //   defaultValue=" "
                  //helperText="Placeholder for error"
                  sx={{
                    my: 2,
                  }}
                />
                <TextField
                  fullWidth
                  color="secondary"
                  id="payment-ref"
                  label="Status"
                  //   defaultValue=" "
                  //helperText="Placeholder for error"
                  sx={{
                    my: 2,
                  }}
                />
                <TextField
                  fullWidth
                  color="secondary"
                  id="payment-ref"
                  label="Address"
                  //   defaultValue=" "
                  //helperText="Placeholder for error"
                  sx={{
                    my: 2,
                  }}
                />
                <TextField
                  fullWidth
                  color="secondary"
                  id="payment-ref"
                  label="City"
                  //   defaultValue=" "
                  //helperText="Placeholder for error"
                  sx={{
                    my: 2,
                  }}
                />
                <TextField
                  fullWidth
                  color="secondary"
                  id="payment-ref"
                  label="State/Province"
                  //   defaultValue=" "
                  //helperText="Placeholder for error"
                  sx={{
                    my: 2,
                  }}
                />
                <TextField
                  fullWidth
                  color="secondary"
                  id="payment-ref"
                  label="Phone"
                  //   defaultValue=" "
                  //helperText="Placeholder for error"
                  sx={{
                    my: 2,
                  }}
                />
                <TextField
                  fullWidth
                  color="secondary"
                  id="payment-ref"
                  label="Cell"
                  //   defaultValue=" "
                  //helperText="Placeholder for error"
                  sx={{
                    my: 2,
                  }}
                />
              </CardContent>
              <CardActions>
                <Button size="small">Save</Button>
              </CardActions>
            </Card>
          </Box>
        </Box>
      </ThemeProvider>
    </div>
  );
}

export default MainLeadForm;
