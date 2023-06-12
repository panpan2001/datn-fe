import { createSlice } from "@reduxjs/toolkit";


const initialState={
    demoCourses:{
        currentCourse: null,
        isFetching:false,
        error:false
    }
}

const getDemoCourseStudentByCourseIdSlice = createSlice({
    name: "getDemoCourseStudentByCourseId",
    initialState: initialState,
    reducers: {
        getDemoCourseStudentByCourseIdStart: (state, action) => {
            state.demoCourses.isFetching = true
        },
        getDemoCourseStudentByCourseIdSuccess: (state, action) => {
            return {
                ...state,
                demoCourses: {
                    ...state.demoCourses,
                    currentCourse: action.payload,
                    isFetching: false,
                    error: false
                }
            }
        },
        getDemoCourseStudentByCourseIdFailure: (state, action) => {
            return {
                ...state,
                demoCourses: {
                    ...state.demoCourses,
                    isFetching: false,
                    error: true
                }
            }
        }
    }
})

export const { getDemoCourseStudentByCourseIdStart, getDemoCourseStudentByCourseIdSuccess, getDemoCourseStudentByCourseIdFailure } = getDemoCourseStudentByCourseIdSlice.actions
const getDemoCourseStudentByCourseIdReducer = getDemoCourseStudentByCourseIdSlice.reducer
export default getDemoCourseStudentByCourseIdReducer
