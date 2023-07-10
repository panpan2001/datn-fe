import axios from "axios";
import { authToken } from "../../data";

//Auth token we will use to generate a meeting and connect to it
// API call to create meeting
export const createMeeting = async ({ token }) => {
  const res = await fetch(`https://api.videosdk.live/v2/rooms`, {
    method: "POST",
    headers: {
      authorization: `${authToken}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({}),
  });
  console.log({res});
  //Destructuring the roomId from the response
  const {roomId,links} = await res.json();
  return {roomId,links};
};

export const getMeetingRoomByLink = async ({ token }) => {
  const res = await axios.get(`https://api.videosdk.live/v2/rooms`, {
    method: "POST",
    headers: {
      authorization: `${authToken}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({}),
  });
  console.log({res});
  //Destructuring the roomId from the response
 
};