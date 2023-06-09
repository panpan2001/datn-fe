import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    demoCourse: {
        currentDemoCourse: null,
        isFetching: false,
        error: true
    }
}

const getDemoCourseByStudentId = createSlice({
    name: "getDemoCourseByStudentId",
    initialState: initialState,
    reducers: {
        getDemoCourseByStudentIdStart: (state, action) => {
            state.demoCourse.isFetching = true
        },
        getDemoCourseByStudentIdSuccess: (state, action) => {
            return {
                ...state,
                demoCourse: {
                    ...state.demoCourse,
                    currentDemoCourse: action.payload,
                    isFetching: false,
                    error: false
                }
            }
        },
        getDemoCourseByStudentIdFailure: (state, action) => {
            return {
                ...state,
                demoCourse: {
                    ...state.demoCourse,
                    isFetching: false,
                    error: true
                }
            }
        }
    }
})

export const { getDemoCourseByStudentIdStart, getDemoCourseByStudentIdSuccess, getDemoCourseByStudentIdFailure } = getDemoCourseByStudentId.actions
const getDemoCourseByStudentIdReducer = getDemoCourseByStudentId.reducer
export default getDemoCourseByStudentIdReducer
