import { combineReducers, configureStore } from "@reduxjs/toolkit";
import loginReducer from "../slices/Auth/loginSlice";
import registerReducer from "../slices/Auth/registerSlice";
import getAccountReducer from "../slices/Account/GetAccountSlice";
import delAccountReducer from "../slices/Account/DeleteAccountSlice";
import { persistStore } from "redux-persist";
import persistReducer from "redux-persist/es/persistReducer";
import { FLUSH,  REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from "redux-persist";
import storage from 'redux-persist/lib/storage'
import logoutReducer from "../slices/Auth/logoutSlice";
import createStudentReducer from "../slices/Student/createStudentSlice";
const persistConfig = {
    key:'root',
    version:1,
    storage

}

const rootReducer= combineReducers({
    login: loginReducer,
    signup: registerReducer,
    getAccount: getAccountReducer,
    delAccount: delAccountReducer,
    logout: logoutReducer,
    createStudent:createStudentReducer
})
const persistedReducer=persistReducer(persistConfig,rootReducer)

const store= configureStore({
    reducer: persistedReducer,
    middware: (getDefaultMiddleware) => 
    getDefaultMiddleware({
        serializableCheck: false
        // {
        //     ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        // },
        
    })
}
    // reducer
)

export const persistor=persistStore(store)
export default store