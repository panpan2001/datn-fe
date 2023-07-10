import { Constants, useMeeting, usePubSub } from "@videosdk.live/react-sdk";
import axios from "axios";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import teacherStartRecording from "./teacherStartRecording";
import teacherStopRecording from "./teacherStopRecording";
import { useParams, useSearchParams } from "react-router-dom";
import getAllRecording from "./getAllRecording";
import addLinkVideoCourse from "../../redux/actions/Course/AddLinkVideoCourse";
import createAxiosJWT from "../../utils/createInstance";
import { getCourseByIdSuccess } from "../../redux/slices/Course/getCourseById";
import { getDemoCourseByIdSuccess } from "../../redux/slices/DemoCourse/getDemoCourseById";
import saveLinkVideoCourse from "../../redux/actions/Course/SaveLinkVideoCourse";
import saveLinkVideoDemoCourse from "../../redux/actions/DemoCourse/SaveLinkVideoDemoCourse";
import { getAllDemoCourseByTeacherIdSuccess } from "../../redux/slices/DemoCourse/getAllDemoCourseByTeacherId";
import { getAllCourseByIdTeacherSuccess } from "../../redux/slices/Course/getAllCourseByIdTeacher";


function Controls({meetingId}) {
  const user = useSelector((state) => state.login.login?.currentUser)
  const webhookUrl = "https://www.videosdk.live/callback";
  const awsDirPath = "https://datn.blob.core.windows.net/";
  const { localParticipant, changeMode } = useMeeting();
  const [joinLivestreamRequest, setJoinLivestreamRequest] = useState();
const [searchParams]= useSearchParams();
const isDemo = searchParams.get("isDemo");
const {idClass} = useParams()
const dispatch = useDispatch()
const axiosJWTLinkVideo = createAxiosJWT(dispatch, user, getAllCourseByIdTeacherSuccess)
const axiosJWTLinkVideoDemoCourse= createAxiosJWT(dispatch, user, getAllDemoCourseByTeacherIdSuccess)
  //Subscribe to new message on these topic and show confirmation dialog.
  
    const { leave,
       toggleMic,
       toggleWebcam ,
      //  meetingId,
        end,startRecording, 
        stopRecording,
        enableScreenShare ,
        toggleScreenShare
      } = useMeeting({
      // onMeetingLeft,
      // onParticipantLeft,
      // onSpeakerChanged,
      // onPresenterChanged,
      onRecordingStateChanged,
      // onRecordingStarted,
      // onRecordingStopped,
    });

    const handleStartRecording = () => {
      // If you don't have a `webhookUrl` or `awsDirPath`, you should pass null.
      startRecording(webhookUrl,awsDirPath, {
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
      // toast.success("Recording Started",{
      //   position: toast.POSITION.TOP_RIGHT
      // })
      // teacherStartRecording(meetingId);
    };
    console.log({idClass})
    const handleStopRecording = () => {
     
      stopRecording();
      // toast.success("Recording Stopped",{
      //   position: toast.POSITION.TOP_RIGHT
      // });
      // teacherStopRecording(meetingId);
      const data= getAllRecording(meetingId)
      .then((res)=>{
        console.log(" res.data.file.fileUrl",res.data.file)
      if(isDemo=='true'){
        console.log("isDemo")
        saveLinkVideoDemoCourse(meetingId,idClass,user?._id, user?.accessToken, axiosJWTLinkVideoDemoCourse,dispatch)
      }
      else{
        console.log("not isDemo")
        // addLinkVideoCourse(link, del_link, account_id, data._id, dispatch, axiosJWTLinkVideo, user.accessToken)
        saveLinkVideoCourse(meetingId,idClass,user?._id, user?.accessToken, axiosJWTLinkVideo,dispatch)
      }
      }).catch((err)=>{
        console.log(err)
      })
      
    };

    

    
    function onRecordingStateChanged(data) {
      const { status } = data;
    
      if (status === Constants.recordingEvents.RECORDING_STARTING) {
        console.log("Meeting recording is starting");
      } else if (status === Constants.recordingEvents.RECORDING_STARTED) {
        toast.success("Bắt đầu ghi ",{
          position: "bottom-right",
        });
      } else if (status === Constants.recordingEvents.RECORDING_STOPPING) {
        console.log("Meeting recording is stopping");
      } else if (status === Constants.recordingEvents.RECORDING_STOPPED) {
        toast.success("Dừng ghi ",{
          position: "bottom-right",
        });
      } else {
        //
        toast.error("Meeting recording is unknown",{
          position: "bottom-right",
        });
      }
    }
  
    return (
      <div style={{ display: "flex" , flexDirection:"row", gap:"1rem", justifyContent:"center", marginBottom:"1rem"}}>
        <button className='button is-danger' onClick={() => leave()}>Rời đi</button>
        <button className='button is-info ' onClick={() => toggleMic()}>Mic</button>
        <button className='button is-primary ' onClick={() => toggleWebcam()}>Webcam</button>
        {/* <button className='button is-success ' onClick={() => toggleScreenShare()}>Chia sẻ màn hình</button> */}
        {user && user.role_name=='teacher' && 
        <>
                <button className='button is-link ' onClick={() => handleStartRecording()}>Quay video</button>
                <button className='button is-warning ' onClick={() => handleStopRecording()}>Dừng quay</button>
                <button className='button is-light is-dark ' onClick={() => end()}>Kết thúc</button>
                <>
     
    </>
        </>
}
      </div>
    );
  }
  export default Controls
// https://learn.microsoft.com/en-us/azure/storage/blobs/storage-quickstart-blobs-portal#create-a-container 
  // https://learn.microsoft.com/en-us/azure/storage/blobs/blob-upload-function-trigger?tabs=azure-portal

// https://docs.videosdk.live/api-reference/realtime-communication/delete-recording
// https://docs.videosdk.live/docs/tutorials/user-dashboard/recording-storage-config

/*

sp=racwdli&st=2023-07-10T14:32:06Z&se=2023-07-10T22:32:06Z&sv=2022-11-02&sr=c&sig=reiYbrAuzNbY%2FIGrZC1AUd41xoA2Gj0wXgkA2pGuXQ0%3D

https://datn.blob.core.windows.net/datn?sp=racwdli&st=2023-07-10T14:32:06Z&se=2023-07-10T22:32:06Z&sv=2022-11-02&sr=c&sig=reiYbrAuzNbY%2FIGrZC1AUd41xoA2Gj0wXgkA2pGuXQ0%3D

https://datn.cognitiveservices.azure.com/

https://datn.blob.core.windows.net/datn/meeting-recordings/64ac1b344c7f6c4486ecf33c.mp4

meeting-recordings/64ac1bfb4c7f6c4486ecf33e.mp4

*/


// cach 1: blob container: ấpth : https://datn.cognitiveservices.azure.com/ vs 
// config key : DefaultEndpointsProtocol=https;AccountName=datn;AccountKey=MBtivFkWyoddkZvPe6eqRTLdG6lTON8qWlPDEQ3XgayNRj36oZESEwIdrx0stYzimq2jdqkSRVnY+AStI2Qk3g==;EndpointSuffix=core.windows.net
//  con cai https://datn.blob.core.windows.net/datn vs https://datn.blob.core.windows.net/datn chua thu 
// cach 2: video sdk sẻver: :  awspath: cai que gi cung dc
//config key : 76fb143fbebc42b09faaa2a2547bde32 => use