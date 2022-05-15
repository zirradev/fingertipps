import React from "react";
import "./Signup.css";

const Signup = () => {
  return (
    <>
      <section className="sign_up">
        <div className="container">
          {/* <div className="close" onClick={() => setVisible(false)}> */}
          <div className="close">
            <span></span>
            <span></span>
          </div>
          <div className="sign_in_content">
            <div className="sign_in_content-title">
              <h1>Welcome</h1>
            </div>
            <div className="sign-in-content-form">
              <form>
                <div className="form-group">
                  <label>Name</label>
                  <input type="text" className="form-control" placeholder="" />
                </div>
                <div className="form-group">
                  <label>Email address</label>
                  <input type="email" className="form-control" placeholder="" />
                </div>
                <div className="form-group">
                  <label>Phone</label>
                  <input type="tel" className="form-control" placeholder="" />
                </div>
                <div className="form-group">
                  <label>Password</label>
                  <input
                    type="password"
                    className="form-control"
                    placeholder=""
                  />
                </div>
                <div className="form-group">
                  <div className="custom-control custom-checkbox">
                    <input
                      type="checkbox"
                      className="custom-control-input"
                      id="customCheck1"
                    />
                    <label
                      className="custom-control-label"
                      htmlFor="customCheck1"
                    >
                      Agree with{" "}
                      <a href="#home" className="terms">
                        terms & conditions
                      </a>
                    </label>
                  </div>
                </div>
                <button type="submit" className="btn btn-primary">
                  Sign Up
                </button>
              </form>
            </div>
          </div>
          <div className="sign_others"></div>
        </div>
      </section>
    </>
  );
};

export default Signup;
