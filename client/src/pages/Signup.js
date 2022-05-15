import * as React from "react";
import Box from "@mui/material/Box";
import "./Signup.css";
import {
  InputAdornment,
  FormControl,
  FormHelperText,
  InputLabel,
  OutlinedInput,
  FormControlLabel,
  Checkbox,
  Button,
  IconButton,
} from "@mui/material";
import { AiOutlineClose } from "react-icons/ai";
import GoogleLoginComponent from "./Googlelogin";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import GoogleButton from "react-google-button";

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
      <div className="signpage">
        <div className="signup_contents">
          <div className="title">
            <a href="/">
              <AiOutlineClose />
            </a>
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
              <InputLabel htmlFor="component-outlined">Phone</InputLabel>
              <OutlinedInput
                id="component-outlined"
                value={values.phone}
                onChange={handleChange("phone")}
                startAdornment={
                  <InputAdornment position="start">+234</InputAdornment>
                }
                label="Phone"
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
                    href="#terms"
                    style={{
                      textDecoration: "none",
                      color: "var(--color-blue)",
                    }}
                  >
                    Terms & Conditions
                  </a>
                </>
              }
            />
            <div className="button">
              <Button
                variant="contained"
                sx={{ background: "var(--color)" }}
                type="submit"
              >
                Sign Up
              </Button>
            </div>
          </Box>
        </div>
        <div className="other_signup">
          <div className="divider">OR SIGN UP WITH</div>
          <div className="google_signup">
            {/* <GoogleLoginComponent /> */}
            <center>
              <GoogleButton
                onClick={() => {
                  alert("Google button clicked");
                }}
                type="light"
                label="Sign Up with Google"
              />
            </center>
          </div>
        </div>
      </div>
    </section>
  );
}
