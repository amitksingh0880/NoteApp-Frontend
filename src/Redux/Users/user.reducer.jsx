import {
  LOGIN_USER_ERROR,
  LOGIN_USER_LOADING,
  LOGIN_USER_SUCCESS,
  LOGOUT,
} from "./user.type";

const initialState = {
  name: null,
  auth: false,
  token: null,
  loading: false,
  error: false,
  email: null
};

const userReducer=(state = initialState, action)=> {
  const { type, payload } = action;

  switch (type) {
    case LOGIN_USER_LOADING:
      return {
        ...state,
        loading: true,
      };
    case LOGIN_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        error: false,
        token: payload.token,
        auth: true,
        name: payload.user.name,
        email: payload.user.email
      };
    case LOGIN_USER_ERROR:
      return {
        ...state,
        loading: false,
        error: true,
      };
    case LOGOUT:{
        return initialState
    }
    default:
      return state;
  }
}

export default userReducer;
