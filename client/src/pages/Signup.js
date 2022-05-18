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
  CircularProgress,
} from "@mui/material";
import { AiOutlineClose } from "react-icons/ai";
import GoogleLoginComponent from "./Googlelogin";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import GoogleButton from "react-google-button";
import { Formik } from "formik";
import * as Yup from "yup";

import { signup } from "../APICalls/auth";

export default function ComposedTextField() {
  const [showPassword, setShowPassword] = React.useState(false);

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
          <Formik
            initialValues={{
              name: "",
              email: "",
              phone: "",
              password: "",
              checked: false,
            }}
            validationSchema={Yup.object().shape({
              name: Yup.string().required("Your name is required").max(50),
              email: Yup.string()
                .email("Must be a valid email address.")
                .required("Email Address is required"),
              phone: Yup.number().required("Phone Number is required"),
              password: Yup.string().required("Password is required"),
            })}
            onSubmit={async (values) => {
              await signup(values)
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
                className="signup-form"
                onSubmit={handleSubmit}
              >
                <FormControl
                  fullWidth
                  error={Boolean(touched.name && errors.name)}
                >
                  <InputLabel htmlFor="name-form">Name</InputLabel>
                  <OutlinedInput
                    id="name-form"
                    value={values.name}
                    onChange={handleChange}
                    label="Name"
                    name="name"
                    required
                  />
                  <FormHelperText
                    error={Boolean(touched.name && errors.name)}
                    id="component-helper-text"
                  >
                    {touched.name && errors.name ? errors.name : "Required*"}
                  </FormHelperText>
                </FormControl>
                <FormControl
                  fullWidth
                  error={Boolean(touched.email && errors.email)}
                >
                  <InputLabel htmlFor="email-form">Email</InputLabel>
                  <OutlinedInput
                    id="email-form"
                    value={values.email}
                    onChange={handleChange}
                    name="email"
                    label="Email"
                    type="email"
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
                  fullWidth
                  sx={{ m: 1 }}
                  error={Boolean(touched.phone && errors.phone)}
                >
                  <InputLabel htmlFor="phone-form">Phone</InputLabel>
                  <OutlinedInput
                    id="phon-form"
                    value={values.phone}
                    onChange={handleChange}
                    name="phone"
                    startAdornment={
                      <InputAdornment position="start">+234</InputAdornment>
                    }
                    label="Phone"
                    required
                  />
                  <FormHelperText
                    error={Boolean(touched.phone && errors.phone)}
                    id="component-helper-text"
                  >
                    {touched.phone && errors.phone ? errors.phone : "Required*"}
                  </FormHelperText>
                </FormControl>
                <FormControl
                  error={Boolean(touched.password && errors.password)}
                  sx={{ m: 1 }}
                  variant="outlined"
                  fullWidth
                >
                  <InputLabel htmlFor="outlined-adornment-password">
                    Password
                  </InputLabel>
                  <OutlinedInput
                    id="outlined-adornment-password"
                    type={showPassword ? "text" : "password"}
                    value={values.password}
                    onChange={handleChange}
                    name="password"
                    endAdornment={
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={() => setShowPassword((prev) => !prev)}
                          edge="end"
                        >
                          {showPassword ? <VisibilityOff /> : <Visibility />}
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
                      // value={values.checked}
                      name="checked"
                      style={{ color: "var(--color-blue)" }}
                      onChange={handleChange}
                      required
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
                <Button
                  variant="contained"
                  color="primary"
                  type="submit"
                  disabled={!values.checked}
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
                    "Sign Up"
                  )}
                </Button>
              </Box>
            )}
          </Formik>
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
        <div className="instead">
          <a href="/signin">I have an account? Sign in instead</a>
        </div>
      </div>
    </section>
  );
}
