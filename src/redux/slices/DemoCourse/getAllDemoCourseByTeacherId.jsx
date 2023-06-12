import { createSlice } from "@reduxjs/toolkit";

const initialState={
    demoCourses:{
        currentCourse:null,
        isFetching:false,
        error:false
    }
}

const getAllDemoCourseByTeacherId = createSlice({
    name:"getAllDemoCourseByTeacherId",
    initialState:initialState,
    reducers:{
        getAllDemoCourseByTeacherIdStart:(state,action)=>{
            state.demoCourses.isFetching=true
        },
        getAllDemoCourseByTeacherIdSuccess:(state,action)=>{
            return{
                ...state,
                demoCourses:{
                    ...state.demoCourses,
                    currentCourse:action.payload,
                    isFetching:false,
                    error:false
                }
            }
        },
        getAllDemoCourseByTeacherIdFailure:(state,action)=>{
            return {
                ...state,
                demoCourses:{
                    ...state.demoCourses,
                    isFetching:false,
                    error:true
                }
            }
        }
    }
})

export const {getAllDemoCourseByTeacherIdFailure,getAllDemoCourseByTeacherIdSuccess,getAllDemoCourseByTeacherIdStart}=getAllDemoCourseByTeacherId.actions
const getAllDemoCourseByTeacherIdReducer=getAllDemoCourseByTeacherId.reducer
export default getAllDemoCourseByTeacherIdReducer
