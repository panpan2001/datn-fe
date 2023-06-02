import { createSlice } from "@reduxjs/toolkit"


const initialState = {
    course: {
        currentCourse: null,
        isFetching: false,
        error: false
    }
}

const getCourseByIdSlices = createSlice({
    name: 'getCourseById',
    initialState: initialState,
    reducers: {
        getCourseByIdStart: (state) => {
            state.course.isFetching = true
        },
        getCourseByIdSuccess: (state, action) => {
            return {
                ...state,
                course: {
                    ...state.course,
                    currentCourse: action.payload,
                    isFetching: false,
                    error: false
                }
            }
        },
        getCourseByIdFailure: (state) => {
            return {
                ...state,
                course: {
                    ...state.course,
                    isFetching: false,
                    error: true
                }
            }
        }
    }
})

export const { getCourseByIdStart, getCourseByIdSuccess, getCourseByIdFailure } = getCourseByIdSlices.actions
const getCourseByIdReducer = getCourseByIdSlices.reducer
export default getCourseByIdReducer
