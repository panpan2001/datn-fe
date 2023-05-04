import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    login: {
        currentUser: null,
        isFetching: false,
        error: false,
        isLoggedIn: false
    }
}
const loginSlice = createSlice({
    name: 'login',
    initialState: initialState,
    reducers: {
        loginStart: (state) => {
            state.login.isFetching = true
        },
        loginSuccess: (state, action) => {

            return {
                ...state, login: {
                    ...state.login,
                    currentUser: action.payload,
                    isLoggedIn: true,
                    error: false,
                    isFetching: false
                }
            }
        },
        loginFailure: (state) => {

            return {
                ...state, login: {
                    ...state.login,
                    error: true,
                    isFetching: false,
                    isLoggedIn: false
                }
            }

        },


    }
})

export const { loginStart,loginSuccess,loginFailure,} = loginSlice.actions
const loginReducer = loginSlice.reducer
export default loginReducer