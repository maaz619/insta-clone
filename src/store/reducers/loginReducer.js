import {
  ISLOGGEDIN,
  ISLOGGEDOUT,
  SETCREDENTIALS,
  USERNAME,
} from "../actions/type";

const loginReducer = (
  state = {
    mainuser: null,
    username: "",
    email: "",
    password: "",
  },
  action
) => {
  switch (action.type) {
    case SETCREDENTIALS:
      let newState = { ...state };
      newState[action.payload.property] = action.payload.value;
      state = newState;
      break;
    case ISLOGGEDIN:
      let newState1 = { ...state };
      newState1.mainuser = action.payload.mainuser;
      state = newState1;
      break;
    case USERNAME:
      let newState2 = { ...state };
      newState2.username = action.payload.username;
      state = newState2;
      break;

    case ISLOGGEDOUT:
      let newState3 = { ...state };
      newState3.mainuser = null;
      state = newState3;
      break;
    default:
      return state;
  }
  return state;
};

export default loginReducer;
