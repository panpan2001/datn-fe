import { useMeeting, useParticipant } from "@videosdk.live/react-sdk";
import { useState } from "react";
import Controls from "./Control";
import ParticipantView from "./ParticipantView";
import { Constants } from "@videosdk.live/react-sdk";

function MeetingView(props) {
  const webhookUrl = "https://webhook.your-api-server.com";

const awsDirPath = "/meeting-recordings/";
  const [joined, setJoined] = useState(null);
 
  console.log(props.link);
  //Get the method which will be used to join the meeting.
  //We will also get the participants list to display all participants
  const { join, participants ,startRecording, stopRecording} = useMeeting({
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
  return (
    <div className="container">
      <h3>Meeting Id: {props.meetingId}</h3>
      <h3>Link: {props.link.get_room}</h3>
      {joined && joined == "JOINED" ? (
        <div>
          <Controls />
          {[...participants.keys()].map((participantId) => (
            <ParticipantView
              participantId={participantId}
              key={participantId}
            />
          ))}
          <button onClick={handleLeaveMeeting}>Leave Meeting</button>
          <button onClick={handleEndMeeting}>End Meeting</button>
          <button onClick={handleStartRecording}>record </button>
          <button onClick={handleStopRecording}>stop record </button>
        </div>
      ) : joined && joined == "JOINING" ? (
        <p>Joining the meeting...</p>
      ) : (
        <>
          <button onClick={joinMeeting}>Join</button>
          
        </>

      )}
    </div>
  );
}

export default MeetingView