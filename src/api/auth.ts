import ins from "./product";
import { SigninForm, SignupForm } from "../models";

export const signup = (data: SignupForm) => {
  const uri = "/signup";
  return ins.post(uri, data);
};

export const signin = (data: SigninForm) => {
  const uri = "/signin";
  return ins.post(uri, data);
};
