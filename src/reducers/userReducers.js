import {
    EMAIL_CHECK_CODE_FAIL,
    EMAIL_CHECK_CODE_REQUEST, EMAIL_CHECK_CODE_SUCCESS,
    EMAIL_SEND_CODE_FAIL,
    EMAIL_SEND_CODE_REQUEST, EMAIL_SEND_CODE_SUCCESS,
    USER_REGISTER_FAIL,
    USER_REGISTER_REQUEST,
    USER_REGISTER_SUCCESS
} from "../constants/userConstants";

export const userRegisterReducer = (state = {}, action) => {
    switch (action.type) {
        case USER_REGISTER_REQUEST:
            return {loading : true}
        case USER_REGISTER_SUCCESS:
            return {loading : false, success : true}
        case USER_REGISTER_FAIL:
            return {loading : false, err : action.payload}
        default:
            return state
    }
}

export const emailSendCodeReducer = (state = {}, action) => {
    switch (action.type){
        case EMAIL_SEND_CODE_REQUEST:
            return {loading : true}
        case EMAIL_SEND_CODE_SUCCESS:
            return {loading : false, success : true}
        case EMAIL_SEND_CODE_FAIL:
            return {loading : false, err : action.payload}
        default:
            return state
    }
}

export const emailCheckCodeReducer = (state = {}, action) => {
    switch (action.type){
        case EMAIL_CHECK_CODE_REQUEST:
            return {loading: true}
        case EMAIL_CHECK_CODE_SUCCESS:
            return {loading: false, success: true}
        case EMAIL_CHECK_CODE_FAIL:
            return {loading: false, err: action.payload}
        default:
            return state
    }
}