import { useParticipant } from "@videosdk.live/react-sdk";
import { useEffect, useMemo, useRef } from "react";
import ReactPlayer from "react-player";

function ParticipantView(props) {
  const micRef = useRef(null);
  const { webcamStream, micStream, webcamOn, micOn, isLocal, displayName, disableMic } =
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
    <div className="participant column" style={{
      display: "flex",
      flexDirection: "column",
      gap: "1rem",
      justifyContent: "center",
      alignItems: "center",
      border: "1px solid",
      borderRadius: "8px",
      backgroundColor: "#343434",
      // minHeight: "22rem",
      maxWidth: "24rem",
    }}>

      <div className="participant-info" style={{
        textAlign: "center",
        // position: "absolute",
        top: "7rem",
        backgroundColor: "#343434",
        color: "white",
        borderRadius: "8px",
        border: "1px solid ",
        width: "350px",
        height: "4.5rem",
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
        // gap: "1rem"
      }}>
<div>
<p>Participant: {displayName}</p>

</div>
        <div style={{
          display: "flex",
          gap: "1rem",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "row"
        }}>
          <button className="button is-primary is-light">Mic:{" "}{micOn ? "ON" : "OFF"}  </button>
          <button className="button is-link is-light">Webcam: {webcamOn ? "ON" : "OFF"} </button>

        </div>
      </div>

      {/* <button onClick={handleMuteAllParticipant}>disableMic</button> */}

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
          height={"13rem"}
          width={"20rem"}
          onError={(err) => {
            console.log(err, "participant video error");
          }}
        />
      )}
    </div>
  );
}
export default ParticipantView