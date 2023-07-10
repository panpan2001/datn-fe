import { authToken } from "../../data";

const getAllRecording= async(meetingId)=>{
 
    try {
        const options = {
            method: "GET",
            headers: {
                authorization: `${authToken}`,
                "Content-Type": "application/json",
            },
        };
        const url= `https://api.videosdk.live/v2/recordings?roomId=${meetingId}`;
        const response = await fetch(url, options);
        const data = await response.json();
        return data
    } catch (error) {
        console.log(error);
    
        
    }
}

export default getAllRecording