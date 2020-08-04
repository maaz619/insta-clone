import { USERNAME, ISLOGGEDIN, ISLOGGEDOUT, SETCREDENTIALS } from "./type";

export const setUserName = (username) => {
  return {
    type: USERNAME,
    payload: { username },
  };
};

export const isLogIn = (mainuser) => {
  return {
    type: ISLOGGEDIN,
    payload: {
      mainuser,
    },
  };
};
export const isLogOut = (mainuser) => {
  return {
    type: ISLOGGEDOUT,
    payload: {
      mainuser,
    },
  };
};
export const setCredentials = (property, value) => {
  return {
    type: SETCREDENTIALS,
    payload: {
      property,
      value,
    },
  };
};
