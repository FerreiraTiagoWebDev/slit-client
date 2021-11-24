import {
  loginFailure,
  loginStart,
  loginSuccess,
  // logOutSuccess,
} from "./userRedux";
import { publicRequest } from "../requestMethods";

export const login = async (dispatch, user) => {
  dispatch(loginStart());
  try {
    const res = await publicRequest.post("/auth/login", user);
    dispatch(loginSuccess(res.data));
  } catch {
    dispatch(loginFailure());
  }
};
// export const logOut = (dispatch) => {
//   logOutSuccess(dispatch)
// };
