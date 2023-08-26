import {applyMiddleware, combineReducers, createStore} from "redux";
import thunk from "redux-thunk";
import {composeWithDevTools} from "redux-devtools-extension";
import {
    emailCheckCodeReducer,
    emailSendCodeReducer,
    userLoginReducer,
    userRegisterReducer
} from "./reducers/userReducers";

const reducer = combineReducers({
    userRegister: userRegisterReducer,
    emailSendCode: emailSendCodeReducer,
    checkEmailCode: emailCheckCodeReducer,
    userLogin: userLoginReducer
})

const userInfoFromStorage = localStorage.getItem('userInfo')
    ? JSON.parse(localStorage.getItem('userInfo'))
    :null

const initialState = {
    userLogin: {userinfo: userInfoFromStorage}
}

const middleware = [thunk]

const store = createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
)

export default store