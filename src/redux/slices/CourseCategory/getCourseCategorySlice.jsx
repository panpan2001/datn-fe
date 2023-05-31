import { createSlice } from "@reduxjs/toolkit";

const initialState={
    courseCategories:{
        categories:null,
        isFetching:false,
        error:false
    }
}

const getCourseCategorySlice = createSlice({
    name: 'getCourseCategory',
    initialState: initialState ,
    reducers: {
        getCourseCategoryStart:(state)=>{
            state.courseCategories.isFetching=true
        },
        getCourseCategorySuccess: (state, action) => {
            return {
                ...state,
                courseCategories:{
                    ...state.courseCategories,
                    categories:action.payload,
                    isFetching:false,
                    error:false
                }
            }
        },
        getCourseCategoryFailure:(state)=>{
            return {
                ...state,
                courseCategories:{
                    ...state.courseCategories,
                    categories:null,
                    isFetching:false,
                    error:true
                }
            }
        }
    }
})

export const {getCourseCategoryStart,getCourseCategorySuccess,getCourseCategoryFailure} = getCourseCategorySlice.actions
const getCourseCategoryReducer = getCourseCategorySlice.reducer
export default getCourseCategoryReducer
