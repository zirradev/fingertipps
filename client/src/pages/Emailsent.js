import React from "react";
import Box from "@mui/material/Box";
import "./Emailsent.css";
import { FormControl, InputLabel, OutlinedInput, Button } from "@mui/material";
import { BsArrowLeft } from "react-icons/bs";

const Emailsent = () => {
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
            <h1>Password</h1>
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
            <div className="message">
              <p>
                An email has been sent to your email address. Please check your
                email and click on the link to reset your password.
              </p>
            </div>
            <Button
              variant="contained"
              color="primary"
              to="/signin"
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
              sign in
            </Button>
          </Box>
        </div>
      </div>
    </section>
  );
};

export default Emailsent;
