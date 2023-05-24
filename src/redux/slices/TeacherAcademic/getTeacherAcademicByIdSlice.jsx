import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    academic: {
        currentAcademic: null,
        isFetching: false,
        error: false
    }
}

const getTeacherAcademicByIdSlice = createSlice({
    name: "getTeacherAcademicById",
    initialState: initialState,
    reducers: {
        getTeacherAcademicByIdStart: (state, action) => {
            state.academic.isFetching = true
        },
        getTeacherAcademicByIdSuccess: (state, action) => {
            return {
                ...state,
                academic: {
                    ...state.academic,
                    currentAcademic: action.payload,
                    isFetching: false,
                    error: false
                }
            }
        },
        getTeacherAcademicByIdFailure: (state, action) => {
            return {
                ...state,
                academic: {
                    ...state.academic,
                    isFetching: false,
                    error: true
                }
            }
        }
    }
})

export const { getTeacherAcademicByIdStart, getTeacherAcademicByIdSuccess, getTeacherAcademicByIdFailure } = getTeacherAcademicByIdSlice.actions
const getTeacherAcademicByIdReducer = getTeacherAcademicByIdSlice.reducer
export default getTeacherAcademicByIdReducer