export const GET_USER_REQUEST = "GET_USER_REQUEST";
export const GET_USER_SUCCESS = "GET_USER_SUCCESS";
export const GET_USER_FAILED = "GET_USER_FAILED";
export const USER_LOGOUT = "USER_LOGOUT";

export const getUserRequest = () => ({
  type: GET_USER_REQUEST,
});

export const getUserSuccess = (payload) => {
  const userProfile = {
    email: payload.email,
    name: payload.display_name,
    thumb: payload.images.length ? payload.images[0].url : "",
  };

  return {
    type: GET_USER_SUCCESS,
    payload: { ...userProfile },
  };
};

export const getUserFailed = ({ message }) => ({
  type: GET_USER_FAILED,
  payload: { message },
});

export const logout = () => ({
  type: USER_LOGOUT,
  payload: {},
});
