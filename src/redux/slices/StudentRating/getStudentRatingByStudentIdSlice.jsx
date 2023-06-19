import { createSlice } from "@reduxjs/toolkit"

const initialValues = {
    studentRating:{
        currentRating:null,
        isFetching:false,
        error:false
    }
}

const getStudentRatingByStudentIdSlice = createSlice({
    name:"getStudentRating",
    initialState: initialValues,
    reducers:{
        getStudentRatingByStudentIdStart: (state, action) => {
            state.studentRating.isFetching = true
        },
        getStudentRatingByStudentIdSuccess:(state, action)=>{
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
        getStudentRatingByStudentIdFailure:(state, action)=>{
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

export const { getStudentRatingByStudentIdStart, getStudentRatingByStudentIdSuccess, getStudentRatingByStudentIdFailure } = getStudentRatingByStudentIdSlice.actions
const getStudentRatingByStudentIdReducer = getStudentRatingByStudentIdSlice.reducer
export default getStudentRatingByStudentIdReducer
