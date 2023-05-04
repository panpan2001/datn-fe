
import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    accounts:{
        allAccounts:null,
        isFetching:false,
        error:false
    },
    msg:""
}

const delAccountSlice = createSlice({
    name:"delAccounts",
    initialState:initialState,
    reducers:{
        delAccountStart: (state)=>{
            console.log("delAccountStart")
             state.accounts.isFetching=true
        },
        delAccountSuccess:(state,action)=>{
            console.log("delAccountSucess")
            return {
                ...state,
                accounts:{
                    ...state.accounts,
                    isFetching:false,
                },
                msg:action.payload
            }
        },
        delAccountFailure:(state,action)=>{
            return {
                ...state,
                accounts:{
                    ...state.accounts,
                    isFetching:false,
                    error:true
                },
                msg:action.payload
            }
        }
    }
    
})

export const {delAccountStart,delAccountSuccess,delAccountFailure}= delAccountSlice.actions
const delAccountReducer= delAccountSlice.reducer
export default delAccountReducer