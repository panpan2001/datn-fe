import React, { Suspense, useEffect, useMemo, useRef, useState } from "react";
import {
  MeetingProvider,
  MeetingConsumer,
  useMeeting,
  useParticipant,
} from "@videosdk.live/react-sdk";
import {  createMeeting, getMeetingRoomByLink } from "./API";
// import getMeetingAndToken from "./API";
import ReactPlayer from "react-player";
import JoinScreen from "./JoinScreen";
import MeetingView from "./MeetingView";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { authToken } from "../../data";

function VideoComponent(props) {
  return null;
}


function Container(props) {
  return null;
}



function VideoMeeting() {
  const {idJoinClass}= useParams();
  const [meetingId, setMeetingId] = useState(null);
  const [links, setLinks] = useState(null);
  const user = useSelector((state) => state.login.login?.currentUser)
  const getMeetingAndToken = async (value) => {
   
      setMeetingId(value);
      console.log({value});
    
  };
  const onMeetingLeave = () => {
    setMeetingId(null);
    setLinks(null);
  };
  return authToken && meetingId ?


    (
      <Suspense>
     
      <MeetingProvider
      style={{
        with: "100vw",
        height: "100vh",
        margin:"0"
      }}
        config={{
          meetingId,
          micEnabled: true,
          webcamEnabled: true,
          name: `${user.full_name}`,
          screenShareEnabled: true,
        }}
        token={authToken}
      >
        <MeetingView meetingId={meetingId}  onMeetingLeave={onMeetingLeave} />
      </MeetingProvider>
      </Suspense>
    ) : 
    (
      <Suspense>
      <JoinScreen getMeetingAndToken={getMeetingAndToken}  />

      </Suspense>
    );
}

export default VideoMeeting

// https://docs.videosdk.live/react/guide/video-and-audio-calling-api-sdk/setup-call/initialise-meeting#
// https://docs.videosdk.live/react/guide/video-and-audio-calling-api-sdk/control-remote-participant/remote-participant-media
// https://docs.videosdk.live/api-reference/realtime-communication/validate-room
// https://app.videosdk.live/api-keys?orgId=1N2JNGSAO6N4