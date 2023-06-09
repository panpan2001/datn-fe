import { createSlice } from "@reduxjs/toolkit";

const initialState= {
    officialCourses:{
        currentCourse: null,
        isFetching: false,
        error: false
    }
    
}

const getCourseStudentByStudentIdSlice = createSlice({
    name: "getCourseStudentByStudentId",
    initialState: initialState,
    reducers: {
        getCourseStudentByStudentIdStart: (state, action) => {
            state.officialCourses.isFetching = true
        },
        getCourseStudentByStudentIdSuccess: (state, action) => {
            return {
                ...state,
                officialCourses: {
                    ...state.officialCourses,
                    currentCourse: action.payload,
                    isFetching: false,
                    error: false
                }
            }
        },
        getCourseStudentByStudentIdFailure: (state, action) => {
            return {
                ...state,
                officialCourses: {
                    ...state.officialCourses,
                    isFetching: false,
                    error: true
                }
            }
        }
        
    }
})

export const { getCourseStudentByStudentIdStart, getCourseStudentByStudentIdSuccess, getCourseStudentByStudentIdFailure } = getCourseStudentByStudentIdSlice.actions
const getCourseStudentByStudentIdReducer = getCourseStudentByStudentIdSlice.reducer
export default getCourseStudentByStudentIdReducer
