import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    ratings:{
        currentRating:null,
        isFetching:false,
        error:false
    }
}

const getStudentRatingByIdSlice= createSlice({
    name: "getStudentRatingById",
    initialState: initialState,
    reducers:{
        getStudentRatingById:(state, action)=>{
            state.ratings.isFetching = true
        },
        getStudentRatingByIdSuccess:(state, action)=>{
            return {
                ...state,
                ratings:{
                    ...state.ratings,
                    currentRating: action.payload,
                    isFetching:false,
                    error:false
                }
            }
        },
        getStudentRatingByIdError:(state, action)=>{
            return {
                ...state,
                ratings:{
                    ...state.ratings,
                    currentRating:null,
                    isFetching:false,
                    error:true
                }
            }
        }
    }
})

export const { getStudentRatingById, getStudentRatingByIdSuccess, getStudentRatingByIdError } = getStudentRatingByIdSlice.actions
const getStudentRatingByIdReducer = getStudentRatingByIdSlice.reducer
export default getStudentRatingByIdReducer
