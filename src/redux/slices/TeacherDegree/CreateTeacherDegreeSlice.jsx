import { createSlice } from "@reduxjs/toolkit"


const initialState = {
    degree:{
        currentDegree:null,
        isFetching:false,
        error:false
    }
}

const createTeacherDegreeSlice= createSlice({
    name: 'createTeacherDegree',
    initialState: initialState,
    reducers: {
        createTeacherDegreeStart: (state, action) => {
            state.degree.isFetching = true
        },
        createTeacherDegreeSuccess: (state, action) => {
            return {
                ...state,
                degree: {
                    ...state.degree,
                    currentDegree: action.payload,
                    isFetching: false,
                    error: false
                }
            }
        },
        createTeacherDegreeFailure: (state, action) => {
            return {
                ...state,
                degree: {
                    ...state.degree,
                    isFetching: false,
                    error: true
                }
            }
        }
    }
})

export const { createTeacherDegreeStart, createTeacherDegreeSuccess, createTeacherDegreeFailure } = createTeacherDegreeSlice.actions
const createTeacherDegreeReducer = createTeacherDegreeSlice.reducer
export default createTeacherDegreeReducer
