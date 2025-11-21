
import * as Types from "../constants/actionTypes";

export const addLocation = (location) => ({
    type: Types.ADD_LOCATION,
    payload: location,
});

export const removeLocation = (location) => ({
    type: Types.REMOVE_LOCATION,
    payload: location,
});

export const setActiveLocation = (location) => ({
    type: Types.SET_ACTIVE_LOCATION,
    payload: location,
});
