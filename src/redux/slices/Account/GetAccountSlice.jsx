
import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    accounts:{
        allAccounts:null,
        isFetching:false,
        error:false
    }
}

const getAccountSlice = createSlice({
    name:"getAccounts",
    initialState:initialState,
    reducers:{
        getAccountStart: (state)=>{
            console.log("getAccountStart")
             state.accounts.isFetching=true
        },
        getAccountSuccess:(state,action)=>{
            console.log("getAccountSucess")
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

export const {getAccountStart,getAccountSuccess,getAccountFailure}=getAccountSlice.actions
const getAccountReducer= getAccountSlice.reducer
export default getAccountReducer