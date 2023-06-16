import { createSlice } from "@reduxjs/toolkit"


const initialState={
    teacher:{
        currentteacher:null,
        isFetching:false,
        error:false
    }
}

const deleteTeacherSlice=createSlice({
    name:"deleteTeacher",
    initialState:initialState,
    reducers:{
        deleteTeacherStart:(state,action)=>{
            state.teacher.isFetching=true
            
        },
        deleteTeacherSuccess:(state,action)=>{
            return {
                ...state,
                teacher:{
                    ...state.teacher,
                    currentteacher:action.payload,
                    isFetching:false,
                    error:false
            }
        }
    },
        deleteTeacherFailure:(state,action)=>{
            return {
                ...state,
                teacher:{
                    ...state.teacher,
                    isFetching:false,
                    error:true
            }
        }
        }
    }
})

export const {deleteTeacherStart,deleteTeacherSuccess,deleteTeacherFailure}=deleteTeacherSlice.actions
const deleteTeacherReducer=deleteTeacherSlice.reducer
export default deleteTeacherReducer
