import {
  LOGIN_USER_REQUEST,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAILED,
} from './types';

export const loginUserRequest = (data) => {
  return {
    type: LOGIN_USER_REQUEST,
    payload: data,
  };
};

export const loginUserSuccess = (data) => {
  return {
    type: LOGIN_USER_SUCCESS,
    payload: data,
  };
};

export const loginUserFailed = (error) => {
  return {
    type: LOGIN_USER_FAILED,
    payload: error,
  };
};

export const loginUser = () => {
  return (dispatch) => {
    console.log('dispatch', dispatch);
  };
};
