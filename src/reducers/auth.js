import { CALLBACK_ERROR, CALLBACK_SUCCESS } from "../actions/auth";

const authInitialState = {
  accessToken: "",
  errorMessage: "",
  expirationTime: "",
  expiresIn: "",
  isLogged: false,
  tokenType: "",
};

const authReducer = (state = authInitialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case CALLBACK_ERROR:
      return {
        ...state,
        accessToken: "",
        errorMessage: payload,
        expiresIn: "",
        isLogged: false,
        tokenType: "",
      };
    case CALLBACK_SUCCESS:
      return {
        ...state,
        accessToken: payload.accessToken,
        errorMessage: "",
        expirationTime: new Date().getTime() + parseInt(payload.expiresIn),
        expiresIn: payload.expiresIn,
        isLogged: true,
        tokenType: payload.tokenType,
      };
    default:
      return state;
  }
};

export default authReducer;
