import { useMeeting, useParticipant } from "@videosdk.live/react-sdk";
import { useState } from "react";
import Controls from "./Control";
import ParticipantView from "./ParticipantView";
import { Constants } from "@videosdk.live/react-sdk";
import { useNavigate } from "react-router-dom";

function MeetingView(props) {
  const webhookUrl = "https://webhook.your-api-server.com";
const navigate = useNavigate();
  const awsDirPath = "/meeting-recordings/";
  const [joined, setJoined] = useState(null);

  const { join, participants, startRecording, stopRecording } = useMeeting({
    //callback for when meeting is joined successfully
    onMeetingJoined: () => {
      setJoined("JOINED");
    },
    //callback for when meeting is left
    onMeetingLeft: () => {
      props.onMeetingLeave();
    },
  });
  const joinMeeting = () => {
    setJoined("JOINING");
    join();
  };
  function onMeetingLeft() {
    console.log("onMeetingLeft");
  }

  console.log({ participants })
 

  if (joined && joined == "JOINED") {
    return (
      <div className="meeting-view_container container-fluid " style={{
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
        padding: "1rem ",
        width: "100%",
        minHeight: "100vh",
        justifyContent: "flex-start",
        alignItems: "center",

      }}>
        <div style={{
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
          justifyContent: "center",
          alignItems: "flex-start",
          border: "1px solid var(--border-color)",
          backgroundColor: "white",
          borderRadius: "8px",
          padding: "1rem",
        }}>
          <div className="metting-view_container" style={{
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
            marginBottom: "1rem",
          }}>

            <h3 >Meeting Id: {props.meetingId}</h3>
             </div>
          </div>
          <Controls meetingId={props.meetingId} />
          <div className="participants_container columns is-multiline" style={{
            display: "flex",
            gap: "1rem",
            flexDirection: "row ",
            alignItems: "center",
            justifyContent: "center",
          }}>
            {[...participants.keys()].map((participantId) => (
              <ParticipantView
                participantId={participantId}
                key={participantId}
              />
            ))}
          </div>
        </div>
      
    )
  } else
    if (joined && joined == "JOINING") {
      return <div style={{
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
        alignItems: "center",
        justifyContent: "center",
        margin: "auto",
        minHeight: "80vh",

      }}>
        <p>Đang vào cuộc họp...</p>
        {/* <button className="button is-warning is-light" onClick={()=>{navigate(-1)}}>Thoát</button> */}
      </div>

    } else {
      return <div style={{
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
        alignItems: "center",
        justifyContent: "center",
        margin: "auto",
        minHeight: "80vh",

      }}>
<div style={{
  display: "flex",
  flexDirection: "row",
  gap: "1rem",
  alignItems: "center",
  justifyContent: "center",
}}>
 <button className="button is-info " onClick={()=>{joinMeeting()}}>Tham gia</button>
        <button className="button is-danger " onClick={()=>{navigate(-1)}}>Thoát</button>
</div>
       
        <img style={{
          width: "40rem",
          marginBottom: "1rem",
          height:"auto"
        }}
        src={require('../../assets/images/joinMeeting.jpg')}/>

        </div>
      // joinMeeting();
    }
}

export default MeetingView
 


/* 

//Event to know some other participant left
  function onParticipantLeft(participant) {
    console.log(" onParticipantLeft", participant);
  }
  function onSpeakerChanged(activeSpeakerId) {
    console.log("onSpeakerChanged", activeSpeakerId);
  }

  function onPresenterChanged(presenterId) {
    console.log("onPresenterChanged", presenterId);
  }
  const { meetingId, leave, end } = useMeeting({
    onMeetingLeft,
    onParticipantLeft,
    onSpeakerChanged,
    onPresenterChanged,
    onRecordingStateChanged
  });

  const handleLeaveMeeting = () => {
    // Leaving Meeting
    leave();
  };
  const handleEndMeeting = () => {
    // Ending Meeting
    end();
  };

  const handleStartRecording = () => {
    // Start Recording
    // If you don't have a `webhookUrl` or `awsDirPath`, you should pass null.
    startRecording(webhookUrl, awsDirPath, {
      layout: {
        type: "GRID",
        priority: "SPEAKER",
        gridSize: 4,
      },
      theme: "DARK",
      mode: "video-and-audio",
      quality: "high",
      orientation: "landscape",
    });
  };

  const handleStopRecording = () => {
    // Stop Recording
    stopRecording();
  };
  function onRecordingStateChanged(data) {
    const { status } = data;
  
    if (status === Constants.recordingEvents.RECORDING_STARTING) {
      console.log("Meeting recording is starting");
    } else if (status === Constants.recordingEvents.RECORDING_STARTED) {
      console.log("Meeting recording is started");
    } else if (status === Constants.recordingEvents.RECORDING_STOPPING) {
      console.log("Meeting recording is stopping");
    } else if (status === Constants.recordingEvents.RECORDING_STOPPED) {
      console.log("Meeting recording is stopped");
    } else {
      //
      console.log("Meeting recording is unknown");
    }
  }

*/