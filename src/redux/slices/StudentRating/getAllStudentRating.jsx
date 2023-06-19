import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    studentRatings:{
        currentRating:null,
        isFetching:false,
        error:false
    }
}

const getStudentRatingSlice = createSlice({
    name:"getStudentRating",
    initialState: initialState,
    reducers:{
        getStudentRatingStart:(state)=>{
            return {
                ...state,
                studentRatings:{
                    ...state.studentRatings,
                    isFetching:true,
                    error:false
                }
            }
        },
        getStudentRatingSuccess:(state, action)=>{
            return {
                ...state,
                studentRatings:{
                    ...state.studentRatings,
                    currentRating:action.payload,
                    isFetching:false,
                    error:false
                }
            }
        },
        getStudentRatingFailure:(state, action)=>{
            return {
                ...state,
                studentRatings:{
                    ...state.studentRatings,
                    isFetching:false,
                    error:true
                }
            }
        }
    }
})

export const { getStudentRatingStart, getStudentRatingSuccess, getStudentRatingFailure } = getStudentRatingSlice.actions
const getStudentRatingReducer = getStudentRatingSlice.reducer
export default getStudentRatingReducer
