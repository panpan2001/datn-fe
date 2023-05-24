import { createSlice } from "@reduxjs/toolkit"


const initialState={
    academics:{
        currentAcademic:null,
        isFetching:false,
        error:false
    }
}

const getTeacherAcademicSlice= createSlice({
    name:"getTeacherAcademic",
    initialState:initialState,
    reduces:{
        getTeacherAcademicStart:(state)=>{
            state.academics.isFetching=true
        },
        getTeacherAcademicSuccess:(state,action)=>{
            return{
                ...state,
                academics:{
                    ...state.academics,
                    currentAcademic:action.payload,
                    isFetching:false,
                    error:false
                }
            }
        },
        getTeacherAcademicFailure:(state)=>{
            return {
                ...state,
                academics:{
                    ...state.academics,
                    isFetching:false,
                    error:true
                }
            }
        }
    }
})

export const {getTeacherAcademicFailure,getTeacherAcademicStart,getTeacherAcademicSuccess}= getTeacherAcademicSlice.actions
const getTeacherAcademicReducer= getTeacherAcademicSlice.reducer
export default getTeacherAcademicReducer