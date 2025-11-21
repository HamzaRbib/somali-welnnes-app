import * as Types from '../constants/actionTypes';

const initialState = {
    isAuthenticated: false,
    user: null,
    error: null,
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case Types.LOGIN_SUCCESS:
            return {
                ...state,
                isAuthenticated: true,
                user: action.payload,
                error: null,
            };
        case Types.LOGIN_FAILURE:
            return {
                ...state,
                isAuthenticated: false,
                user: null,
                error: action.payload,
            };
        case Types.LOGOUT:
            return {
                ...state,
                isAuthenticated: false,
                user: null,
                error: null,
            };
        default:
            return state;
    }
};

export default authReducer;
