import { SETPOST, LOADPOST } from "./type";

export const loadPost = (post) => {
  return { type: LOADPOST, payload: { post } };
};
export const setPost = () => {
  return {
    type: SETPOST,
  };
};
