

//login
//We have 3 stages: 1.Starting 2.Success 3.Failure
export const loginStart = () => ({ type: "LOGIN_START" });
export const loginSucess = (user) => ({ type: "LOGIN_SUCCESS",payload:user });
export const loginFailure = () => ({ type: "LOGIN_FAILURE" });

//logout
export const logout= (dispatch) => (dispatch({ type: "LOGOUT" }));