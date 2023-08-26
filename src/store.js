import {applyMiddleware, combineReducers, createStore} from "redux";
import thunk from "redux-thunk";
import {composeWithDevTools} from "redux-devtools-extension";
import {emailCheckCodeReducer, emailSendCodeReducer, userRegisterReducer} from "./reducers/userReducers";

const reducer = combineReducers({
    userRegister: userRegisterReducer,
    emailSendCode: emailSendCodeReducer,
    checkEmailCode: emailCheckCodeReducer
})

const initialState = {

}

const middleware = [thunk]

const store = createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
)

export default store