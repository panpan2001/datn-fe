import { createSlice } from "@reduxjs/toolkit"


const initialState={
    course:{
        currentCourse:null,
        isFetching:false,
        error:false
    }
}

const createCourseSlices = createSlice({
    name:'createCourse',
    initialState:initialState,
    reducers:{
        createCourseStart:(state)=>{
            state.course.isFetching=true
        },
        createCourseSuccess:(state,action)=>{
            return {
                ...state,
                course:{
                    ...state.course,
                    currentCourse:action.payload,
                    isFetching:false,
                    error:false
                }
            }
        },
        createCourseFailure:(state)=>{
            return {
                ...state,
                course:{
                    ...state.course,
                    isFetching:false,
                    error:true
                }
            }
        }
    }
})

export const {createCourseStart,createCourseSuccess,createCourseFailure} = createCourseSlices.actions
const createCourseReducer = createCourseSlices.reducer
export default createCourseReducer
