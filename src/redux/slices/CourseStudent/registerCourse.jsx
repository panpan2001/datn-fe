import { createSlice } from "@reduxjs/toolkit"

const initialState= {
    officialCourse:{
        currentOfficialCourse: null,
        isFetching: false,
        error: false
    }
}

const registerCourseSlice=createSlice({
    name:"registerCourse",
    initialState:initialState,
    reducers:{
        registerCourseStart:(state,action)=>{
            state.officialCourse.isFetching=true
        },
        registerCourseSuccess:(state,action)=>{
            return {
                ...state,
                officialCourse: {
                    ...state.officialCourse,
                    currentOfficialCourse: action.payload,
                    isFetching: false,
                    error: false
                }
            }
        },
        registerCourseFailure:(state,action)=>{
            return {
                ...state,
                officialCourse: {
                    ...state.officialCourse,
                    isFetching: false,
                    error: true
                }
            }
        }
    }
})

export const {registerCourseStart,registerCourseSuccess,registerCourseFailure}=registerCourseSlice.actions
const registerCourseReducer=registerCourseSlice.reducer
export default registerCourseReducer
