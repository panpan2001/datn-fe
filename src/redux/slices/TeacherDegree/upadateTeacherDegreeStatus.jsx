import { createSlice } from "@reduxjs/toolkit"


const initialState={
    degreeStatus:{
        currentStatus:"",
        isFetching:false,
        error:false,
    }
}

const updateTeacherDegreeStatusSlice = createSlice({
    name:"updateTeacherDegreeStatus",
    initialState:initialState,
    reducers:{
        updateTeacherDegreeStart:(state,action)=>{
            state.degreeStatus.isFetching=true
        },
        updateTeacherDegreeSuccess:(state,action)=>{
            return {
                ...state,
                degreeStatus:{
                    ...state.degreeStatus,
                    currentStatus:action.payload,
                    isFetching:false,
                    error:false
                }
            }
        },
        updateTeacherDegreeFailure:(state)=>{
            return {
                ...state,
                degreeStatus:{
                    ...state.degreeStatus,
                    isFetching:false,
                    error:true
                }
            }
        }
    }
})

export const {updateTeacherDegreeStart,updateTeacherDegreeSuccess,updateTeacherDegreeFailure} = updateTeacherDegreeStatusSlice.actions
const updateTeacherDegreeStatusReducer = updateTeacherDegreeStatusSlice.reducer
export default updateTeacherDegreeStatusReducer
