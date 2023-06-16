import { createSlice } from "@reduxjs/toolkit"

const initialState={
    demoCourse:{
        currentCourse: null,
        isFetching:false,
        error:true
    }
}

const adminDelDemoCourseSlice = createSlice({
    name:"adminDelDemoCourse",
    initialState:initialState,
    reducers:{
        adminDelDemoCourseStart:(state)=>{
            state.demoCourse.isFetching=true
        },
        adminDelDemoCourseSuccess:(state)=>{
            return {
                ...state,
                demoCourse:{
                    currentCourse:null,
                    isFetching:false,
                    error:false
                }
            }
        },
        adminDelDemoCourseFailure:(state)=>{
            return {
                ...state,
                demoCourse:{
                    isFetching:false,
                    error:true
                }
            }
        }
    }
})

export const {adminDelDemoCourseStart,adminDelDemoCourseSuccess,adminDelDemoCourseFailure} = adminDelDemoCourseSlice.actions
const adminDelDemoCourseReducer = adminDelDemoCourseSlice.reducer
export default adminDelDemoCourseReducer