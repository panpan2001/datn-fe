import { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";

function JoinScreen({ getMeetingAndToken }) {
  const user = useSelector((state) => state.login.login?.currentUser)

  const {idJoinClass}= useParams();
    const [meetingId, setMeetingId] = useState(idJoinClass);
    const [ meetingLink, setMeetingLink ] = useState(null);
    const navigate = useNavigate();
    
    const onClickId = async (value) => {
      await getMeetingAndToken(value);
    };
 
    return (
      <>
     
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
        <img 
       style={{
        width: "40rem",
        marginBottom: "1rem",
        height:"auto"
      }}
       src={require('../../assets/images/addLink.jpg')}/>
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
         value={idJoinClass}
         onChange={(e) => {
           setMeetingId(e.target.value);
         }}
       />
       
       <button className="button is-danger is-light" type="button" onClick={()=>(onClickId(meetingId))}>OK</button>
        </div>
        <div className="create-meeting_container"
     style={{
      display: "flex",
      flexDirection: "row",
      gap: "1rem",
      justifyContent: "center",
      alignItems: "center",
     }}>
  
     <button className="button is-warning is-light" onClick={()=>{navigate(-1)}}>Thoát</button>

     </div>
     </div>
    
      </>
     
    );
  }

  export default JoinScreen;