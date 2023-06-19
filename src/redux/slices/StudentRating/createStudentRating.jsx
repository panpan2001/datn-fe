import { createSlice } from "@reduxjs/toolkit"

const initialValues = {
    studentRating:{
        currentRating:null,
        isFetching:false,
        error:false
    }
}

const createStudentRatingSlice = createSlice({
    name: "createStudentRating",
    initialState: initialValues,
    reducers: {
        createStudentRatingStart: (state, action) => {
            state.studentRating.isFetching = true
        },
        createStudentRatingSuccess:(state, action)=>{
            return {
                ...state,
                studentRating:{
                    ...state.studentRating,
                    currentRating:action.payload,
                    isFetching:false,
                    error:false
                }
            }
        },
        createStudentRatingFailure:(state, action)=>{
            return {
                ...state,
                studentRating:{
                    ...state.studentRating,
                    isFetching:false,
                    error:true
                }
            }
        }

    }
})

export const { createStudentRatingStart, createStudentRatingSuccess, createStudentRatingFailure } = createStudentRatingSlice.actions
const createStudentRatingReducer = createStudentRatingSlice.reducer
export default createStudentRatingReducer
