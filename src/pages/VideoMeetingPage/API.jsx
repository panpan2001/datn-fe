import axios from "axios";

//Auth token we will use to generate a meeting and connect to it
export const authToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcGlrZXkiOiI5OTJmOTM5Yi1jMzJiLTRmYTEtYWU3OC04ZjFkYTdhZmY2N2UiLCJwZXJtaXNzaW9ucyI6WyJhbGxvd19qb2luIl0sImlhdCI6MTY4ODc1NTA2NCwiZXhwIjoxNjkxMzQ3MDY0fQ.5VARyalwljq1kYS5RzCXGUzJCGeIoSbjABgjcm23Qn0";
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