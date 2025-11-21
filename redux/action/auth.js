import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signInWithPhoneNumber,
    signOut,
    onAuthStateChanged,
    RecaptchaVerifier
} from 'firebase/auth';
import { auth } from '../../config/firebase';
import * as Types from '../constants/actionTypes';

export const loginSuccess = (user) => {
    return {
        type: Types.LOGIN_SUCCESS,
        payload: user,
    };
};

export const loginFailure = (error) => {
    return {
        type: Types.LOGIN_FAILURE,
        payload: error,
    };
};

export const logoutSuccess = () => {
    return {
        type: Types.LOGOUT,
    };
};

export const registerWithEmail = (email, password) => async (dispatch) => {
    try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        dispatch(loginSuccess(userCredential.user));
    } catch (error) {
        dispatch(loginFailure(error.message));
    }
};

export const loginWithEmail = (email, password) => async (dispatch) => {
    try {
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        dispatch(loginSuccess(userCredential.user));
    } catch (error) {
        dispatch(loginFailure(error.message));
    }
};

export const setUpRecaptcha = (phoneNumber, recaptchaVerifier) => async (dispatch) => {
    try {
        const confirmationResult = await signInWithPhoneNumber(auth, phoneNumber, recaptchaVerifier);
        window.confirmationResult = confirmationResult;
    } catch (error) {
        dispatch(loginFailure("Failed to send verification code. Please check the phone number and try again."));
    }
}

export const loginWithPhone = (code) => async (dispatch) => {
    try {
        const result = await window.confirmationResult.confirm(code);
        dispatch(loginSuccess(result.user));
    } catch (error) {
        dispatch(loginFailure(error.message));
    }
};

export const logout = () => async (dispatch) => {
    try {
        await signOut(auth);
        dispatch(logoutSuccess());
    } catch (error) {
        console.error("Logout failed:", error);
    }
};

export const listenToAuthChanges = () => (dispatch) => {
    onAuthStateChanged(auth, (user) => {
        if (user) {
            dispatch(loginSuccess(user));
        } else {
            dispatch(logoutSuccess());
        }
    });
};
