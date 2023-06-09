import { createSlice } from "@reduxjs/toolkit"

const initialValues={
    officialCourse:{
        currentCourse:null,
        isFetching:false,
        error:false
    }
}

const cancelRegisterCourseSlice= createSlice({
    name:"cancelRegisterCourse",
    initialState:initialValues,
    reducers:{
        cancelRegisterCourseStart:(state,action)=>{
            state.officialCourse.isFetching=true
            
        },
        cancelRegisterCourseSuccess:(state,action)=>{
            return{
                ...state,
                officialCourse:{
                    ...state.officialCourse,
                    currentCourse:action.payload,
                    isFetching:false,
                    error:false
                }
            }
            
        },
        cancelRegisterCourseFailure:(state,action)=>{
            return {
                ...state,
                officialCourse:{
                    ...state.officialCourse,
                    isFetching:false,
                    error:true
                }
            }
        }
    }
})

export const {cancelRegisterCourseStart,cancelRegisterCourseSuccess,cancelRegisterCourseFailure}=cancelRegisterCourseSlice.actions
const cancelRegisterCourseReducer=cancelRegisterCourseSlice.reducer
export default cancelRegisterCourseReducer