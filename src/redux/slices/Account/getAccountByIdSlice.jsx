import { createSlice } from "@reduxjs/toolkit";

const initialState={
    account:{
        currentUser:null,
        isFetching:false,
        error:false
    }
}

const getAccountByIdSlice = createSlice({
    name:"getAccountById",
    initialState:initialState,
    reducers:{
        getAccountByIdStart: (state)=>{
            return {
                ...state,
                account:{
                    ...state.account,
                    isFetching:true
                }
            }
        },
        getAccountByIdSuccess:(state,action)=>{
            return{
                ...state,
                account:{
                    ...state.account,
                    currentUser:action.payload,
                    isFetching:false,
                    error:false
                }
            }
        },
        getAccountByIdFailure:(state,action)=>{
            return {
                ...state,
                account:{
                    ...state.account,
                    isFetching:false,
                    error:true
                }
            }
        }
    }
})

export const {getAccountByIdStart,getAccountByIdSuccess,getAccountByIdFailure}=getAccountByIdSlice.actions
const getAccountByIdReducer= getAccountByIdSlice.reducer
export default getAccountByIdReducer

