import { LOADPOST } from "../actions/type";

const homeReducer = (state = { post: [] }, action) => {
  switch (action.type) {
    case LOADPOST:
      state = {
        post: action.payload.post,
      };
      break;

    default:
      return state;
  }
  return state;
};
export default homeReducer;
