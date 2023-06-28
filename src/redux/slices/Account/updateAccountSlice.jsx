import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    account:{
        currentAccount:null,
        isFetching:false,
        error:false
    }
}

const updateAccountSlice = createSlice({
    name: 'account',
    initialState,
    reducers: {
        updateAccountStart: (state, action) => {
            state.account.isFetching = true
        },
        updateAccountSuccess: (state, action) => {
            return {
                ...state,
                account: {
                    ...state.account,
                    currentAccount: action.payload,
                    isFetching: false,
                    error: false
                }
            }
        },
        updateAccountFailure: (state, action) => {
            return {
                ...state,
                account: {
                    ...state.account,
                    isFetching: false,
                    error: true
                }
            }
        }
    }
})

export const { updateAccountStart, updateAccountSuccess, updateAccountFailure } = updateAccountSlice.actions
const updateAccountReducer = updateAccountSlice.reducer
export default updateAccountReducer