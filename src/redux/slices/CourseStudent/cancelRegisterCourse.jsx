import { createSlice } from "@reduxjs/toolkit"

const initialValues={
    officialCourses:{
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
            return{
                ...state,
                officialCourses:{
                    ...state.officialCourses,
                    isFetching:true,
                }
            }
        },
        cancelRegisterCourseSuccess:(state,action)=>{
         
            return{
                ...state,
                officialCourses:{
                    ...state.officialCourses,
                    currentCourse:action.payload,
                    isFetching:false,
                    error:false
                }
            }
            
        },
        cancelRegisterCourseFailure:(state,action)=>{
            return {
                ...state,
                officialCourses:{
                    ...state.officialCourses,
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