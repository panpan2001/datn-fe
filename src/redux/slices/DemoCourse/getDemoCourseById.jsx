import { createSlice } from "@reduxjs/toolkit"

const initialValues={
    demoCourse:{
        currentCourse:null,
        isFetching:false,
        error:false
    }
}

const getDemoCourseByIdSlice= createSlice({
    name:"getDemoCourseById",
    initialState:initialValues,
    reducers:{
        getDemoCourseByIdStart:(state)=>{
            state.demoCourse.isFetching=true
        },
        getDemoCourseByIdSuccess:(state,action)=>{
            return {
                ...state,
                demoCourse:{
                    ...state.demoCourse,
                    currentCourse:action.payload,
                    isFetching:false,
                    error:false
                }
            }
        },
        getDemoCourseByIdFailure:(state)=>{
           return {
               ...state,
               demoCourse:{
                   ...state.demoCourse,
                   isFetching:false,
                   error:true
               }
           }
        }
    }
})

export const {getDemoCourseByIdStart,getDemoCourseByIdSuccess,getDemoCourseByIdFailure}=getDemoCourseByIdSlice.actions
const getDemoCourseByIdReducer=getDemoCourseByIdSlice.reducer
export default getDemoCourseByIdReducer