import { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";

function JoinScreen2({ getMeetingAndToken }) {
  const user = useSelector((state) => state.login.login?.currentUser)

  const {idJoinClass}= useParams();
    const [meetingId, setMeetingId] = useState(idJoinClass);
    const [ meetingLink, setMeetingLink ] = useState(null);
    const navigate = useNavigate();
    const onClickLink = async (value) => {
      await getMeetingAndToken(value,1);
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
        {/* <strong>Mã phòng học: {idJoinClass}</strong> */}
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
       
        </div>
        <div className="create-meeting_container"
     style={{
      display: "flex",
      flexDirection: "row",
      gap: "1rem",
      justifyContent: "center",
      alignItems: "center",
     }}>
      {
        user && user.role_name=='teacher' &&
        <button className="button is-success" type="button" onClick={()=>{onClick()}}>Tạo phòng học</button>

      }
     <button className="button is-warning is-light" onClick={()=>{navigate(-1)}}>Ra phòng học</button>

     </div>
     </div>
    
      </>
     
    );
  }

  export default JoinScreen2;