import React from "react";
import Box from "@mui/material/Box";
import "./Forgotpassword.css";
import {
  FormControl,
  FormHelperText,
  InputLabel,
  OutlinedInput,
  Button,
} from "@mui/material";
import { BsArrowLeft } from "react-icons/bs";

const Forgotpassword = () => {
  const [values, setValues] = React.useState({
    email: "",
  });
  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };
  return (
    <section className="signin">
      <div className="signpage">
        <div className="signin_contents">
          <div className="title">
            <div className="close">
              <a href="/signin">
                <BsArrowLeft />
              </a>
            </div>
            <h1>Reset Password</h1>
          </div>
          <Box
            component="form"
            sx={{
              "& > :not(style)": { m: 1 },
            }}
            noValidate
            autoComplete="off"
            className="signin-form"
          >
            <FormControl fullWidth>
              <InputLabel htmlFor="component-outlined">
                Enter Email Address
              </InputLabel>
              <OutlinedInput
                id="component-outlined"
                value={values.email}
                onChange={handleChange("email")}
                label="Enter Email Address"
                type="email"
                required
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
              Reset
            </Button>
          </Box>
        </div>
      </div>
    </section>
  );
};

export default Forgotpassword;
