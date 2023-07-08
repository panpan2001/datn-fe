import { useMeeting } from "@videosdk.live/react-sdk";


function Controls() {
    const { leave, toggleMic, toggleWebcam } = useMeeting();
    return (
      <div style={{ display: "flex" , flexDirection:"row", gap:"1rem", justifyContent:"center", marginBottom:"1rem"}}>
        <button className='button is-danger' onClick={() => leave()}>Leave</button>
        <button className='button is-info ' onClick={() => toggleMic()}>toggleMic</button>
        <button className='button is-primary ' onClick={() => toggleWebcam()}>toggleWebcam</button>
      </div>
    );
  }
  export default Controls