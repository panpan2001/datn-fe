
import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    accounts:{
        allAccounts:null,
        isFetching:false,
        error:false
    }
}

const AccountSlice = createSlice({
    name:"accounts",
    initialState:initialState,
    reducers:{
        getAccountStart: (state)=>{
            return state.accounts.isFetching=true
        },
        getAccountSuccess:(state,action)=>{
            return {
                ...state,
                accounts:{
                    ...state.accounts,
                    allAccounts:action.payload,
                    isFetching:false,
                    error:false
                }
            }
        },
        getAccountFailure:(state,action)=>{
            return {
                ...state,
                accounts:{
                    ...state.accounts,
                    isFetching:false,
                    error:true
                }
            }
        }
    }
    
})

export const {getAccountStart,getAccountSuccess,getAccountFailure}=AccountSlice.actions
const accountReducer= AccountSlice.reducer
export default accountReducer