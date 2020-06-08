export const CALLBACK_ERROR = "CALLBACK_ERROR";
export const CALLBACK_SUCCESS = "CALLBACK_SUCCESS";

export const callbackError = (message) => {
  return {
    type: CALLBACK_ERROR,
    payload: message,
  };
};

export const callbackSuccess = (credentials) => {
  return {
    type: CALLBACK_SUCCESS,
    payload: { ...credentials },
  };
};
