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
import { AiOutlineClose } from "react-icons/ai";
import GoogleLoginComponent from "./Googlelogin";
import Button from "@mui/material/Button";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import IconButton from "@mui/material/IconButton";

export default function ComposedTextField() {
  const [values, setValues] = React.useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    showPassword: false,
  });
  const [checked, setChecked] = React.useState(false);
  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
    setChecked(event.target.checked);
  };

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <section className="signup">
      <div className="signup_contents">
        <div className="title">
          <AiOutlineClose />
          <h1>Welcome</h1>
        </div>
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
              value={values.name}
              onChange={handleChange("name")}
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
              value={values.email}
              onChange={handleChange("email")}
              label="Email"
              type="email"
            />
            <FormHelperText id="component-helper-text">
              Required*
            </FormHelperText>
          </FormControl>
          <FormControl fullWidth sx={{ m: 1 }}>
            <InputLabel htmlFor="component-outlined">Tel</InputLabel>
            <OutlinedInput
              id="component-outlined"
              value={values.phone}
              onChange={handleChange("phone")}
              startAdornment={
                <InputAdornment position="start">+234</InputAdornment>
              }
              label="Amount"
            />
            <FormHelperText id="component-helper-text">
              Required*
            </FormHelperText>
          </FormControl>
          <FormControl sx={{ m: 1 }} variant="outlined" fullWidth>
            <InputLabel htmlFor="outlined-adornment-password">
              Password
            </InputLabel>
            <OutlinedInput
              id="outlined-adornment-password"
              type={values.showPassword ? "text" : "password"}
              value={values.password}
              onChange={handleChange("password")}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {values.showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
              label="Password"
            />

            <FormHelperText id="component-helper-text">
              Required*
            </FormHelperText>
          </FormControl>
          <FormControlLabel
            control={
              <Checkbox
                value={checked}
                style={{ color: "var(--color-blue)" }}
              />
            }
            label={
              <>
                Agree with{" "}
                <a
                  href="#"
                  style={{ textDecoration: "none", color: "var(--color-blue)" }}
                >
                  Terms & Conditions
                </a>
              </>
            }
          />
          <div className="button">
            <Button variant="contained" sx={{ background: "var(--color)" }}>
              Sign Up
            </Button>
          </div>
        </Box>
      </div>
      <div className="other_signup">
        <div className="divider">OR SIGN UP WITH</div>
        <div className="google_signup">{/* <GoogleLoginComponent /> */}</div>
      </div>
    </section>
  );
}
