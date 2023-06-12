import { createSlice } from "@reduxjs/toolkit"

const initialState={
    demoCourses:{
        currentCourse:null,
        isFetching:false,
        error:false
    }
}

const getAllDemoCourseByCourseId= createSlice({
    name:"getAllDemoCourseByCourseId",
    initialState:initialState,
    reducers:{
        getAllDemoCourseByCourseIdStart:(state,action)=>{
            state.demoCourses.isFetching=true
        },
        getAllDemoCourseByCourseIdSuccess:(state,action)=>{
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
        getAllDemoCourseByCourseIdFailure:(state,action)=>{
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

export const {getAllDemoCourseByCourseIdFailure,getAllDemoCourseByCourseIdSuccess,getAllDemoCourseByCourseIdStart}=getAllDemoCourseByCourseId.actions
const  getAllDemoCourseByCourseIdReducer=getAllDemoCourseByCourseId.reducer
export default getAllDemoCourseByCourseIdReducer