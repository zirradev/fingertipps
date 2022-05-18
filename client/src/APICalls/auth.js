import axios from "axios";

export const signin = async (email, password) => {
  return await axios.post("/auth/signin");
};

export const signup = async (name, email, phone, password) => {
  return await axios.post("/auth/signup");
};
