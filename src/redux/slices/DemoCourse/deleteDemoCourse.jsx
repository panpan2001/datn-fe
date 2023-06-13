import { createSlice } from "@reduxjs/toolkit"


const initialState={
    demoCourse:{
        currentCourse: null,
        isFetching:false,
        error:false
    },
    msg:""
}


const deleteDemoCourseSlice= createSlice({
    name:"deleteDemoCourse",
    initialState: initialState,
    reducers:{
        deleteDemoCourseStart:(state,action)=>{
            state.demoCourse.isFetching= true
        },
        deleteDemoCourseSuccess:(state,action)=>{
            return {
                ...state,
                demoCourse:{
                    ...state.demoCourse,
                    isFetching: false,
                    error: false
                },
                msg:action.payload
            }
        },
        deleteDemoCourseFailure:(state,action)=>{
            return {
                ...state,
                demoCourse:{
                    ...state.demoCourse,
                    isFetching: false,
                    error: true
                },
                msg:action.payload
            }
        }
    }
})

export const {deleteDemoCourseStart, deleteDemoCourseSuccess, deleteDemoCourseFailure} = deleteDemoCourseSlice.actions
const deleteDemoCourseReducer = deleteDemoCourseSlice.reducer
export default deleteDemoCourseReducer
