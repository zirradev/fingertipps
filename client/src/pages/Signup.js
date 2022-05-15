import * as React from "react";
import Box from "@mui/material/Box";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import FormHelperText from "@mui/material/FormHelperText";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import OutlinedInput from "@mui/material/OutlinedInput";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import "./Signup.css";

export default function ComposedTextField() {
  const [name, setName] = React.useState(" ");
  const [email, setEmail] = React.useState(" ");
  const [phone, setPhone] = React.useState("");
  const [password, setPassword] = React.useState(" ");
  const [checked, setChecked] = React.useState(true);

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

  return (
    <section className="signup">
      <div className="signup_contents">
        <h1>Welcome</h1>
        <Box
          component="form"
          sx={{
            "& > :not(style)": { m: 1 },
          }}
          noValidate
          autoComplete="off"
          className="signup-form"
        >
          <FormControl fullWidth>
            <InputLabel htmlFor="component-outlined">Name</InputLabel>
            <OutlinedInput
              id="component-outlined"
              value={name}
              onChange={handleChange}
              label="Name"
            />
            <FormHelperText id="component-helper-text">
              Required*
            </FormHelperText>
          </FormControl>
          <FormControl fullWidth>
            <InputLabel htmlFor="component-outlined">Email</InputLabel>
            <OutlinedInput
              id="component-outlined"
              value={email}
              onChange={handleChange}
              label="Email"
              type="email"
            />
            <FormHelperText id="component-helper-text">
              Required*
            </FormHelperText>
          </FormControl>
          <FormControl fullWidth>
            <InputLabel htmlFor="component-outlined">Phone</InputLabel>
            <OutlinedInput
              id="component-outlined"
              value={phone}
              onChange={handleChange}
              label="Phone"
              type="tel"
            />
            <FormHelperText>Required*</FormHelperText>
          </FormControl>
          <FormControl fullWidth>
            <InputLabel htmlFor="component-outlined">Password</InputLabel>
            <OutlinedInput
              id="component-outlined"
              value={password}
              onChange={handleChange}
              label="Password"
              type="password"
            />
            <FormHelperText id="component-helper-text">
              Required*
            </FormHelperText>
          </FormControl>
          <FormControlLabel
            control={<Checkbox />}
            label={
              <>
                Accept{" "}
                <a
                  href="#"
                  style={{ textDecoration: "none", color: "var(--color-blue)" }}
                >
                  terms and conditions
                </a>
              </>
            }
          />
        </Box>
      </div>
    </section>
  );
}
