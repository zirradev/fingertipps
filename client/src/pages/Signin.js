import React from "react";
import Box from "@mui/material/Box";
import "./Signin.css";
import {
  InputAdornment,
  FormControl,
  FormHelperText,
  InputLabel,
  OutlinedInput,
  FormControlLabel,
  Button,
  IconButton,
  Checkbox,
} from "@mui/material";
import { AiOutlineClose } from "react-icons/ai";
import GoogleLoginComponent from "./Googlelogin";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import GoogleButton from "react-google-button";

const Signin = () => {
  const [values, setValues] = React.useState({
    email: "",
    password: "",
  });
  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
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
    <section className="signin">
      <div className="signpage">
        <div className="signin_contents">
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
          >
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
            <Button
              variant="contained"
              color="primary"
              sx={{
                width: "100%",
                height: "50px",
                fontSize: "1.5rem",
                fontWeight: "bold",
                borderRadius: "0",
                border: "1px solid var(--color)",
                backgroundColor: "var(--color)",
                color: "white",
                "&:hover": {
                  backgroundColor: "var(--color)",
                  color: "white",
                },
              }}
            >
              Sign In
            </Button>
            <div className="signin_social">
              <div className="signin_social_text">
                <p>Or Sign In With</p>
              </div>
              <div className="signin_social_icons">
                <GoogleButton
                  onClick={() => {
                    alert("Google button clicked");
                  }}
                  type="light"
                  label="Sign Up with Google"
                />
              </div>
            </div>
          </Box>
        </div>
      </div>
    </section>
  );
};

export default Signin;
