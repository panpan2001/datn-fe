import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    linkMeeting:{
        currentLink:null,
        isFetching:false,
        error:false
    }
}

const addLinkMeetingDemoCourseSlice = createSlice({
    name: "addLinkMeetingDemoCourse",
    initialState:initialState,
    reducers:{
        addLinkMeetingDemoCourseStart:(state,acction)=>{
            state.linkMeeting.isFetching=true
        },
        addLinkMeetingDemoCourseSuccess:(state,acction)=>{
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
        addLinkMeetingDemoCourseFailure:(state)=>{
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

export const {addLinkMeetingDemoCourseStart,addLinkMeetingDemoCourseSuccess,addLinkMeetingDemoCourseFailure} = addLinkMeetingDemoCourseSlice.actions
const addLinkMeetingDemoCourseReducer = addLinkMeetingDemoCourseSlice.reducer
export default addLinkMeetingDemoCourseReducer
