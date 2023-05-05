import { createSlice } from "@reduxjs/toolkit"

const initialState={
    logout:{
        currentUser: null,
        isFetching: false,
        isLoggedOut: false,
        error:true
    }
}

const logoutSlice= createSlice({
    name:"logout",
    initialState:initialState,
    reducer:{
        logoutStart:(state,action)=>{
            console.log('logout start')
            return {
                ...state,
                logout:{
                    isFetching:true
                }
            }
        },
        logoutSuccess:(state,action)=>{
            return {
                ...state,
                logout:{
                    ...state.logout,
                    currentUser:null,
                    isFetching:false,
                    isLoggedOut:true,
                    error:false
                }
            }
        },

        logoutFailure:(state,action)=>{
            return {
                ...state,
                logout:{
                    ...state.logout,
                    isFetching:false,
                    error:true,
                }
            }
        }
    }
})

export const {logoutStart,logoutSuccess,logoutFailure}=logoutSlice.actions
const logoutReducer=logoutSlice.reducer
export default logoutReducer
