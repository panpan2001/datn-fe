import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    studentRating: {
        currentRating: null,
        isFetching: false,
        error: false,
    }
}
const deleteStudentRatingSlice = createSlice({
    name: 'deleteStudentRating',
    initialState: initialState,
    reducers: {
        deleteStudentRatingStart: (state) => {
            state.studentRating.isFetching = true
        },
        deleteStudentRatingSuccess: (state, action) => {
            return {
                ...state,
                studentRating: {
                    ...state.studentRating,
                    currentRating: action.payload,
                    isFetching: false,
                    error: false
                }
            }
        },
        deleteStudentRatingFailure: (state, action) => {
            return {
                ...state,
                studentRating: {
                    ...state.studentRating,
                    isFetching: false,
                    error: true
                }
            }
        }

    }
})

export const { deleteStudentRatingStart, deleteStudentRatingSuccess, deleteStudentRatingFailure } = deleteStudentRatingSlice.actions
const deleteStudentRatingReducer = deleteStudentRatingSlice.reducer
export default deleteStudentRatingReducer
