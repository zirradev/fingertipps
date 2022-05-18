import axios from "axios";

export const signin = async (values) => {
  return await axios.post("/auth/signin", values);
};

export const signup = async (values) => {
  return await axios.post("/auth/signup", values);
};
