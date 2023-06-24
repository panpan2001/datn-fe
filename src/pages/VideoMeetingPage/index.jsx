import React, { useEffect, useMemo, useRef, useState } from "react";
import {
  MeetingProvider,
  MeetingConsumer,
  useMeeting,
  useParticipant,
} from "@videosdk.live/react-sdk";
import { authToken, createMeeting } from "./API";
// import getMeetingAndToken from "./API";
import ReactPlayer from "react-player";
import JoinScreen from "./JoinScreen";
import MeetingView from "./MeetingView";

function VideoComponent(props) {
  return null;
}


function Container(props) {
  return null;
}



function VideoMeeting() {
  const [meetingId, setMeetingId] = useState(null);
const [links, setLinks] = useState(null);
  const getMeetingAndToken = async (id) => {
    if(id == null) {
      const {roomId,links} = await createMeeting({ token: authToken });
      console.log({meetingId});
      setMeetingId(roomId);
      setLinks(links);
    }
    else {
      setMeetingId(id);
      setLinks(null);
    }
    // setMeetingId(meetingId);
  };
  const onMeetingLeave = () => {
    setMeetingId(null);
  };
  return authToken && meetingId ?
   (
    <MeetingProvider
      config={{
        meetingId,
        micEnabled: true,
        webcamEnabled: true,
        name: "C.V. Raman",
      }}
      token={authToken}
    >
      <MeetingView meetingId={meetingId} link={links} onMeetingLeave={onMeetingLeave} />
    </MeetingProvider>
  ) : (
    <JoinScreen getMeetingAndToken={getMeetingAndToken} />
  );
}

export default VideoMeeting

// https://docs.videosdk.live/react/guide/video-and-audio-calling-api-sdk/setup-call/initialise-meeting#
// https://docs.videosdk.live/react/guide/video-and-audio-calling-api-sdk/control-remote-participant/remote-participant-media
// https://docs.videosdk.live/api-reference/realtime-communication/validate-room
// https://app.videosdk.live/api-keys?orgId=1N2JNGSAO6N4