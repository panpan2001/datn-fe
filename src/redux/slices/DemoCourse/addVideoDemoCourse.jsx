import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    videoDemo:{
        currentLink:null,
        isFetching:false,
        error:false
    }
}

const addVideoDemoCourseSlice = createSlice({
    name: "addVideoDemoCourse",
    initialState:initialState,
    reducers:{
        addVideoDemoCourseStart:(state,acction)=>{
            state.videoDemo.isFetching=true
    },
        addVideoDemoCourseSuccess:(state,acction)=>{
            return {
                ...state,
                videoDemo:{
                    ...state.videoDemo,
                    currentLink:acction.payload,
                    isFetching:false,
                    error:false
                }
            }
        },
        addVideoDemoCourseFailure:(state)=>{
            return {
                ...state,
                videoDemo:{
                    ...state.videoDemo,
                    isFetching:false,
                    error:true
                }
            }
        }
    }
        
})

export const {addVideoDemoCourseStart,addVideoDemoCourseSuccess,addVideoDemoCourseFailure} = addVideoDemoCourseSlice.actions
const addVideoDemoCourseReducer = addVideoDemoCourseSlice.reducer
export default addVideoDemoCourseReducer