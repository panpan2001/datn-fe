import { createSlice } from "@reduxjs/toolkit"


const initialValue={
    studentRating:{
        currentRating:null,
        isFetching:false,
        error:false
    }
}
const updateStudentRatingSlice = createSlice({
    name: "updateStudentRating",
    initialState:initialValue,
    reducers:{
        updateStudentRatingStart:(state)=>{
            state.studentRating.isFetching=true
        },
        updateStudentRatingSuccess:(state, action)=>{
            return{
                ...state,
                studentRating:{
                    ...state.studentRating,
                    currentRating:action.payload,
                    isFetching:false,
                    error:false
                }
            }
        },
        updateStudentRatingFailure:(state, action)=>{
            return{
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

export const {updateStudentRatingStart,updateStudentRatingSuccess,updateStudentRatingFailure} = updateStudentRatingSlice.actions
const updateStudentRatingReducer = updateStudentRatingSlice.reducer
export default updateStudentRatingReducer
