import { createSlice } from "@reduxjs/toolkit"

const initialState={
    courses:{
        allCourses:null,
        isFetching:false,
        error:false
    }
}

const getAllCoursesSlice= createSlice({
    name:"getAllCourses",
    initialState: initialState,
    reducers:{
        getAllCoursesStart:(state,action)=>{
            state.courses.isFetching= true
        },
        getAllCoursesSuccess:(state,action)=>{
            return {
                ...state,
                courses:{
                    ...state.courses,
                    allCourses:action.payload,
                    isFetching: false,
                    error: false
                }
            }
        },
        getAllCoursesFailure:(state,action)=>{
            return {
                ...state,
                courses:{
                    ...state.courses,
                    isFetching: false,
                    error: true
                }
            }
        }
    }
})

export const {getAllCoursesStart, getAllCoursesSuccess, getAllCoursesFailure} = getAllCoursesSlice.actions
const getAllCoursesReducer = getAllCoursesSlice.reducer
export default getAllCoursesReducer
