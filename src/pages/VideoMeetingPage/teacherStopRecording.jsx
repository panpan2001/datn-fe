import axios from "axios";
import { authToken } from "../../data";
import { toast } from "react-toastify";

const teacherStopRecording = async(meetingId) => {
    // const res=  await axios.post("https://api.videosdk.live/v2/recordings/end", {
    //  "roomId": meetingId
    //  },{
    //     headers: {
    //         authorization: `${authToken}`,
    //         "Content-Type": "application/json",
    //       },
    //  })
    //  console.log("stop recording",{res});
try {
    const options = {
        method: "POST",
        headers: {
            "Authorization": `${authToken}`,
            "Content-Type": "application/json",
        },
        body: JSON.stringify({"roomId" : meetingId}),
    };
    const url= `https://api.videosdk.live/v2/recordings/end`;
    const response = await fetch(url, options);
    const data = await response.json();
    console.log(data);
    toast.success("Dừng ghi ",{
      position: toast.POSITION.TOP_RIGHT
    })
} catch (error) {
    console.log(error);
    toast.error("Dừng ghi thất bại  ",{
      position: toast.POSITION.TOP_RIGHT
    })
    
}

   }

   export default teacherStopRecording