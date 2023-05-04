import { configureStore } from "@reduxjs/toolkit";
import loginReducer from "../slices/Auth/loginSlice";
import registerReducer from "../slices/Auth/registerSlice";
import accountReducer from "../slices/Account/accountSlice";

const store= configureStore({
    reducer:{
        login: loginReducer,
        signup: registerReducer,
        account: accountReducer
    }
}
    // reducer
)

export default store