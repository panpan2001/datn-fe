import { createSlice } from "@reduxjs/toolkit"

const initialValues = {
    academicStatus:{
        currentStatus:"",
        isFetching:false, 
        error:false 
    }
}

const updateteacherAcademicSlice= createSlice({
    name: "updateteacherAcademic",
    initialState: initialValues,
    reducers:{
        updateteacherAcademicStart:(state)=>{
            state.academicStatus.isFetching=true
        },
        updateteacherAcademicSuccess:(state,action)=>{
            return {
                ...state,
                academicStatus:{
                    ...state.academicStatus,
                    currentStatus:action.payload,
                    isFetching:false,
                    error:false
                }
            }
        },
        updateteacherAcademicFailure:(state)=>{
            return {
                ...state,
                academicStatus:{
                    ...state.academicStatus,
                    isFetching:false,
                    error:true
                }
            }
        }
    }
})

export const {updateteacherAcademicStart,updateteacherAcademicSuccess,updateteacherAcademicFailure}=updateteacherAcademicSlice.actions
const updateteacherAcademicReducer=updateteacherAcademicSlice.reducer
export default updateteacherAcademicReducer