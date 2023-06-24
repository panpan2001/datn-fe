import { useParticipant } from "@videosdk.live/react-sdk";
import { useEffect, useMemo, useRef } from "react";
import ReactPlayer from "react-player";

function ParticipantView(props) {
    const micRef = useRef(null);
    const { webcamStream, micStream, webcamOn, micOn, isLocal, displayName ,disableMic } =
      useParticipant(props.participantId);
  
    const videoStream = useMemo(() => {
      if (webcamOn && webcamStream) {
        const mediaStream = new MediaStream();
        mediaStream.addTrack(webcamStream.track);
        return mediaStream;
      }
    }, [webcamStream, webcamOn]);
  // console.log({videoStream},{webcamOn},{webcamStream});
    useEffect(() => {
      if (micRef.current) {
        if (micOn && micStream) {
          const mediaStream = new MediaStream();
          mediaStream.addTrack(micStream.track);
  
          micRef.current.srcObject = mediaStream;
          micRef.current
            .play()
            .catch((error) =>
              console.error("videoElem.current.play() failed", error)
            );
        } else {
          micRef.current.srcObject = null;
        }
      }
    }, [micStream, micOn]);
    function handleMuteAllParticipant() {
     
       
        if (!isLocal) {
          disableMic();
        }
   
    }
    return (
      <div>
        <p>
          Participant: {displayName} | Webcam: {webcamOn ? "ON" : "OFF"} | Mic:{" "}
          {micOn ? "ON" : "OFF"}
        </p>
        <button onClick={handleMuteAllParticipant}>disableMic</button>

        <audio ref={micRef} autoPlay playsInline muted={isLocal} />
        {webcamOn && (
          <ReactPlayer
            //
            autoPlay={true}
            playsinline // very very imp prop
            pip={false}
            light={false}
            controls={false}
            muted={true}
            playing={true}
            //
            url={videoStream}
            //
            height={"300px"}
            width={"300px"}
            onError={(err) => {
              console.log(err, "participant video error");
            }}
          />
        )}
      </div>
    );
  }
export default ParticipantView