import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    
    register: {
        // currentUser:null,
        isFetching: false,
        error: false,
        isRegister: false
    }
}
const registerSlice = createSlice({
    name: 'signup',
    initialState: initialState,
    reducers: {
      
        // register
        registerStart: (state) => {
            state.register.isFetching = true
        },
        registerSuccess: (state, action) => {
            return {
                ...state, register: {
                    ...state.register,
                    // currentUser:action.payload,
                    isRegister: true,
                    error: false,
                    isFetching: false
                }
            }
        },
        registerFailure: (state) => {
            return {
                ...state, register: {
                    ...state.register,
                    error: true,
                    isFetching: false,
                    isRegister: false
                }
            }
        }
    }
})

export const { 
    registerFailure,
    registerSuccess,
    registerStart } = registerSlice.actions
const registerReducer = registerSlice.reducer
export default registerReducer