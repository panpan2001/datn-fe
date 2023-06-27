import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    linkMeeting:{
        currentLink:null,
        isFetching:false,
        error:false
    }
}

const addLinkMeetingSlice = createSlice({
    name: "addLinkMeeting",
    initialState:initialState,
    reducers:{
        addLinkMeetingStart:(state,acction)=>{
            state.linkMeeting.isFetching=true
        },
        addLinkMeetingSuccess:(state,acction)=>{
            return {
                ...state,
                linkMeeting:{
                    ...state.linkMeeting,
                    currentLink:acction.payload,
                    isFetching:false,
                    error:false
                }
            }
        },
        addLinkMeetingFailure:(state)=>{
            return {
                ...state,
                linkMeeting:{
                    ...state.linkMeeting,
                    isFetching:false,
                    error:true
                }
            }
        }
    }
})

export const {addLinkMeetingStart,addLinkMeetingSuccess,addLinkMeetingFailure} = addLinkMeetingSlice.actions
const addLinkMeetingReducer = addLinkMeetingSlice.reducer
export default addLinkMeetingReducer