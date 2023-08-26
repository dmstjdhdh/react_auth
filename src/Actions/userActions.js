import {
    EMAIL_CHECK_CODE_FAIL,
    EMAIL_CHECK_CODE_REQUEST,
    EMAIL_CHECK_CODE_SUCCESS,
    EMAIL_SEND_CODE_FAIL, EMAIL_SEND_CODE_REQUEST, EMAIL_SEND_CODE_SUCCESS,
    USER_REGISTER_FAIL,
    USER_REGISTER_REQUEST,
    USER_REGISTER_SUCCESS
} from "../constants/userConstants";
import authApi from "../services/api";

export const register = (userInput) => async (dispatch) => {
    try{
        dispatch({
            type: USER_REGISTER_REQUEST,
        })

        const {data, status} = await authApi.post("/signup", userInput);
        if(status === 201){
            dispatch({
                type: USER_REGISTER_SUCCESS,
                payload: data,
            })
        }

    } catch (e) {
        dispatch({
            type: USER_REGISTER_FAIL,
            payload:
                e.response && e.response.data.message
                    ? e.response.data.message
                    : e.message,
        })
    }
}

export const sendEmailCode = (email) => async (dispatch) => {
    try{
        dispatch({
            type:EMAIL_SEND_CODE_REQUEST
        })

        const {data, status} = await  authApi.post("/email/send", email)
        if(status === 201){
            dispatch({
                type: EMAIL_SEND_CODE_SUCCESS,
                payload: data,
            })
        }

    } catch (e) {
        dispatch({
            type:EMAIL_SEND_CODE_FAIL,
            payload:
                e.response && e.response.data.message
                    ? e.response.data.message
                    : e.message,
        })
    }
}

export const emailCheckCode = (userInput) => async (dispatch) => {
    try{
        dispatch({
            type:EMAIL_CHECK_CODE_REQUEST
        })
        const {data, status} = await authApi.post("/email/check", userInput)
        if(status === 201){
            dispatch({
                type:EMAIL_CHECK_CODE_SUCCESS,
                payload: data,
            })
        }
    } catch (e) {
        dispatch({
            type:EMAIL_CHECK_CODE_FAIL,
            payload:
            e.response && e.response.data.message
                ? e.response.data.message
                : e.message
        })
    }
}