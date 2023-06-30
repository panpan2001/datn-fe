import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    demoCourse:{
        currentCourse:null,
        isFetching:false,
        error:false
    }
}

const changeDemoCourseAppearanceSlice = createSlice({
    name: 'changeDemoCourseAppearance',
    initialState: initialState,
    reducers: {
        changeDemoCourseAppearanceStart:(state) => {
            state.demoCourse.isFetching = true
        },
        changeDemoCourseAppearanceSuccess:(state,action)=>{
            return {
                ...state,
                demoCourse:{
                    ...state.demoCourse,
                    currentDemoCourse:action.payload,
                    isFetching:false,
                    error:false
            }
        }
    },
    changeDemoCourseAppearanceFailure:(state)=>{
        return{
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

export const {changeDemoCourseAppearanceFailure,changeDemoCourseAppearanceStart,changeDemoCourseAppearanceSuccess} = changeDemoCourseAppearanceSlice.actions
const changeDemoCourseAppearanceReducer = changeDemoCourseAppearanceSlice.reducer
export default changeDemoCourseAppearanceReducer
