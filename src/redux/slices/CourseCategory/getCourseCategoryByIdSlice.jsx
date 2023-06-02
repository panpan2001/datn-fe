import { createSlice } from "@reduxjs/toolkit"

const initialState={
    courseCategory:{
        category:null,
        isFetching:false,
        error:false
    }
}

const getCourseCategoryByIdSlice = createSlice({
    name: 'getCourseCategoryById',
    initialState: initialState ,
    reducers: {
        getCourseCategoryByIdStart:(state)=>{
            state.courseCategory.isFetching=true
        },
        getCourseCategoryByIdSuccess: (state, action) => {
            return {
                ...state,
                courseCategory:{
                    ...state.courseCategory,
                    category:action.payload,
                    isFetching:false,
                    error:false
                }
            }
        },
        getCourseCategoryByIdFailure:(state)=>{
            return {
                ...state,
                courseCategory:{
                    ...state.courseCategory,
                    isFetching:false,
                    error:true
                }
            }
        }
    }
})

export const {getCourseCategoryByIdStart,getCourseCategoryByIdSuccess,getCourseCategoryByIdFailure} = getCourseCategoryByIdSlice.actions
const getCourseCategoryByIdReducer = getCourseCategoryByIdSlice.reducer
export default getCourseCategoryByIdReducer
