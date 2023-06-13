import { createSlice } from "@reduxjs/toolkit";


const initialState={
    demoCourses:{
        currentCourse: null,
        isFetching:false,
        error:false
    }
}

const getDemoCourseStudentByDemoCourseIdSlice = createSlice({
    name: "getDemoCourseStudentByCourseId",
    initialState: initialState,
    reducers: {
        getDemoCourseStudentByDemoCourseIdStart: (state, action) => {
            state.demoCourses.isFetching = true
        },
        getDemoCourseStudentByDemoCourseIdSuccess: (state, action) => {
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
        getDemoCourseStudentByDemoCourseIdFailure: (state, action) => {
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

export const { getDemoCourseStudentByDemoCourseIdStart, getDemoCourseStudentByDemoCourseIdSuccess, getDemoCourseStudentByDemoCourseIdFailure} = getDemoCourseStudentByDemoCourseIdSlice.actions
const getDemoCourseStudentByDemoCourseIdReducer = getDemoCourseStudentByDemoCourseIdSlice.reducer
export default getDemoCourseStudentByDemoCourseIdReducer
