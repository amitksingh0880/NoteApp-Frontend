import { LOGIN_USER_ERROR, LOGIN_USER_LOADING, LOGIN_USER_SUCCESS, LOGOUT } from "./user.type";

const initialState = {
    user: null,
    auth: false,
    token: null,
    loading: false,
    error: false,
};

const userReducer = (state = initialState, action) => {
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
                user: payload.user.name,
            };
        case LOGIN_USER_ERROR:
            return {
                ...state,
                loading: false,
                error: true,
            };
        case LOGOUT:
            return initialState;
        default:
            return state;
    }
};

export default userReducer;
