import {
  USERNAME,
  ISLOGGEDIN,
  ISLOGGEDOUT,
  SETCREDENTIALS,
  LOADED,
} from "./type";

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
export const loaded = (isLoaded) => {
  return {
    type: LOADED,
    payload: {
      isLoaded,
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
