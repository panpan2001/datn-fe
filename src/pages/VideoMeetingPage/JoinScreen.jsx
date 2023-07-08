import { useState } from "react";

function JoinScreen({ getMeetingAndToken }) {
    const [meetingId, setMeetingId] = useState(null);
    const [ meetingLink, setMeetingLink ] = useState(null);
    const onClickLink = async (value) => {
      await getMeetingAndToken(value,1);
    };
    const onClickId = async (value) => {
      await getMeetingAndToken(value,2);
    };
    const onClick = async () => {
      await getMeetingAndToken(meetingId,0);
    };
    return (
      <>
       {/* <div>
        <input
          type="text"
          placeholder="Enter Meeting Link"
          onChange={(e) => {
            setMeetingLink(e.target.value);
          }}
        />
        <button onClick={()=>{onClickLink(meetingLink)}}>Join</button>
      
      </div>
      {" or "} */}
       <div className="join-screen container"
        style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: "1rem",
        margin:"auto",
        height:"100vh"
       }}>

        <div className="join-by-id_container" 
        style={{
          display: "flex",
          flexDirection: "row",
          gap: "1rem",
          justifyContent: "center",
          alignItems: "center",
          margin:"1rem ",
          width:"100%"
        }}>
        <input
       className="input"
         type="text"
         placeholder="Enter Meeting Id"
         onChange={(e) => {
           setMeetingId(e.target.value);
         }}
       />
       <button className="button is-danger is-light" type="button" onClick={()=>(onClickId(meetingId))}>Join</button>
        </div>
        <div className="create-meeting_container"
     style={{
      display: "flex",
      flexDirection: "row",
      gap: "1rem",
      justifyContent: "center",
      alignItems: "center",
     }}>
      <div><p>OR</p></div>
      
     <button className="button is-success" type="button" onClick={()=>{onClick()}}>Create Meeting</button>

     </div>
     </div>
    
      </>
     
    );
  }

  export default JoinScreen;