import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    degree: {
        currentDegree: null,
        isFetching: false,
        error: false
    }
}

const getTeacherDegreeByIdSlice = createSlice({
    name: "getTeacherDegreeById",
    initialState: initialState,
    reducers: {
        getTeacherDegreeByIdStart: (state, action) => {
            state.degree.isFetching = true
        },
        getTeacherDegreeByIdSuccess: (state, action) => {
            return {
                ...state,
                degree: {
                    ...state.degree,
                    currentDegree: action.payload,
                    isFetching: false,
                    error: false
                }
            }
        },
        getTeacherDegreeByIdFailure: (state, action) => {
            return {
                ...state,
                degree: {
                    ...state.degree,
                    isFetching: false,
                    error: true
                }
            }
        }
    }
})

export const { getTeacherDegreeByIdStart, getTeacherDegreeByIdSuccess, getTeacherDegreeByIdFailure } = getTeacherDegreeByIdSlice.actions
const getTeacherDegreeByIdReducer = getTeacherDegreeByIdSlice.reducer
export default getTeacherDegreeByIdReducer