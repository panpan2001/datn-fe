import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    linkVideo:{
        currentLink:null,
        isFetching:false,
        error:false
    }

}

const addLinkVideoCourseSlice = createSlice({
    name:"addLinkVideoCourse",
    initialState:initialState,
    reducers:{
        addLinkVideoCourseStart:(state)=>{
            state.linkVideo.isFetching=true
        },
        addLinkVideoCourseSuccess:(state,acction)=>{
            return {
                ...state,
                linkVideo:{
                    ...state.linkVideo,
                    currentLink:acction.payload,
                    isFetching:false,
                    error:false
                }
            }
        },
        addLinkVideoCourseFailure:(state)=>{
            return {
                ...state,
                linkVideo:{
                    ...state.linkVideo,
                    isFetching:false,
                    error:true
                }
            }
        }
    }
})

export const {addLinkVideoCourseStart,addLinkVideoCourseSuccess,addLinkVideoCourseFailure} = addLinkVideoCourseSlice.actions
const addLinkVideoCourseReducer = addLinkVideoCourseSlice.reducer
export default addLinkVideoCourseReducer