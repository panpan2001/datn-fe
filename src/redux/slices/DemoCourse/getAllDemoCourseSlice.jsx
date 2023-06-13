import { createSlice } from "@reduxjs/toolkit"

const initialState={
    demoCourses:{
        allCourses:null,
        isFetching:false,
        error:false
    }
}
const getAllDemoCoursesSlice= createSlice({
    name:"getAllDemoCourses",
    initialState: initialState,
    reducers:{
        getAllDemoCoursesStart:(state,action)=>{
            state.demoCourses.isFetching= true
        },
        getAllDemoCoursesSuccess:(state,action)=>{
            return {
                ...state,
                demoCourses:{
                    ...state.demoCourses,
                    allCourses:action.payload,
                    isFetching: false,
                    error: false
                }
            }
        },
        getAllDemoCoursesFailure:(state,action)=>{
            return {
                ...state,
                demoCourses:{
                    ...state.demoCourses,
                    isFetching: false,
                    error: true
                }
            }
        }
    }
})

export const {getAllDemoCoursesStart, getAllDemoCoursesSuccess, getAllDemoCoursesFailure} = getAllDemoCoursesSlice.actions
const getAllDemoCoursesReducer = getAllDemoCoursesSlice.reducer
export default getAllDemoCoursesReducer
