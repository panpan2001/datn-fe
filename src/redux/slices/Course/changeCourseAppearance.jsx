import { createSlice } from "@reduxjs/toolkit"

const initialState={
    course:{
        currentCourse:null,
        isFetching:false,
        error:false
    }
}

const changeCourseAppearanceSlice = createSlice({
    name: 'changeCourseAppearance',
    initialState:initialState,
    reducers:{
        changeCourseAppearanceStart:(state)=>{
            state.course.isFetching=true
        },
        changeCourseAppearanceSuccess:(state,action)=>{
            return {
                ...state,
                course:{
                    ...state.course,
                    currentCourse:action.payload,
                    isFetching:false,
                    error:false
                }
            }
        },
        changeCourseAppearanceFailure:(state)=>{
            return {
                ...state,
                course:{
                    ...state.course,
                    isFetching:false,
                    error:true
                }
            }
        }
    }
})

export const {changeCourseAppearanceStart,changeCourseAppearanceSuccess,changeCourseAppearanceFailure} = changeCourseAppearanceSlice.actions
const changeCourseAppearanceReducer = changeCourseAppearanceSlice.reducer
export default changeCourseAppearanceReducer
