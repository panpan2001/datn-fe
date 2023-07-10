import axios from "axios";
import { authToken } from "../../data";
import { toast } from "react-toastify";

const teacherStartRecording = async(meetingId) => {
   console.log({meetingId});
       try {
        // const res=  await axios.post("https://api.videosdk.live/v2/recordings/start", JSON.stringify({
        //     "roomId": meetingId
        //     }),{
        //      headers: {
        //          authorization: `${authToken}`,
        //          "Content-Type": "application/json",
        //        },
        //     })
        //     console.log({res});
        const options = {
            method: "POST",
            headers: {
                "Authorization": `${authToken}`,
                "Content-Type": "application/json",
            },
            body: {"roomId" : meetingId},
        };
        console.log({options});
        const url= `https://api.videosdk.live/v2/recordings/start`;
        const response = await fetch(url, options);
        const data = await response.json();
        console.log(data);
            toast.success("Bắt đầu ghi ",{
              position: toast.POSITION.TOP_RIGHT
            })
       } catch (error) {
        console.log(error);
        toast.error("Bắt đầu ghi thất bại  ",{
          position: toast.POSITION.TOP_RIGHT
        })
       }
   }

   export default teacherStartRecording