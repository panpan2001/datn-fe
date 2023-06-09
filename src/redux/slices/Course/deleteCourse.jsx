import { createSlice } from "@reduxjs/toolkit"


const initialState = {
    courses:{
        currentCourse:null,
        isFetching:false,
        error:false
    }
}

const deleteCourseSlice = createSlice({
    name: "deleteCourse",
    initialState:initialState,
    reducers:{
        deleteCourseStart:(state)=>{
            state.courses.isFetching=true
        },
        deleteCourseSuccess:(state,action)=>{
            return {
                ...state,
                courses:{
                    ...state.courses,
                    currentCourse:null,
                    isFetching:false,
                    error:false
                }
            }
        },
        deleteCourseFailure:(state,action)=>{
            return {
                ...state,
                courses:{
                    ...state.courses,
                    isFetching:false,
                    error:true
                }
            }
        }
    }
})

export const {deleteCourseStart,deleteCourseSuccess,deleteCourseFailure} = deleteCourseSlice.actions
const deleteCourseReducer = deleteCourseSlice.reducer
export default deleteCourseReducer