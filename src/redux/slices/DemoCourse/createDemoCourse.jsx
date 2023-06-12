import { createSlice } from "@reduxjs/toolkit"


const initialValues={
    demoCourse:{
        currentCourse:null,
        isFetching:false,
        error:true
    }
}

const createDemoCourseSlice= createSlice({
    name:"createDemoCourse",
    initialState:initialValues,
    reducers:{
        createDemoCourseStart:(state,action)=>{
            state.demoCourse=action.payload
        },
        createDemoCourseSuccess:(state,action)=>{
            return{
                ...state,
                demoCourse:{
                    ...state.demoCourse,
                    currentCourse:action.payload,
                    isFetching:false,
                    error:false
                }
            }
        },
        createDemoCourseFalure:(state,action)=>{
            return {
                ...state,
                demoCourse:{
                    ...state.demoCourse,
                    isFetching:false,
                    error:true
                }
            }
        }
    }
})

export const {createDemoCourseFalure,createDemoCourseStart,createDemoCourseSuccess}=createDemoCourseSlice.actions
const createDemoCourseReducer=createDemoCourseSlice.reducer
export default createDemoCourseReducer