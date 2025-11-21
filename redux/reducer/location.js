
import * as Types from "../constants/actionTypes";

const initialState = {
    locations: [],
    activeLocation: null,
};

const locationReducer = (state = initialState, action) => {
    switch (action.type) {
        case Types.ADD_LOCATION:
            return {
                ...state,
                locations: [...state.locations, action.payload],
            };
        case Types.REMOVE_LOCATION:
            return {
                ...state,
                locations: state.locations.filter(
                    (location) => location.id !== action.payload.id
                ),
            };
        case Types.SET_ACTIVE_LOCATION:
            return {
                ...state,
                activeLocation: action.payload,
            };
        default:
            return state;
    }
};

export default locationReducer;
