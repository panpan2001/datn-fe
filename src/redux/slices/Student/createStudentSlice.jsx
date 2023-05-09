import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    students: {
        infoStudent: null,
        isFetching: false,
        error: false
    }
}

const createStudentSlice = createSlice({
    name: "createStudentSlice",
    initialState: initialState,
    reducers: {
        createStudentStart: (state) => {
            state.students.isFetching = true
        },
        createStudentSuccess: (state, action) => {
            return {
                ...state,
                students: {
                    ...state.students,
                    infoStudent: action.payload,
                    isFetching: false,
                    error: false
                }
            }
        },
        createStudentFailure: (state, action) => {
            return {
                ...state,
                students: {
                    ...state.students,
                    isFetching: false,
                    error: true
                }
            }
        }
    }
})

export const { createStudentStart, createStudentSuccess, createStudentFailure } = createStudentSlice.actions
const createStudentReducer = createStudentSlice.reducer
export default createStudentReducer