import {
  LOGIN_USER_REQUEST,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAILED,
} from '../actions/types';

const initialState = {
  userDetail: {},
};

export default (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_USER_REQUEST:
      return {
        ...state,
        userDetail: {},
      };
    case LOGIN_USER_SUCCESS:
      return {
        ...state,
        userDetail: {},
      };
    case LOGIN_USER_FAILED:
      return {
        ...state,
        userDetail: {},
      };
    default:
      return state;
  }
};
