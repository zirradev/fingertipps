import React from "react";
import Box from "@mui/material/Box";
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
  CircularProgress,
} from "@mui/material";
import { AiOutlineClose } from "react-icons/ai";
import GoogleLoginComponent from "./Googlelogin";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import GoogleButton from "react-google-button";
import { Formik } from "formik";
import * as Yup from "yup";

import { signin } from "../APICalls/auth";
import "./Signin.css";

const Signin = () => {
  const [values, setValues] = React.useState({
    email: "",
    password: "",
  });
  const [checked, setChecked] = React.useState(false);
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
            <div className="close">
              <a href="/">
                <AiOutlineClose />
              </a>
            </div>
            <h1>Look who it is!</h1>
          </div>
          <Formik
            initialValues={{
              email: "",
              password: "",
            }}
            validationSchema={Yup.object().shape({
              email: Yup.string()
                .email("Must be a valid email address.")
                .required("Email Address is required"),
              password: Yup.string().required("Password is required"),
            })}
            onSubmit={async (values) => {
              await signin(values)
                .then((res) => {
                  console.log(res);
                })
                .catch((err) => {
                  console.log(err.message);
                });
            }}
          >
            {({
              handleSubmit,
              values,
              handleChange,
              isSubmitting,
              errors,
              touched,
            }) => (
              <Box
                component="form"
                sx={{
                  "& > :not(style)": { m: 1 },
                }}
                noValidate
                autoComplete="off"
                className="signin-form"
                onSubmit={handleSubmit}
              >
                <FormControl
                  fullWidth
                  error={Boolean(touched.email && errors.email)}
                >
                  <InputLabel htmlFor="component-outlined">Email</InputLabel>
                  <OutlinedInput
                    id="component-outlined"
                    value={values.email}
                    onChange={handleChange}
                    label="Email"
                    type="email"
                    name="email"
                    required
                  />
                  <FormHelperText
                    error={Boolean(touched.email && errors.email)}
                    id="component-helper-text"
                  >
                    {touched.email && errors.email ? errors.email : "Required*"}
                  </FormHelperText>
                </FormControl>
                <FormControl
                  sx={{ m: 1 }}
                  variant="outlined"
                  fullWidth
                  error={Boolean(touched.password && errors.password)}
                >
                  <InputLabel htmlFor="outlined-adornment-password">
                    Password
                  </InputLabel>
                  <OutlinedInput
                    id="outlined-adornment-password"
                    type={values.showPassword ? "text" : "password"}
                    value={values.password}
                    onChange={handleChange}
                    name="password"
                    endAdornment={
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={handleClickShowPassword}
                          onMouseDown={handleMouseDownPassword}
                          edge="end"
                        >
                          {values.showPassword ? (
                            <VisibilityOff />
                          ) : (
                            <Visibility />
                          )}
                        </IconButton>
                      </InputAdornment>
                    }
                    label="Password"
                    required
                  />

                  <FormHelperText
                    error={Boolean(touched.password && errors.password)}
                    id="component-helper-text"
                  >
                    {touched.password && errors.password
                      ? errors.password
                      : "Required*"}
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
                      <div
                        className="checklabel"
                        style={{
                          color: "#9C9C9C",
                          fontSize: "16px",
                          lineHeight: "20px",
                          fontWeight: "normal",
                          fontfamily: "Montserrat, sans-serif",
                        }}
                      >
                        Remember me
                      </div>
                    </>
                  }
                />
                <Button
                  variant="contained"
                  type="submit"
                  color="primary"
                  disabled={isSubmitting}
                  sx={{
                    width: "100%",
                    height: "50px",
                    fontSize: "16px",
                    fontStyle: "normal",
                    fontWeight: "500",
                    borderRadius: "8px",
                    border: "1px solid var(--color)",
                    backgroundColor: "var(--color)",
                    color: "#fff",
                    "&:hover": {
                      backgroundColor: "var(--color)",
                      color: "white",
                    },
                  }}
                >
                  {isSubmitting ? (
                    <CircularProgress sx={{ color: "#fff" }} />
                  ) : (
                    "Sign In"
                  )}
                </Button>
                <div className="signin_social">
                  <div className="divider">Or Sign In With</div>
                  <div className="signin_social_icons">
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
                <div className="sufp">
                  <div className="sigup">
                    <a href="/signup">
                      <span>Sign Up</span>
                    </a>
                  </div>
                  <div className="fpassword">
                    <a href="/fpassword">
                      <span>Forgot Password?</span>
                    </a>
                  </div>
                </div>
              </Box>
            )}
          </Formik>
        </div>
      </div>
    </section>
  );
};

export default Signin;
